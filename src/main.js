import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import store from './store'
import Axios from 'axios'

Vue.use(ElementUI)


// status < 500 不会抛错误
Axios.defaults.validateStatus = status => {
  return status < 500
}
// 设置请求token
Axios.interceptors.request.use(config => {
  var token = sessionStorage.getItem('token')
  config.headers['Authorization'] = 'Bearer ' + token
  console.log(config)
  return config
})

// 接口错误拦截
Axios.interceptors.response.use(res => {
  // console.log(res)
  if (res.status === 401) {
    app && app.$message({
      type: 'warning',
      message: '登录身份过期，请重新登录。'
    })
    sessionStorage.removeItem('token')
    sessionStorage.removeItem('user')
    router.push({name: 'login'})
    return Promise.reject(new Error('身份过期'))
  } else {
    return res.data
  }
}, err => {
  app.$notify.error({
    title: '服务错误',
    message: '服务器响应错误 ' + err.message
  })
  return Promise.reject(err)
})


Vue.prototype.$http = Axios
Vue.http = Axios

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
