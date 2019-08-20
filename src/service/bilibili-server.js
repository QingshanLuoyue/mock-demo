import fetch from '@/utils/fetch.js'
let axios = new fetch()
export const getLastestAnima = () => {
    return axios.get('/api/timeline_v2_global')
}