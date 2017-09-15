import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index'
import PubSummary from '@/pages/PubSummary'
import AffairManage from '@/pages/AffairManage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path:'/pubSummary',
      name:'pubSummary',
      component:PubSummary,
    },
    {
      path:'/pffairManage',
      name:'affairManage',
      component:AffairManage
    }
  ]
})
