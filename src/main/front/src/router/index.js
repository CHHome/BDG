import Vue from 'vue'
import Vuex from 'vuex'
import resource from 'vue-resource'
import Router from 'vue-router'
import Login from '@/pages/Login'//登录
import Index from '@/pages/Index'//主页
import WorkBench from '@/pages/WorkBench'//工作空间
import PubSummary from '@/pages/PubSummary'//宣传概述
import AffairManage from '@/pages/AffairManage'//事务管理公用


//宣传
import ProPlanManage from '@/pages/Propaganda/ProPlanManage'//宣传计划管理
import ProProgramManage from '@/pages/Propaganda/ProProgramManage'//宣传方案管理
import ProWorkSum from '@/pages/Propaganda/ProWorkSum'//宣传工作总结报告
//--宣传事务
import MsPublish from '@/pages/Propaganda/MsgPublish/MsPublish'//宣传信息发布
import MsgQuery from '@/pages/Propaganda/MsgPublish/MsgQuery';//宣传信息发布查询
import MsgPublishStatis from '@/pages/Propaganda/MsgPublish/MsgPublishStatis';//宣传信息发布统计
import MaterialMark from '@/pages/Propaganda/MaterialMark/MaterialMark'//宣传品制作
import MarkQuery from '@/pages/Propaganda/MaterialMark/MarkQuery'//宣传品(资料)制作查询
import MarkStatistics from '@/pages/Propaganda/MaterialMark/MarkStatistics'//宣传品(资料)制作查询
import MaterialReceive from '@/pages/Propaganda/MaterialReceive/MaterialReceive'//宣传物资领用
import ReceiveQuery from '@/pages/Propaganda/MaterialReceive/ReceiveQuery'//宣传物资领用
import ReceiveStatistics from '@/pages/Propaganda/MaterialReceive/ReceiveStatistics'//宣传物资领用

//招募
import RecPlanManage from '@/pages/Recruit/RecPlanManage'//招募计划管理
import RecProgramManage from '@/pages/Recruit/RecProgramManage'//招募方案管理
import RecWorkSum from '@/pages/Recruit/RecWorkSum'//招募工作总结报告

//服务
import SerPlanManage from '@/pages/Service/SerPlanManage'//服务计划管理
import SerProgramManage from '@/pages/Service/SerProgramManage'//服务方案管理
import SerWorkSum from '@/pages/Service/SerWorkSum'//服务工作总结报告

import PlanManage from '@/pages/PlanManage'
import Statistics from '@/pages/Statistics'

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
      path: '/pages',
      redirect: '/pages/workBench',
      name: 'pages',
      component: Index,
      children: [
        //工作台
        {
          path: 'workBench',
          name: 'workBench',
          components: {default: WorkBench}
        },
        //概述
        {
          path: 'pubSummary',
          name: 'pubSummary',
          components: {default: PubSummary}
        },

        //宣传
        //宣传事务管理
        {
          path: 'pubAffMa',
          name: 'pubAffManage',
          components: {recreate: AffairManage}
        },
        //宣传计划管理
        {
          path: 'proPlanManage',
          name: 'proPlanManage',
          components: {default: ProPlanManage}
        },
        //宣传工作总结报告
        {
          path:'proWorkSum',
          name:'proWorkSum',
          components:{default:ProWorkSum}
        },
        //宣传方案管理
        {
          path: 'proProgramManage',
          name: 'proProgramManage',
          components: {default: ProProgramManage}
        },

        //--宣传事务
        //宣传信息
        {
          path: 'pubMsPls',
          name: 'pubMsPls',
          components: {default: MsPublish}
        },
        {
          path:'msgQuery',
          name:'msgQuery',
          components:{default: MsgQuery}
        },
        {
          path: 'msgPublishStatis',
          name: 'msgPublishStatis',
          components: {default: MsgPublishStatis}
        },

        //宣传品制作
        {
          path: 'pubMaterial',
          name: 'pubMaterial',
          components: {default: MaterialMark}
        },
        {
          path:'markQuery',
          name:'markQuery',
          components:{default:MarkQuery}
        },
        {
          path: 'markStatistics',
          name: 'markStatistics',
          components: {recreate: MarkStatistics}
        },

        //宣传物资领用
        {
          path: 'materialReceive',
          name: 'materialReceive',
          components: {default: MaterialReceive}
        },
        {
          name:'receiveQuery',
          path:'receiveQuery',
          components:{recreate:ReceiveQuery}
        },
        {
          path: 'receiveStatistics',
          name: 'receiveStatistics',
          components: {recreate: ReceiveStatistics}
        },


        //招募
        //招募事务管理
        {
          path: 'recMa',
          name: 'recManage',
          components: {recreate: AffairManage}
        },
        //招募计划管理
        {
          path: 'recPlanManage',
          name: 'recPlanManage',
          components: {default: RecPlanManage}
        },
        //招募方案管理
        {
          path:'recProgramManage',
          name:'recProgramManage',
          components: {default: RecProgramManage}
        },
        //招募工作总结报告
        {
          path:'recWorkSum',
          name:'recWorkSum',
          components: {default: RecWorkSum}
        },



        //服务管理
        //服务事务管理
        {
          path: 'serMa',
          name: 'serManage',
          components: {default: AffairManage}
        },
       //服务计划管理
        {
          path: 'serPlanManage',
          name: 'serPlanManage',
          components: {default: SerPlanManage}
        },
        //服务工作总结报告
        {
          path:'serWorkSum',
          name:'serWorkSum',
          components:{default:SerWorkSum}
        },
        //服务方案管理
        {
          path:'serProgramManage',
          name:'serProgramManage',
          components:{default:SerProgramManage}
        },





        //系统管理
        {
          path:'sourceManage',
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


