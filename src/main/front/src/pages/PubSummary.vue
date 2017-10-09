<template>
  <div>
    <div class="content-wrapper">
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
          <button @click="test()">change</button>
        </div>
      </div>

      </section>
      <!-- /.content -->
    </div>
  </div>
</template>

<script>

  import myBox from '@/components/share/MyBox'
  import myData from '@/data/myData.json'
  import '@/css/sumSlider.css'
  export default {
    components:{
      myBox
    },
    mounted (){
      this.getData();
    },
    data(){
      return {
        boxData:null
      }
    },
    methods:{
      test(){
        console.log('click'+this.boxData[0][0].chartData.datasets[0].data[0]);
        this.boxData[0][0].chartData.datasets[0].data[0]=100;
      },
      getData(){
        this.boxData = myData.boxData;
      }
    }
  }
</script>
