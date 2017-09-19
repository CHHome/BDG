import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index'
import PubSummary from '@/pages/PubSummary'
import AffairManage from '@/pages/AffairManage'
import PlanManage from '@/pages/PlanManage'

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
      path:'/pubAffMa',
      name:'pubAffManage',
      component:AffairManage
    },
    {
      path:'/recMa',
      name:'recManage',
      component:AffairManage
    },
    {
      path:'/serMa',
      name:'serManage',
      component:AffairManage
    },
    {
      path:'/pubPM',
      name:'pubPM',
      component:PlanManage
    },
    {
      path:'/recPM',
      name:'recPM',
      component:PlanManage
    },
    {
      path:'/serPM',
      name:'serPM',
      component:PlanManage
    }
  ]
})
