<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
/* eslint-disable no-console */
import HelloWorld from './components/HelloWorld.vue'
import { getLastestAnima } from '@/service/bilibili-server.js'
export default {
    name: 'app',
    components: {
        HelloWorld
    },
    async created() {
        try {
            let data = await getLastestAnima()
            console.log('getLastestAnima:data:>>>', data)
            // bilibili 这边返回的接口中，有时候这个属性会少，导致反向校验出错
            // 使用下面这段代码，可以找出缺失的是哪一个对象属性长度
            // mockjs在这方便好像有bug，在反向校验的时候，无法定向到具体位置
            // let result = data.result
            // let count = 0
            // result.forEach((obj, index) => {
            //     console.log('index :', index)
            //     for (const key in obj) {
            //         if (obj.hasOwnProperty(key)) {
            //             count++
            //         }
            //     }
            //     console.log('count :', count)
            //     count = 0
            // })
        } catch (error) {
            console.log('getLastestAnima:error:>>>', error)
        }
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
