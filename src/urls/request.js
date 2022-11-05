import axios from 'axios';
'https://api.notion.com/v1/databases/9c3c747d981540799c2c17aaf3af15b7/query'
'Authorization: Bearer secret_lVlC1fCK8kVPwlJqaTZJM3QUSNAygUTtYddPpcRsxac'
'Content-Type: application/json'
'Notion-Version: 2022-02-22'
const data = {
    "filter": {
        "property": "Score",
        "number": {
            "greater_than": 1
        }
    },
    "sorts": [
        {
            "property": "Date",
            "direction": "descending"
        }
    ]
}
const ConfigBaseURL = ''
const Service = axios.create({
    timeout: 0, // 请求超时时间
    baseURL: ConfigBaseURL,
    method: 'post',
    headers: {
        'Content-Type': 'application/json',
        'Notion-Version': '2022-02-22',
        "Authorization": 'Bearer secret_lVlC1fCK8kVPwlJqaTZJM3QUSNAygUTtYddPpcRsxac'
    }
})
Service.interceptors.request.use(config => {
    return config
})
// 添加响应拦截器
Service.interceptors.response.use(response => {
    return response.data
}, error => {
    return Promise.reject(error)
})
const queryList = () => {
    return Service.get('/api/getData')
}

export { queryList }