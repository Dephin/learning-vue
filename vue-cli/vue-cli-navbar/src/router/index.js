import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '@/views/index'
import UserCenter from '@/views/userCenter'
import UserInfo from '@/views/userInfo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/index',
      name: 'index',
      component: Index
    },
    {
      path: '/userCenter',
      name: 'userCenter',
      component: UserCenter,
      children: [
        {
          path: 'userInfo',
          name: 'userInfo',
          component: UserInfo
        }
      ]
    }
  ]
})
