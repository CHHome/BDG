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
  .line-slider>div{
    display: inline-block;
  }
  .line-slider>div:nth-of-type(1),
  .line-slider>div:nth-of-type(2),
  .line-slider>div:nth-of-type(3){
    width:25%;
  }
  .line-slider input{
    border: 2px solid #00c0ef;
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
  }
  .options{
    padding-top: 20px;
    padding-bottom: 20px;
  }
  .options .optionItem{
    padding: 12px 22px;
    font-size: 16px;
    border-radius: 4px;
    cursor: pointer;
    margin-left: 55px;
  }
  .options .optionItem:nth-of-type(1){
    background-color:#00a65a;
  }
  .options .optionItem:nth-of-type(2){
    background-color: #00c0ef ;
  }
  .options .optionItem:nth-of-type(3){
    background-color: #f39c12  ;
  }
  .options .optionItem:nth-of-type(4){
    background-color: #dd4b39  ;
  }

  @media  screen and (max-width:1300px){
    .line-slider>div:nth-of-type(1),
    .line-slider>div:nth-of-type(2),
    .line-slider>div:nth-of-type(3),
    .line-slider>div:nth-of-type(4){
      width:40%;
      text-align: left;
    }
    .line-slider>div:nth-of-type(3),
    .line-slider>div:nth-of-type(4){
      margin-top:20px;
    }
  }
</style>

<template>
  <div>
    <div class="content-wrapper">
      <section class="content-header">
        <h1>

          <small></small>
        </h1>
        <ol class="breadcrumb">
          <li><a href="#"><i class="fa fa-dashboard"></i>{{firstTitle}}</a></li>
          <li class="active">{{secondTitle}}</li>
        </ol>
      </section>

      <!-- Main content -->
      <section class="content">

        <div class="row">
          <div class="col-md-12">
            <div class="box" >
              <div class="box-header with-border">
                <h3 class="box-title">{{boxTitle}}</h3>
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

              <div class="line-slider">
                <div>
                  标题：
                  <input type="text" placeholder="请输入标题">
                </div>
                <div>
                  拟稿人：
                  <input type="text" placeholder="请输您的姓名">
                </div>
                <div>
                  拟稿时间：
                  <input type="text" placeholder="请输入拟稿时间">
                </div>
                <div>
                  计划类别:
                  <select >
                    <option disabled value="">请选择</option>
                    <option>全部</option>
                    <option>A</option>
                    <option>C</option>
                  </select>
                </div>
                <div>
                  <span class="searchOption">查询</span>
                  <span class="searchOption">重置</span>
                </div>
              </div>
              <div class="options">
                <span class="optionItem">全部计划</span>
                <span class="optionItem">新建</span>
                <span class="optionItem">归档</span>
                <span class="optionItem" @click="deleteList">删除</span>
              </div>
              <my-table
                :tableData="showData"
                @select="select"
                @checkedAll="checkedAll"
                @checkedNull="checkedNull"
                :key="viewId"
              ></my-table>
              <my-paging
              :currentPage=currentPage
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
import tableData from '@/data/test/Pubtest.json'
import MyTable from '@/components/MyTable'
import MyPaging from '@/components/Paging'


//初步想法：点击上页，下页，向后台请求数据，操作后再请求当前页面页数据，每次请求一页的数据
//将再设计一个分页组件，父子组件间传递总页数和当前页，然后再触发改变内容
  export default {
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
        tableData:null,
        currentPage:1,
        nowTableData:null,
        selectList:[],
        viewId:1,
        deleteUrl:"delete",//加上要删除数据的id
        searchUrl:"search",//加上查参数
      }
    },
    components:{
      MyTable,
      MyPaging
    },
    computed:{
      showData(){
        this.nowTableData = this.tableData.slice((this.currentPage-1)*5,this.currentPage*5);
        return this.nowTableData
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
        this.selectHtml(link);
      },
      selectHtml(link){
        switch (link){
          case 'pubPM':
            this.firstTitle = "宣传管理";
            this.secondTitle = "宣传计划管理";
            this.boxTitle = "宣传计划管理";
            //ajax初始化第一页数据,使用searchHref，附上相应参数
            this.tableData = tableData.pub;
            this.currentPage=1;
            console.log(this.tableData);
            break;
          case 'recPM':
            this.firstTitle = "招募管理";
            this.secondTitle = "招募计划管理";
            this.boxTitle = "招募计划管理";
            this.tableData = tableData.rec;
            this.currentPage=1;
            break;
          case 'serPM':
            this.firstTitle = "服务管理";
            this.secondTitle = "服务计划管理";
            this.boxTitle = "服务计划管理";
            break;
        }
      },
      checkedAll(){
        for(let key in this.nowTableData){
          this.selectList[key] = key;
        }
        console.log(this.selectList);
      },
      checkedNull(){
        this.selectList = [];
      },
      changePage(currentPage){
        this.currentPage = currentPage;
      },
      select(index){
        //将子组件所选择的id放入数组
        if(this.selectList.indexOf(index)!==-1){
          console.log(this.selectList.indexOf(index));
          this.selectList.splice(this.selectList.indexOf(index),1);
        }
        else{
          console.log(index);
          this.selectList.push(index);
        }
        console.log(this.selectList);
      },
      deleteList(){
       //使用deleteUrl加上id值删除数据，并再次请求当页数据
        if(this.selectList.length===0){
          alert("请选择要删除的选项。");
          return;
        }
        for(let key in this.selectList){
          this.tableData.splice((this.currentPage-1)*5+this.selectList[key]-key,1);
        }
        //ajax
        this.selectList = [];
        this.viewId++;
      }
    }
  }
</script>
