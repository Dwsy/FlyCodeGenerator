import axios from "axios";

export async function getBizObjectsData() {
    try {
        // 获取用户 Token 从 sessionStorage 中
        const userToken = sessionStorage.getItem('userToken');
        if (!userToken) {
            console.error('User token not found in sessionStorage');
            return;
        }
        const {data} = await axios.post('http://121.37.206.131:18001/bizserv/biz/getBizObjects', {}, {
            headers: {
                'Idetoken': userToken,
                'Content-Type': 'application/json',
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36 Edg/117.0.2045.43",
                "ctcode": 7,
                "idetoken": "eyJhbGciOiJIUzI1NiJ9.eyJMb2dpblVzZXIiOnsiYXBwSWQiOiIxIiwidGVuYW50Q29kZSI6IjExMTMwNDEiLCJwcm9kdWN0Q29kZSI6IjEwMDAwMDAwMDAwMDAwMDAwMCIsInByb2R1Y3RWZXJzaW9uQ29kZSI6IjEwMDAwMDAwMDAwMDAwMDA2MiIsImNsaWVudFR5cGVDb2RlIjpudWxsLCJ1c2VyQ29kZSI6IjE2OTU5ODU0MjY0OTU1NzQwMTYiLCJhY2NvdW50Q29kZSI6IjE2OTU5ODU4Mjg2NzU5NTg0MTYiLCJ1c2VybmFtZSI6IumCk-aWh-WuhyIsInRva2VuSWQiOiJlNWIzMDlkMC04MmY2LTRhMmMtODI0ZS1kN2U0MTVhMzU1M2MiLCJhcHBDb2RlcyI6bnVsbCwiYXBwQ29kZSI6bnVsbCwicGxhdFJvbGVDb2RlcyI6WyIxMTg0NjcxOTM2MDY0NjU1MzYwIl0sIm1ldGFtb2RlbHR5cGUiOjIsIm9yZ0NvZGUiOiIxNTUxODEyNDk1MDA4NzMxMTM2IiwiY2VudGVyUm9sZSI6ZmFsc2V9LCJleHAiOjE3MjczOTkyMjJ9.w94lwrvpBDz3Uy39y_KE6MXLJR09OwoSaSZizjgsZiE",
                "metamodeltype": 2,
                "pdcode": '100000000000000000',
                "pscode": '829609747450691584',
                "pvcode": '100000000000000062',
                "req_id": 23,
                "tecode": '1113041',
                "tenantname": "%E5%AE%9E%E6%96%BD1%E7%BB%846.2%E6%B5%8B%E8%AF%95%E7%8E%AF%E5%A2%83",
                "usercode": '1695985426495574016',
                "userinfoname": "%E9%82%93%E6%96%87%E5%AE%87",
                "username": "dengwenyu"

            }
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
    let modellogiccode = document.URL.match(/\/([^\/]+)\/?$/)[1];
    try {
        // 获取用户 Token 从 sessionStorage 中
        const userToken = sessionStorage.getItem('userToken');
        if (!userToken) {
            console.error('User token not found in sessionStorage');
            return;
        }
        const {data} = await axios.post('http://121.37.206.131:18001/bizserv/bizmodel/getModelLogic', {
            "modellogiccode": modellogiccode
        }, {
            headers: {
                'Idetoken': userToken,
                'Content-Type': 'application/json'
            }
        })

        return data
        // .then(function (response) {
        //     console.log(response.data)
        //     let protocolData = response.data.resp_data;
        //     protocolDataMap.set(modellogiccode, protocolData)
        // })
        // .catch(function (error) {
        //     console.log(error);
        // });
    }
    catch (error) {
        console.error('axios error:', error);
    }
}

