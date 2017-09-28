import Vue from 'vue'
import Vuex from 'vuex'
import resource from 'vue-resource'
import Router from 'vue-router'
import Login from '@/pages/Login'
import Index from '@/pages/Index'
import WorkBench from '@/pages/WorkBench'
import PubSummary from '@/pages/PubSummary'
import AffairManage from '@/pages/AffairManage'
import PlanManage from '@/pages/PlanManage'

import MsPublish from '@/pages/Propaganda/MsPublish'
import MaterialMark from '@/pages/Propaganda/MaterialMark'

Vue.use(Router);
Vue.use(resource);

export default new Router({
  routes: [

    {
      path:'/',
      name:'login',
      component:Login
    },
    {
      path:'/index',
      name:'index',
      component:Index,
      children:[
        {
          path: '/',
          name: 'workBench',
          component: WorkBench
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
        },
        {
          path:'/pubMsPls',
          name:'pubMsPls',
          component:MsPublish
        },
        {
          path:'/pubMaterial',
          name:'pubMaterial',
          component:MaterialMark
        }
      ]
    }
  ]
})
