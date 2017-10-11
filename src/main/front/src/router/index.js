import Vue from 'vue'
import Vuex from 'vuex'
import resource from 'vue-resource'
import Router from 'vue-router'
import Login from '@/pages/Login'//登录
import Index from '@/pages/Index'//主页
import WorkBench from '@/pages/WorkBench'//工作空间
import PubSummary from '@/pages/PubSummary'//宣传概述
import AffairManage from '@/pages/AffairManage'//事务管理


//宣传事务
import MsPublish from '@/pages/Propaganda/MsPublish'//宣传信息发布
import MaterialMark from '@/pages/Propaganda/MaterialMark'//宣传品制作
import MaterialReceive from '@/pages/Propaganda/MaterialReceive'//宣传资料领用
import PlanManage from '@/pages/PlanManage'//
import Statistics from '@/pages/Statistics'//工作计划

//资源管理
import SourceManage from '@/pages/system/SourceManage'

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
      path: '/index',
      name: 'index',
      component: Index,
      children: [
        //工作台
        {
          path: '/',
          name: 'workBench',
          components: {default: WorkBench}
        },
        //概述
        {
          path: '/pubSummary',
          name: 'pubSummary',
          components: {default: PubSummary}
        },

        //事务管理
        {
          path: '/pubAffMa',
          name: 'pubAffManage',
          components: {recreate: AffairManage}
        },
        {
          path: '/recMa',
          name: 'recManage',
          components: {recreate: AffairManage}
        },
        {
          path: '/serMa',
          name: 'serManage',
          components: {recreate: AffairManage}
        },

        //计划管理共用
        {
          path: '/pubPM',
          name: 'pubPM',
          components: {recreate: PlanManage}
        },
        {
          path: '/recPM',
          name: 'recPM',
          components: {recreate: PlanManage}
        },
        {
          path: '/serPM',
          name: 'serPM',
          components: {recreate: PlanManage}
        },
        // 工作总结报告共用
        {
          path:'/pubJobSummary',
          name:'pubJobSummary',
          components:{recreate:PlanManage}
        },
        {
          path:'/recJobSummary',
          name:'recJobSummary',
          components:{recreate:PlanManage}
        },
        {
          path:'/serJobSummary',
          name:'serJobSummary',
          components:{recreate:PlanManage}
        },

        //宣传管理
        //宣传信息发布
        {
          path: '/pubMsPls',
          name: 'pubMsPls',
          components: {default: MsPublish}
        },
        {
          path:'/pubMsgPublish',
          name:'pubMsgPublish',
          components:{recreate: PlanManage}
        },
        {
          path: '/pubMsgStatic',
          name: 'pubMsgStatic',
          components: {recreate: Statistics}
        },

        //宣传品制作
        {
          path: '/pubMaterial',
          name: 'pubMaterial',
          components: {default: MaterialMark}
        },
        {
          path:'/materialMarkBar',
          name:'materialMarkBar',
          components:{recreate:PlanManage}
        },
        {
          path: '/pubMaterialStatic',
          name: 'pubMaterialStatic',
          components: {recreate: Statistics}
        },

        //宣传物资领用
        {
          path: '/materialReceive',
          name: 'materialReceive',
          components: {default: MaterialReceive}
        },
        {
          name:'materialReceiveBar',
          path:'/materialReceiveBar',
          components:{recreate:PlanManage}
        },
        {
          path: '/pubReceiveStatic',
          name: 'pubReceiveStatic',
          components: {recreate: Statistics}
        },

        //宣传方案管理
        {
          path:'/pubProgramme',
          name:'pubProgramme',
          components:{recreate:PlanManage}
        },
        {
          path:'/sourceManage',
          name:'sourceManage',
          components:{default:SourceManage}
        }

      ]
    }
  ]
})

//
// {
//   path:'/',
//     name:'login',
//   component:Login
// },
// {
//   path:'/index',
//     name:'index',
//   component:Index,
//   children:[
//   {
//     path: '/',
//     name: 'workBench',
//     component: WorkBench
//   },
//   {
//     path:'/pubSummary',
//     name:'pubSummary',
//     component:PubSummary
//   },
//   {
//     path:'/pubAffMa',
//     name:'pubAffManage',
//     component:AffairManage
//   },
//   {
//     path:'/recMa',
//     name:'recManage',
//     component:AffairManage
//   },
//   {
//     path:'/serMa',
//     name:'serManage',
//     component:AffairManage
//   },
//   {
//     path:'/pubPM',
//     name:'pubPM',
//     component:PlanManage
//   },
//   {
//     path:'/recPM',
//     name:'recPM',
//     component:PlanManage
//   },
//   {
//     path:'/serPM',
//     name:'serPM',
//     component:PlanManage
//   },
//   {
//     path:'/pubMsPls',
//     name:'pubMsPls',
//     component:MsPublish
//   },
//   {
//     path:'/pubMaterial',
//     name:'pubMaterial',
//     component:MaterialMark
//   },
//   {
//     path:'/materialReceive',
//     name:'materialReceive',
//     component:MaterialReceive
//   },
//
//   {
//     path:'/pubMsgStatic',
//     name:'pubMsgStatic',
//     component:Statistics
//   },
//   {
//     path:'/pubMaterialStatic',
//     name:'pubMaterialStatic',
//     component:Statistics
//   },
//   {
//     path:'/pubReceiveStatic',
//     name:'pubReceiveStatic',
//     component:Statistics
//   }
// ]
// }
// ]


