import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Login from '@/views/Login'
import CarouselTable from '@/views/CarouselTable'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home,
      children: [
        {
          path: '/',
          name: "Home",
          redirect: '/CarouselTable'
        },
        {
          path: '/CarouselTable',
          name: 'CarouselTable',
          component: CarouselTable
        }
      ]
    },{
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
