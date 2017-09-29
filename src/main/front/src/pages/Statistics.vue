/*公用信息统计表*/

<style scoped>

  .box{
    padding-bottom: 20px;
  }
  .line-slider{
    width:90%;
    margin:20px auto;
    background-color:  #d2d6de;
    padding: 12px;
    text-align: center;
  }

  .line-slider input{
    border: 2px solid #00c0ef;
    height: 32px;
    width: 60%;
  }
  .line-slider select{
    border: 2px solid #00c0ef;
  }
  .line-slider .searchOption{
    padding: 6px 10px;
    font-size: 14px;
    border-radius: 4px;
    cursor: pointer;
    background-color: #00c0ef;
    margin-left: 10px;
    margin-bottom: 1px;
  }
  /*.options{*/
    /*padding-top: 20px;*/
    /*padding-bottom: 20px;*/
  /*}*/
  /*.options .optionItem{*/
    /*padding: 12px 22px;*/
    /*font-size: 16px;*/
    /*border-radius: 4px;*/
    /*cursor: pointer;*/
    /*margin-left: 55px;*/
  /*}*/
  /*.options .optionItem:nth-of-type(1){*/
  /*background-color:#00a65a;*/
  /*}*/
  /*.options .optionItem:nth-of-type(2){*/
  /*background-color: #00c0ef ;*/
  /*}*/
  /*.options .optionItem:nth-of-type(3){*/
  /*background-color: #f39c12  ;*/
  /*}*/
  /*.options .optionItem:nth-of-type(4){*/
  /*background-color: #dd4b39  ;*/
  /*}*/

  /*@media  screen and (max-width:1300px){*/
    /*.line-slider>div:nth-of-type(1),*/
    /*.line-slider>div:nth-of-type(2),*/
    /*.line-slider>div:nth-of-type(3),*/
    /*.line-slider>div:nth-of-type(4){*/
      /*width:40%;*/
      /*text-align: left;*/
    /*}*/
    /*.line-slider>div:nth-of-type(3),*/
    /*.line-slider>div:nth-of-type(4){*/
      /*margin-top:20px;*/
    /*}*/
  /*}*/
</style>
<template>
  <div>
    <div class="content-wrapper">
      <section class="content-header">
        <h1>

          <small></small>
        </h1>
        <ol class="breadcrumb">
          <li><a href="#"><i class="fa fa-dashboard"></i>title1</a></li>
          <li class="active">title2</li>
        </ol>
      </section>

      <!-- Main content -->
      <section class="content">

        <div class="row">
          <div class="col-md-12">
            <div class="box" >
              <div class="box-header with-border">
                <h3 class="box-title">title2</h3>
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
              <!--计划管理共用模块-->

              <div class="line-slider row" >
                <div class="col-md-4">
                  起始日期:<input type="date" name="begin">
                </div>
                <div class="col-md-4">
                  结束日期:<input type="date" name="end">
                </div>
                <div class="searchOption col-md-1">查询</div>
                <div class="searchOption col-md-1">重置</div>
                <div class="searchOption col-md-1">导出</div>
              </div>
              <sts-table
                :currentKey="currentKey"
                :tableData="tableData"
              >
              </sts-table>
              <my-paging
                :totalPages = "totalPages"
                :nowPage = "currentPage"
                @change="changePage"
              ></my-paging>
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
  import StsTable from '@/components/share/StsTable'
  import MyPaging from '@/components/Paging'
  export default {
    components:{
      StsTable,
      MyPaging
    },
    beforeRouteEnter (to, from, next) {
      console.log("5555");
      next(vm =>{
        vm.reCreate();//不能调用钩子create（）
      });
    },
    created(){
      this.reCreate();
    },
    //需要定义一个切换换请求url的开关，切换search和delete
    data(){
      return {
        firstTitle:null,
        secondTitle:null,
        boxTitle:null,
        currentPage:1,
        totalPages:0,
        tableData:null,
        viewId:1,
        currentKey:[]
//        deleteUrl:"delete",//加上要删除数据的id
//        searchUrl:"search",//加上查参数
      }
    },
    watch:{
      currentPage(){
        this.viewId++;
        this.selectList = [];
        //当current变化时候使用searchUrl获取数据，附上相应参数
      }
    },
    methods:{
      reCreate(){
        let link = location.href.match(/\/([^/]+)$/)[1];
        console.log("666");
        this.selectHtml(link);
      },
      selectHtml(link){
        switch (link){
          case 'statistics':
            this.firstTitle = "宣传管理";
            this.secondTitle = "宣布信息发布统计";
            this.boxTitle = "宣布信息发布统计";
            this.currentKey=[{title:"No.",key:'id'},{title:"姓名",key:'name'},{title:'电视媒体类',key:'dianshi'},
              {title:'网络媒体类',key:'wangluo'},{title:'电梯海报类',key:'dianti'},{title:'新闻稿件类',key:'xinwen'},
              {title:'微博微信类',key:'weibo'}, {title:'其他',key:'qita'},{title:'合计',key:'count'}];
            //测试服务器
            this.$http.get('http://127.0.1:8082/MsgStatic',{params:{page:1}})
              .then(res => {
                this.totalPages = res.data.totalPages;
                console.log(this.totalPages+'64564');
                this.tableData = res.data.itemList;
                console.log('66699'+this.tableData);
              });
            this.currentPage=1;
            break;
        }
      },
      changePage(currentPage){
        this.currentPage = currentPage;
      },

      /*测试....*/
      getTest(){
        this.$http.get('http://127.0.1:8082/getPage',{params:{page:1}}).then(res =>{
          console.log(res.data);
        },res => {
          console.log('error')
        })
      },
      //传送的是json数据，需要在后台配置一下接受json
      postTest(){
        this.$http.post('http://127.0.1:8082/postPage',{foo: '000000000000000000000000000000000000000000'}).then(res =>{
          console.log(res.data);
        },res => {
        })
//        $.post("http://127.0.1:8082/postPage",
//          {
//            name:"genhong",
//            age:21
//          },
//          function(data,status){
//            alert("数据: \n" + data + "\n状态: " + status);
//          });
      }
    }
  }
</script>
