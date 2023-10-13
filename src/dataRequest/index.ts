import axios from "axios";

function getHeader() {
    // 获取用户 Token 从 sessionStorage 中
    const userToken = sessionStorage.getItem('userToken');
    const username = sessionStorage.getItem('chineseName');
    if (!userToken) {
        console.error('User token not found in sessionStorage');
        return;
    }
    type tenantType = {
        tenantcode: string;
        tenantname: string;
        productcode: string;
        productversioncode: string;
        productseriescode: string;
        productversionname: string;
        productname: string;
        metamodeltype: string;
        metamodelcode: string;
        showSedNameTip: boolean;
        showNameTip: boolean;
    }
    const tenant: tenantType = JSON.parse(localStorage.getItem("tenantList")).filter((ten) => {
        console.log(ten.tenantname)
        console.log(sessionStorage.getItem("tenantName"))
        return ten.tenantname == sessionStorage.getItem("tenantName")
    })[0]
    let headers = {
        'idetoken': userToken,
        'Content-Type': 'application/json',
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36 Edg/117.0.2045.43",
        "ctcode": 7,
        "metamodeltype": 2,
        // "pdcode": '100000000000000000',
        "pdcode": tenant.productcode,
        "pscode": tenant.productseriescode,
        "pvcode": tenant.productversioncode,
        "req_id": 23,
        "tecode": tenant.tenantcode,
        "tenantname": encodeURIComponent(tenant.tenantname),
        "usercode": localStorage.getItem('userCode'),
        "userinfoname": encodeURIComponent(username),
        "username": encodeURIComponent(username),

    }
    return headers
}


export async function getBizObjectsData() {
    try {



        const { data } = await axios.post('http://121.37.206.131:18001/bizserv/biz/getBizObjects', {}, {
            headers: getHeader()
        })
        return data
        // bizObjects = response.data;
        // // 输出 tableDatas 的长度
        // tableDatas = bizObjects.resp_data
        // console.log("datasNum:", tableDatas.length);
        // // 遍历 tableDatas 数组
        // tableDatas.forEach((data) => {
        //     // 将 data 对象添加到 tableDataMap 中
        //     tableDataMap.set(data.objectcode, data);
        //     // 遍历 data.properties 数组
        //     // console.log("data.properties",data.properties)
        //     data.properties.forEach((columnData) => {
        //         // 将 columnData 对象添加到 columnDataMap 中
        //         columnDataMap.set(columnData.propertycode, columnData);
        //     });
        // });
    }
    catch (error) {
        // 处理错误
        console.error('axios error:', error);
    }
}

export async function getProtocol() {
    const temp = document.URL.split("/")
    if (temp.length == 6) {
        let modellogiccode = temp[5]
        try {
            // 获取用户 Token 从 sessionStorage 中
            const userToken = sessionStorage.getItem('userToken');
            if (!userToken) {
                console.error('User token not found in sessionStorage');
                return;
            }
            const { data } = await axios.post('http://121.37.206.131:18001/bizserv/bizmodel/getModelLogic', {
                "modellogiccode": modellogiccode
            }, {
                headers: getHeader()
            })

            return data
        }
        catch (error) {
            console.error('axios error:', error);
        }
    }


}

