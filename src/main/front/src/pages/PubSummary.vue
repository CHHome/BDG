<template>
  <div>
    <!-- Left side column. contains the logo and sidebar -->

    <!-- Content Wrapper. Contains page content -->
    <!--<div class="content-wrapper">-->
     <!--<bar-->
     <!--:data="data"-->
     <!--:options="options"-->
     <!--:width="400"-->
     <!--:height="200"-->
     <!--&gt;</bar>-->
      <!--<button @click="test">change</button>-->
    <!--</div>-->
    <div class="content-wrapper">
      <!-- Content Header (Page header) -->
      <section class="content-header">
        <h1>

          <small></small>
        </h1>
        <ol class="breadcrumb">
          <li><a href="#"><i class="fa fa-dashboard"></i> 宣传管理</a></li>
          <li class="active">宣传事务概述</li>
        </ol>
      </section>

      <!-- Main content -->
      <section class="content">

        <div class="row">
        <div class="col-md-3">
          <div class="box">
            <div class="box-header with-border">
              <h3 class="box-title">本年度宣传管理小数据</h3>
              <div class="box-tools pull-right">
                <button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i>
                </button>
                <div class="btn-group">
                  <button type="button" class="btn btn-box-tool dropdown-toggle" data-toggle="dropdown">
                    <i class="fa fa-wrench"></i></button>
                  <ul class="dropdown-menu" role="menu">
                    <li><a href="#">Action</a></li>
                    <li><a href="#">Another action</a></li>
                    <li><a href="#">Something else here</a></li>
                    <li class="divider"></li>
                    <li><a href="#">Separated link</a></li>
                  </ul>
                </div>
                <button type="button" class="btn btn-box-tool" data-widget="remove"><i class="fa fa-times"></i></button>
              </div>
            </div>
            <!-- /.box-header -->
            <div class="box-body">
                <div class="list">
                  <ul>
                    <li><i class="fa fa-caret-right" aria-hidden="true"></i>宣传计划 <span></span>项，完成 <span></span>项</li>
                    <li><i class="fa fa-caret-right" aria-hidden="true"></i>宣传方案 <span></span>项，完成 <span></span>项</li>
                    <li>
                      <i class="fa fa-caret-right" aria-hidden="true"></i>信息发布：
                      <ul>
                        <li>电视媒体类 <span></span>项</li>
                        <li>网络媒体类 <span></span>项</li>
                        <li>电梯海报类 <span></span>项</li>
                        <li>新闻稿件类  <span></span>项</li>
                        <li>微博微信类  <span></span>项</li>
                        <li>其他<span></span>项</li>
                      </ul>
                    </li>
                    <li>
                      <i class="fa fa-caret-right" aria-hidden="true"></i>宣传品(资料)制作 <span></span>项，完成 <span></span>项
                      <ul>
                        <li>内部制作  <span></span>项</li>
                        <li>广告公司制作 <span></span>项</li>
                        <li>总费用 <span></span> 元</li>
                      </ul>
                    </li>
                    <li><i class="fa fa-caret-right" aria-hidden="true"></i>宣传物资领用 <span></span>项</li>
                  </ul>
              </div>
            </div>

          </div>
        </div>
        <div class="col-md-9">
          <div class="box">
            <div class="box-header with-border">
              <h3 class="box-title">数据展示</h3>
              <div class="box-tools pull-right">
                <button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i>
                </button>
                <div class="btn-group">
                  <button type="button" class="btn btn-box-tool dropdown-toggle" data-toggle="dropdown">
                    <i class="fa fa-wrench"></i></button>
                  <ul class="dropdown-menu" role="menu">
                    <li><a href="#">Action</a></li>
                    <li><a href="#">Another action</a></li>
                    <li><a href="#">Something else here</a></li>
                    <li class="divider"></li>
                    <li><a href="#">Separated link</a></li>
                  </ul>
                </div>
                <button type="button" class="btn btn-box-tool" data-widget="remove"><i class="fa fa-times"></i></button>
              </div>
            </div>
            <!-- /.box-header -->
            <div class="box-body">
              <div class="row" v-for="item in boxData">
                <div v-for="box in item" v-if="item.length===2" class="col-md-6">
                  <my-box :mydata="box"></my-box>
                </div>
                <div  v-else class="col-md-12" >
                  <my-box :mydata="box"></my-box>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>

      </section>
      <!-- /.content -->
    </div>
    <!-- /.content-wrapper -->
    <!-- Control Sidebar -->
    <aside class="control-sidebar control-sidebar-dark">
      <!-- Create the tabs -->
      <ul class="nav nav-tabs nav-justified control-sidebar-tabs">
        <li><a href="#control-sidebar-home-tab" data-toggle="tab"><i class="fa fa-home"></i></a></li>
        <li><a href="#control-sidebar-settings-tab" data-toggle="tab"><i class="fa fa-gears"></i></a></li>
      </ul>
      <!-- Tab panes -->
      <div class="tab-content">
        <!-- Home tab content -->
        <div class="tab-pane" id="control-sidebar-home-tab">
          <h3 class="control-sidebar-heading">Recent Activity</h3>
          <ul class="control-sidebar-menu">
            <li>
              <a href="javascript:void(0)">
                <i class="menu-icon fa fa-birthday-cake bg-red"></i>

                <div class="menu-info">
                  <h4 class="control-sidebar-subheading">Langdon's Birthday</h4>

                  <p>Will be 23 on April 24th</p>
                </div>
              </a>
            </li>
            <li>
              <a href="javascript:void(0)">
                <i class="menu-icon fa fa-user bg-yellow"></i>

                <div class="menu-info">
                  <h4 class="control-sidebar-subheading">Frodo Updated His Profile</h4>

                  <p>New phone +1(800)555-1234</p>
                </div>
              </a>
            </li>
            <li>
              <a href="javascript:void(0)">
                <i class="menu-icon fa fa-envelope-o bg-light-blue"></i>

                <div class="menu-info">
                  <h4 class="control-sidebar-subheading">Nora Joined Mailing List</h4>

                  <p>nora@example.com</p>
                </div>
              </a>
            </li>
            <li>
              <a href="javascript:void(0)">
                <i class="menu-icon fa fa-file-code-o bg-green"></i>

                <div class="menu-info">
                  <h4 class="control-sidebar-subheading">Cron Job 254 Executed</h4>

                  <p>Execution time 5 seconds</p>
                </div>
              </a>
            </li>
          </ul>
          <!-- /.control-sidebar-menu -->

          <h3 class="control-sidebar-heading">Tasks Progress</h3>
          <ul class="control-sidebar-menu">
            <li>
              <a href="javascript:void(0)">
                <h4 class="control-sidebar-subheading">
                  Custom Template Design
                  <span class="label label-danger pull-right">70%</span>
                </h4>

                <div class="progress progress-xxs">
                  <div class="progress-bar progress-bar-danger" style="width: 70%"></div>
                </div>
              </a>
            </li>
            <li>
              <a href="javascript:void(0)">
                <h4 class="control-sidebar-subheading">
                  Update Resume
                  <span class="label label-success pull-right">95%</span>
                </h4>

                <div class="progress progress-xxs">
                  <div class="progress-bar progress-bar-success" style="width: 95%"></div>
                </div>
              </a>
            </li>
            <li>
              <a href="javascript:void(0)">
                <h4 class="control-sidebar-subheading">
                  Laravel Integration
                  <span class="label label-warning pull-right">50%</span>
                </h4>

                <div class="progress progress-xxs">
                  <div class="progress-bar progress-bar-warning" style="width: 50%"></div>
                </div>
              </a>
            </li>
            <li>
              <a href="javascript:void(0)">
                <h4 class="control-sidebar-subheading">
                  Back End Framework
                  <span class="label label-primary pull-right">68%</span>
                </h4>

                <div class="progress progress-xxs">
                  <div class="progress-bar progress-bar-primary" style="width: 68%"></div>
                </div>
              </a>
            </li>
          </ul>
          <!-- /.control-sidebar-menu -->

        </div>
        <!-- /.tab-pane -->

        <!-- Settings tab content -->
        <div class="tab-pane" id="control-sidebar-settings-tab">
          <form method="post">
            <h3 class="control-sidebar-heading">General Settings</h3>

            <div class="form-group">
              <label class="control-sidebar-subheading">
                Report panel usage
                <input type="checkbox" class="pull-right" checked>
              </label>

              <p>
                Some information about this general settings option
              </p>
            </div>
            <!-- /.form-group -->

            <div class="form-group">
              <label class="control-sidebar-subheading">
                Allow mail redirect
                <input type="checkbox" class="pull-right" checked>
              </label>

              <p>
                Other sets of options are available
              </p>
            </div>
            <!-- /.form-group -->

            <div class="form-group">
              <label class="control-sidebar-subheading">
                Expose author name in posts
                <input type="checkbox" class="pull-right" checked>
              </label>

              <p>
                Allow the user to show his name in blog posts
              </p>
            </div>
            <!-- /.form-group -->

            <h3 class="control-sidebar-heading">Chat Settings</h3>

            <div class="form-group">
              <label class="control-sidebar-subheading">
                Show me as online
                <input type="checkbox" class="pull-right" checked>
              </label>
            </div>
            <!-- /.form-group -->

            <div class="form-group">
              <label class="control-sidebar-subheading">
                Turn off notifications
                <input type="checkbox" class="pull-right">
              </label>
            </div>
            <!-- /.form-group -->

            <div class="form-group">
              <label class="control-sidebar-subheading">
                Delete chat history
                <a href="javascript:void(0)" class="text-red pull-right"><i class="fa fa-trash-o"></i></a>
              </label>
            </div>
            <!-- /.form-group -->
          </form>
        </div>
        <!-- /.tab-pane -->
      </div>
    </aside>
    <!-- /.control-sidebar -->
    <!-- Add the sidebar's background. This div must be placed
         immediately after the control sidebar -->
    <div class="control-sidebar-bg"></div>
  </div>
</template>

<script>

  import myBox from '@/components/share/MyBox'
  import '@/css/sumSlider.css'
  export default {
    components:{
      myBox
    },
    data(){
      return {

        boxData:[
          [
            {
              title:"本月宣传计划统计",
              data:{
                labels:['first','second','third','fourth','fifth'],
                datasets:[
                  {
                    label:'data one',
                    backgroundColor:"red",
                    data:[50,60,35,45,55]
                  }
                ]
              },
              options: {
                responsive: true,
                maintainAspectRatio: false,
                legend: {
                  display: true,
                  labels: {
                    fontColor: 'rgb(0 , 0, 0)',
                    boxWidth:10
                  },
                  title: {
                    display: true,
                    text: 'Custom Chart Title'
                  }
                },
                animation:{
                  duration:3000
                }
              }
            },
            {
              title:"  本月宣传方案统计",
              data:{
                labels:['first','second','third','fourth','fifth'],
                datasets:[
                  {
                    label:'data one',
                    backgroundColor:"red",
                    data:[50,60,35,45,55]
                  }
                ]
              },
              options: {
                responsive: true,
                maintainAspectRatio: false,
                legend: {
                  display: true,
                  labels: {
                    fontColor: 'rgb(0 , 0, 0)',
                    boxWidth:10
                  },
                  title: {
                    display: true,
                    text: 'Custom Chart Title'
                  }
                },
                animation:{
                  duration:3000
                }
              },
            }
          ],
          [
            {
              title:"近5月宣传品(资料)制作申请统计",
              data:{
                labels:['first','second','third','fourth','fifth'],
                datasets:[
                  {
                    label:'data one',
                    backgroundColor:"red",
                    data:[50,60,35,45,55]
                  }
                ]
              },
              options: {
                responsive: true,
                maintainAspectRatio: false,
                legend: {
                  display: true,
                  labels: {
                    fontColor: 'rgb(0 , 0, 0)',
                    boxWidth:10
                  },
                  title: {
                    display: true,
                    text: 'Custom Chart Title'
                  }
                },
                animation:{
                  duration:3000
                }
              },
            },
            {
              title:"    近5月宣传物资领用统计",
              data:{
                labels:['first','second','third','fourth','fifth'],
                datasets:[
                  {
                    label:'data one',
                    backgroundColor:"red",
                    data:[50,60,35,45,55]
                  }
                ]
              },
              options: {
                responsive: true,
                maintainAspectRatio: false,
                legend: {
                  display: true,
                  labels: {
                    fontColor: 'rgb(0 , 0, 0)',
                    boxWidth:10
                  },
                  title: {
                    display: true,
                    text: 'Custom Chart Title'
                  }
                },
                animation:{
                  duration:3000
                }
              },
            }
          ],
          [
            {
              title:" 本月宣传信息发布统计",
              data:{
                labels:['first','second','third','fourth','fifth'],
                datasets:[
                  {
                    label:'data one',
                    backgroundColor:"red",
                    data:[50,60,35,45,55]
                  }
                ]
              },
              options: {
                responsive: true,
                maintainAspectRatio: false,
                legend: {
                  display: true,
                  labels: {
                    fontColor: 'rgb(0 , 0, 0)',
                    boxWidth:10
                  },
                  title: {
                    display: true,
                    text: 'Custom Chart Title'
                  }
                },
                animation:{
                  duration:3000
                }
              },
            }
          ]
        ]
      }
    },
    methods:{
      test(){
        console.log('click'+this.data.datasets[0].data[0]);
        this.data.datasets[0].data[0]=88;
      }
    }
  }
</script>
