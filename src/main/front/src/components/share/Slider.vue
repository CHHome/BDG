<style scoped="">
  .main-sidebar{
    padding-top: 60px;
  }
</style>

<template>
  <aside class="main-sidebar">
    <!-- sidebar: style can be found in sidebar.less -->
    <section class="sidebar">
      <ul class="sidebar-menu" data-widget="tree">
        <li class="header">平台导航</li>
        <li class="active treeview menu-open">

          <router-link :to="{ name: 'Index'}"><i class="fa fa-dashboard"></i> <span>我的工作台</span></router-link>
        </li>

        <li class="treeview" v-for="tree in sliderList">
          <a href="#">
            <i class="fa fa-pie-chart"></i>
            <span>{{tree.title}}</span>
            <span class="pull-right-container">
              <i class="fa fa-angle-left pull-right"></i>
            </span>
          </a>
          <ul class="treeview-menu">
            <li v-for="item in tree.items"> <router-link :to="{ name: item.name,params:{data:manageData.pub}} "><i class="fa fa-circle-o"></i> {{item.itemTitle}}</router-link></li>
          </ul>
        </li>
        <li class="header">LABELS</li>
        <li><a href="#"><i class="fa fa-circle-o text-red"></i> <span>Important</span></a></li>
        <li><a href="#"><i class="fa fa-circle-o text-yellow"></i> <span>Warning</span></a></li>
        <li><a href="#"><i class="fa fa-circle-o text-aqua"></i> <span>Information</span></a></li>
      </ul>
    </section>
    <!-- /.sidebar -->
  </aside>
</template>
<script>
  import sliderData from '@/data/slider.json'
  import manageData from '@/data/manage.json'
  export default {
    name:"slider",
    data(){
      return {
        sliderList:sliderData.sliderList,
        manageData
      }
    }

  }
</script>
