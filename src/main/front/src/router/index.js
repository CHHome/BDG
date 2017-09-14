import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index'
import Summary from '@/pages/Summary'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path:'/summary',
      name:'summary',
      component:Summary
    }
  ]
})
