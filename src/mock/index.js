// 使用 Mock
import Mock from 'mockjs'
import modules from './modules'
// 注册每个 mock api
for (let key in modules) {
    let module = modules[key]
    Mock.mock(...module)
}