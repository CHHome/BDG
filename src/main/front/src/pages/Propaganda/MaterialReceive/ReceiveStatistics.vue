
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
</style>
<template>
  <div>
    <div class="content-wrapper">
      <section class="content-header">
        <h1>

          <small></small>
        </h1>
        <ol class="breadcrumb">
          <li><a href="#"><i class="fa fa-dashboard"></i>宣传管理</a></li>
          <li class="active">宣传物资领用统计</li>
        </ol>
      </section>

      <!-- Main content -->
      <section class="content">

        <div class="row">
          <div class="col-md-12">
            <div class="box" >
              <div class="box-header with-border">
                <h3 class="box-title">宣传物资领用统计</h3>
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

  </div>
</template>
<script>
  import StsTable from '@/components/share/StsTable'
  import MyPaging from '@/components/Paging'
  import { baseUrl } from '@/data/Const'
  export default {
    components:{
      StsTable,
      MyPaging
    },
    //需要定义一个切换换请求url的开关，切换search和delete
    data(){
      return {
        currentPage:1,
        totalPages:0,
        tableData:null,
        viewId:1,
        currentKey:[{title:"No.",key:'id'},{title:"负责人",key:'name'},{title:'宣传（献血、知识）手册',key:'shouce'},
          {title:'电梯、海报广告',key:'dianti'},{title:'电视媒体视频（材料）',key:'dianshi'},{title:'宣传、活动（指引）单张',key:'zhiyin'},
          {title:'其他',key:'qita'},{title:'合计',key:'count'}],
        requestUrl: baseUrl+ '/MsgStatic',
//        deleteUrl:"delete",//加上要删除数据的id
//        searchUrl:"search",//加上查参数
      }
    },
    mounted(){
      this.getData();
    },
    watch:{
      currentPage(){
        this.viewId++;
        this.getData();
        //当current变化时候使用searchUrl获取数据，附上相应参数
      }
    },
    methods:{
      getData(){
        this.$http.get(this.requestUrl,{params:{type:'pubMaterialStatic',page:this.currentPage}})
          .then(res => {
            this.totalPages = res.data.totalPages;//使用异步时totalPages能被子组件watch到，同步代码不行，参照PlanManage.vue
            this.tableData = res.data.itemList;
          });
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
