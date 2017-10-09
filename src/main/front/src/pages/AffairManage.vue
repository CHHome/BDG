

<template>
  <div>
    <div class="content-wrapper">
      <section class="content-header">
        <h1>

          <small></small>
        </h1>
        <ol class="breadcrumb">
          <li><a href="#"><i class="fa fa-dashboard"></i>{{htmlData[0].title}}</a></li>
          <li class="active">{{htmlData[0].subTitle}}</li>
        </ol>
      </section>

      <!-- Main content -->
      <section class="content">

        <div class="row">
          <div class="col-md-12">
            <div class="box" v-for="boxBody in htmlData">
              <div class="box-header with-border">
                <h3 class="box-title">{{boxBody.boxTitle}}</h3>
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
              <!--事务管理共用模块-->
              <div class="box-body">
               <div v-for="listItem in boxBody.list" class="row">
                 <div v-for="item in listItem" class="col-md-4">
                   <manage-box :boxData="item"></manage-box>
                 </div>
               </div>
              </div>
            </div>
          </div>
        </div>

      </section>
      <!-- /.content -->
    </div>
  </div>
</template>

<script>
  import manageData from '@/data/manage.json'
  import ManageBox from '@/components/share/ManageBox'
  export default {
    data(){
      return{
        htmlData:null,
      }
    },
    components:{
      ManageBox
    },

    activated(){
      this.reCreate();
      console.log("9999999")
    },

    //2解决keep-alive路由复用问题，beforeRouteEnter还不能使用this，需要传递一个回调函数作为next的参数，回调函数参数为当前实例vm
    beforeRouteEnter (to, from, next) {
      console.log('beforeRouteEnter 事务管理');
      next(vm =>{
        console.log('NEXT 事务管理',vm);
        vm.reCreate();//不能调用钩子create（）
      });
    },
    created(){

      //1读入本地对应事务的数据，不能使用mounted，beforeMounted应为后两者者已经渲染到页面了会报空错（太晚），也不能使用beforeCreate，此时数据还未观测，相当于未init报空错（太早）
      this.reCreate();
    },
    methods:{
     //2解决路由复用问题，从新获取数据
      reCreate(){
        let link = location.href.match(/\/([^/]+)$/)[1];
        this.selectHtml(link);
      },
      //1判断是事务类型
      selectHtml(link){
        switch (link){
          case 'pubAffMa':
            this.htmlData = manageData.pub;
            break;
          case 'recMa':
            this.htmlData = manageData.rec;
            break;
          case 'serMa':
            this.htmlData = manageData.ser;
            break;
        }
      }
    }
  }
</script>
