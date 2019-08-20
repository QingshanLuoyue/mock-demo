/* eslint-disable no-console */
import axios from 'axios'
// 开发环境使用，打包前注意要注释
import proxyValid from '@/mock/utils/proxy-valid.js'
export default class baseRequest {
    constructor(baseURL) {
        baseURL = baseURL || window.location.origin
        this.$http = axios.create({
            timeout: 30000,
            baseURL
        })
        this.$http.interceptors.request.use(async config => {
            return config
        })
        this.$http.interceptors.response.use(
            ({ data, config }) => {
                // 开发环境需要，生产环境需要注释
                proxyValid(config.url, config.method, data)
                if (data.code === 0) {
                    return data
                } else {
                    return Promise.reject(data)
                }
            },
            e => {
                console.log(e, '报错了')
                return Promise.reject({
                    msg: '网络开小差了,请稍后重试'
                })
            }
        )
    }
    post(url, params = {}, config = {}) {
        return this.$http.post(url, params, config)
    }
    get(url, params = {}, config = {}) {
        return this.$http.get(url, {
            params,
            ...config
        })
    }
}
