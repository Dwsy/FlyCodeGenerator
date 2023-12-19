import { GM_setClipboard } from "../../util";
import { formatFquery } from "../../util/formateFquery";
import { getMonacoModel, monacoInitializedUtil } from "../../util/monacoUtil";


export function getFqueryModel() {
    const monacoModel = getMonacoModel()
    let text = monacoModel.getValue()

    // 使用正则表达式进行匹配，忽略大小写
    let regex = /(\w+)\s*=\s*(select|SELECT)[^;]+;/g;
    var matches = text.match(regex);

    const allFQuery: Array<string> = []
    if (matches) {
        matches.forEach(function (match, index) {
            var assignment = match.match(/(\w+)\s*=\s*(select|SELECT)/);
            console.log(assignment)
            if (assignment) {
                let variableName = assignment[1];
                let query = match.substring(match.indexOf(variableName)).trim();
                console.log(query)
                const partsIndex = query.indexOf('=');

                // if (parts.length === 2) {
                // const variableName = parts[0].trim();
                const queryString = query.substring(partsIndex + 1).trim();
                // console.log("Variable Name:", variableName);
                // console.log("Query String:", queryString);
                // const sqlStr = "`" + queryString + "`"

                let formattedSQL = formatFquery(queryString.replaceAll("//", "--//"), "")
                formattedSQL = formattedSQL.replaceAll("--//", "//")
                console.log(formattedSQL)

                text = text.replace(queryString, formattedSQL)
            }
        });
        console.log(text)
        GM_setClipboard(text, "text")
    } else {
        console.log("No matching SQL statements found in the text.");
    }
}



interface FlycodeQuery {
    query: string;
    select: string[];
    from: string;
    joins: FlycodeJoin[];
    where: string;
    orderBy: string;
    parameters: { [key: string]: string };
    permissions?: string;
    paging: boolean;
    noPlat: boolean;
    ruleObj?: string;
}

interface FlycodeJoin {
    type: string;
    table: string;
    on: string;
}

function parseFlycodeQueryString(flycodeString: string): FlycodeQuery | null {
    debugger
    const flycodeQuery: FlycodeQuery = {
        query: "",
        select: [],
        from: "",
        joins: [],
        where: "",
        orderBy: "",
        parameters: {},
        paging: false,
        noPlat: false,
    };

    const lines = flycodeString.split("\n");
    let selectStarted = false;

    for (const line of lines) {
        if (!selectStarted) {
            const selectMatch = line.match(/(.*?)(?=\s*=\s*select\s+)/i);
            if (selectMatch) {
                flycodeQuery.query = selectMatch[1].trim();
                selectStarted = true;
            }
        }

        if (selectStarted) {
            if (line.trim() === "paging") {
                flycodeQuery.paging = true;
                continue;
            } else if (line.trim() === "RULEOBJ(onrule);") {
                flycodeQuery.ruleObj = "onrule";
                continue;
            } else if (line.trim() === "ORDER BY create_time DESC") {
                flycodeQuery.orderBy = "create_time DESC";
                continue;
            }

            const joinMatch = line.match(/(LEFT JOIN|INNER JOIN|RIGHT JOIN|FULL JOIN)\s+(\w+)\s+ON\s+(.+)/i);
            if (joinMatch) {
                const join: FlycodeJoin = {
                    type: joinMatch[1],
                    table: joinMatch[2],
                    on: joinMatch[3],
                };
                flycodeQuery.joins.push(join);
                continue;
            }

            if (line.trim() === "WHERE 1=1") {
                continue;
            }

            const whereMatch = line.match(/and\s+(.+?)\s+{(.+?)}/i);
            if (whereMatch) {
                const param = whereMatch[1].trim();
                const paramName = whereMatch[2];
                const paramNameRegex = new RegExp(`{\\s*${paramName}\\s*}`, "gi");
                flycodeQuery.where += `AND ${param.replace(paramNameRegex, paramName)}`;
                flycodeQuery.parameters[paramName] = "";
            }
        }
    }

    return flycodeQuery;
}
