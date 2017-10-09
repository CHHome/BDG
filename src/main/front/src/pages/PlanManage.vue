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
import tableData from '@/data/test/Pubtest.json'
import MyTable from '@/components/MyTable'
import MyPaging from '@/components/Paging'
import { baseUrl } from '@/data/Const'


//初步想法：点击上页，下页，向后台请求数据，操作后再请求当前页面页数据，每次请求一页的数据
//将再设计一个分页组件，父子组件间传递总页数和当前页，然后再触发改变内容
  export default {
    beforeRouteEnter (to, from, next) {
      console.log('beforeRouteEnter 计划管理');
      next(vm =>{
        vm.reCreate();//不能调用钩子create（）
      });
    },
    activated(){
      this.reCreate();
      console.log("8888")
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
        totalPages:0,
        currentKey:[
          {title:'No.',key:"id"},{title:'标题',key:'title'},{title:'小组名称',key:'groupName'},
          {title:'计划所属年份',key:'beloneTime'},{title:'计划事物类别',key:'type'},{title:'负责人',key:'master'},
          {title:'拟稿时间',key:'createTime'},{title:'完成情况',key:'situation'},{title:'状态',key:'status'}
        ],
        type:null,
        selectList:[],//存放的是选中的索引值非id，需要依赖此获得id，传到服务器
        viewId:1,
        requestUrl: baseUrl + '/planData',
        deleteUrl:baseUrl + '/pubPMDelete'
//        deleteUrl:"delete",//加上要删除数据的id
//        searchUrl:"search",//加上查参数
      }
    },
    components:{
      MyTable,
      MyPaging
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
        let link = location.href.match(/\/([^/]+)$/)[1];
        this.selectHtml(link);
      },
      getData(){
        this.$http.get(this.requestUrl,{params:{type:this.type,page:this.currentPage}})
          .then(res => {
            this.totalPages = res.data.totalPages;//使用异步时totalPages能被子组件watch到，同步代码不行，参照PlanManage.vue
            this.tableData = res.data.itemList;
          });
      },
      selectHtml(link){
        switch (link){
          case 'pubPM':
            this.firstTitle = "宣传管理";
            this.secondTitle = "宣传计划管理";
            this.boxTitle = "宣传计划管理";
            this.type = 'pub';
            this.currentPage = 1;
            //ajax初始化第一页数据,使用searchHref，附上相应参数
            this.getData();
            break;
          case 'recPM':
            this.firstTitle = "招募管理";
            this.secondTitle = "招募计划管理";
            this.boxTitle = "招募计划管理";
            this.type = 'rec';
            this.currentPage = 1;
            this.getData();
            break;
          case 'serPM':
            this.firstTitle = "服务管理";
            this.secondTitle = "服务计划管理";
            this.boxTitle = "服务计划管理";
            this.type = 'ser';
            this.currentPage = 1;
            this.getData();
            break;
        }
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
