import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {
      path: '/',
      name: 'HelloWorld',
      component: () => import('@/components/HelloWorld')
    },
  ]
})

// 路由钩子函数
// router.beforeEach((to, from, next) => {
//   iView.LoadingBar.start()
//   if (to.path === '/login') {
//     next()
//   } else if (sessionStorage.getItem('cookie')) {
//     next()
//     iView.LoadingBar.finish()
//   } else if (!sessionStorage.getItem('cookie')) {
//     next({ path: '/login' })
//     iView.LoadingBar.finish()
//   }
// })

// router.afterEach((to) => {
//   iView.LoadingBar.finish()
// })
