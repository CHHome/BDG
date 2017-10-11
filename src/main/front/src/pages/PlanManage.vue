<style scoped>

  .box{
    padding-bottom: 20px;
  }

  .line-slider{
    background-color: rgba(171, 192, 211, 1);
    padding:5px;
  }
  .line-slider .row{
    margin-left: 0 !important;
    margin-right: 0 !important;
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
              <!--计划管理查询栏-->
              <plan-bar
                v-if="['pubPM', 'serPM', 'recPM'].indexOf(link)+1 "
                @query="query"
              ></plan-bar>
              <!--宣传信息发布查询栏-->
              <pub-msg-publish
                v-else-if="link === 'pubMsgPublish'"
                @query="query"
              ></pub-msg-publish>
              <!--宣传资料制作查询栏-->
              <material-mark-bar
                v-else-if="link === 'materialMarkBar'"
                @query="query"
              ></material-mark-bar>
              <!--宣传物资领用查询栏-->
              <material-receive-bar
                v-else-if="link === 'materialReceiveBar'"
                @query="query"
              ></material-receive-bar>
              <!--宣传方案管理-->
              <pub-programme
                v-else-if="link === 'pubProgramme'"
                @query="query"
              >
              </pub-programme>

              <div class="options">
                <span class="optionItem">全部计划</span>
                <span class="optionItem" @click="postTest">新建</span>
                <span class="optionItem" @click="getTest">归档</span>
                <span class="optionItem" @click="deleteList">删除</span>
              </div>
              <my-table
                :tableData="tableData"
                :currentKey="currentKey"
                @select="select"
                @checkedAll="checkedAll"
                @checkedNull="checkedNull"
              ></my-table>
              <!--自定义分页组件-->
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


  </div>
</template>

<script>
import MyTable from '@/components/MyTable'//公用的table组件
import MyPaging from '@/components/Paging'//公用的分页组件
import PlanBar from '@/components/SelectBar/PlanBar'//计划管理查询栏
import PubMsgPublish from '@/components/SelectBar/PubMsgPublish'//宣传信息发布查询栏
import MaterialMarkBar from '@/components/SelectBar/MaterialMarkBar'//宣传品制作查询栏
import MaterialReceiveBar from '@/components/SelectBar/MaterialReceiveBar'//宣传物资领用栏
import PubProgramme from '@/components/SelectBar/PubProgramme'//宣传方案管理栏
import * as _ from '@/data/Const'


//初步想法：点击上页，下页，向后台请求数据，操作后再请求当前页面页数据，每次请求一页的数据
//将再设计一个分页组件，父子组件间传递总页数和当前页，然后再触发改变内容

  export default {
    beforeRouteEnter (to, from, next) {

      next(vm =>{
        vm.reCreate();//不能调用钩子create（）

      });
    },
    activated(){
      this.reCreate();
    },
    //需要定义一个切换换请求url的开关，切换search和delete
    data(){
      return {
        firstTitle:null,
        secondTitle:null,
        boxTitle:null,
        tableData:null,
        currentKey:null,
        currentPage:1,
        totalPages:0,
        type:null,
        link:null,
        selectList:[],//存放的是选中的索引值非id，需要依赖此获得id，传到服务器
        viewId:1,
        requestUrl: _.baseUrl + '/planData',
        deleteUrl:_.baseUrl + '/pubPMDelete'
//        deleteUrl:"delete",//加上要删除数据的id
//        searchUrl:"search",//加上查参数
      }
    },
    components:{
      MyTable,
      MyPaging,
      PlanBar,
      PubMsgPublish,
      MaterialMarkBar,
      MaterialReceiveBar,
      PubProgramme
    },
    watch:{
      currentPage(){
        this.viewId++;
        this.selectList = [];
        this.getData();
      }
    },
    methods:{
      reCreate(){
        this.link = location.href.match(/\/([^/]+)$/)[1];
        this.selectHtml();
      },
      getData(){
        this.$http.get(this.requestUrl,{params:{type:this.type,page:this.currentPage}})
          .then(res => {
            this.totalPages = res.data.totalPages;//使用异步时totalPages能被子组件watch到，同步代码不行，参照PlanManage.vue
            this.tableData = res.data.itemList;
          });
      },
      selectHtml(){
        switch (this.link){
          case 'pubPM':
            this.contentAdapt("宣传管理","宣传计划管理","宣传计划管理",'pub','planTable');
            break;
          case 'recPM':
            this.contentAdapt("招募管理","招募计划管理","招募计划管理",'rec','planTable');
            break;
          case 'serPM':
            this.contentAdapt("服务管理","服务计划管理","服务计划管理",'ser','planTable');
            break;
          case 'pubMsgPublish':
            this.contentAdapt("宣传管理","宣传信息发布查询","宣传信息发布查询",'pub','planTable');
            break;
          case 'materialMarkBar':
            this.contentAdapt("宣传管理","宣传品（资料）制作查询","宣传品（资料）制作查询",'pub','planTable');
            break;
          case 'materialReceiveBar':
            this.contentAdapt("宣传管理","宣传物资领用查询","宣传物资领用查询",'pub','planTable');
            break;
          case 'pubProgramme':
            this.contentAdapt("宣传管理","宣传方案管理","宣传方案管理",'pub','planTable');
            break;
        }
      },
      contentAdapt(firstTitle,secondTitle,boxTitle,type,tableKey){
        this.firstTitle = firstTitle;
        this.secondTitle = secondTitle;
        this.boxTitle = boxTitle;
        this.type = type;
        this.currentPage = 1;
        this.currentKey = _[tableKey];
        this.getData();
      },
      query(barData){
        console.log(barData);
        //发送请求
      },
      checkedAll(){
        for(let key in this.tableData){
          this.selectList[key] = key;
        }
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
          this.selectList.push(index);
        }
      },
      deleteList(){
       //使用deleteUrl加上id值删除数据，并再次请求当页数据
        if(this.selectList.length===0){
          alert("请选择要删除的选项。");
          return;
        }
//        for(let key in this.selectList){
//          this.tableData.splice((this.currentPage-1)*5+this.selectList[key]-key,1);
//        }
        //ajax  此处需要修改---------------------------------------------------------------------------通过索引值获取选中项的id，传入后台，再刷新一下当前page
        this.$http.get(this.deleteUrl,{params:{deleteList:this.selectList}})
          .then(res => {
            console.log('删除成功');
          });
        this.selectList = [];
        this.viewId++;
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
