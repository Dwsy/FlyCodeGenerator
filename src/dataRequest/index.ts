import axios from "axios";
import { UiProtocol } from "../type/formProtocol";

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
        const exeIp = sessionStorage.getItem("exeIp")
        const ip = sessionStorage.getItem("IP")
        const { data } = await axios.post(ip + '/bizserv/biz/getBizObjects', {}, {
            headers: getHeader()
        })
        return data
    }
    catch (error) {
        // 处理错误
        console.error('axios error:', error);
    }
}
export const getUiProtocol = async (pagecode: string = null) => {
    // http://139.155.96.158:8001/bizserv/bizpage/getPage
    const temp = document.URL.split("/")
    if (temp.length == 6) {
        pagecode = pagecode || temp[5]
        try {
            // 获取用户 Token 从 sessionStorage 中
            const userToken = sessionStorage.getItem('userToken');
            if (!userToken) {
                console.error('User token not found in sessionStorage');
                return;
            }
            const ip = sessionStorage.getItem("IP")
            // debugger
            const { data } = await axios.post(ip + '/bizserv/bizpage/getPage', {
                "code": pagecode
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
            const ip = sessionStorage.getItem("IP")
            // debugger
            const { data } = await axios.post(ip + '/bizserv/bizmodel/getModelLogic', {
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

