import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '@/components/HelloWorld'
import Demo from '@/components/Demo'
import List from '@/components/list/list'
import modalTest from '@/components/modalTest'
Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    { path: '/',
      name: 'Demo',
      component: Demo,
      meta: {title: 'vue scaffold', keepLive: true}
    },
    { path: '/list',
      name: 'List',
      component: List,
      meta: {title: 'vue scaffold', keepLive: true}
    },
    {
      path: '/modalTest',
      name: 'modalTest',
      component: modalTest,
      meta: {title: 'modal滚动穿透问题的解决方案', keepLive: false}
    }
  ]
})

console.log('host:::', window.HOST)

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'vue scaffold'
  let shareTit = '房知了-买房有疑问？来问就知了！'
  let shareDesc = '汇集地产界十几年经验专业大咖，不管买房卖房投资还是贷款，不懂就来问吧。'
  let shareLink = location.href.split('#')[0]
  let shareImgUrl = location.protocol + '//' + location.hostname + '/weixin_public/static/images/shareLogo.jpg'
  window.setShare(shareTit, shareDesc, shareLink, shareImgUrl)
  next()
})

router.afterEach(route => {
})

export default router
