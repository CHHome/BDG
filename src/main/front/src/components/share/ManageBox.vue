<style scoped>
  .box.blue{
    border-top: 3px solid #00c0ef;
  }
  .box.red{
    border-top: 3px solid #dd4b39;
  }
  .box.yellow{
    border-top: 3px solid #f39c12;
  }
  .box-body span{
    border-top-left-radius: 2px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 2px;
    display: block;
    float: left;
    height: 100px;
    width: 100px;
    text-align: center;
    line-height:100px;
    font-size: 45px;
  }
  .box-body>div{
    padding-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    display: flex!important;
    align-items: center;
  }

  .box-body >div >.red{
    background-color:#dd4b39 ;
  }
  .box-body >div>.blue{
    background-color: #00c0ef;
  }
  .box-body >div >.yellow{
    background-color:#f39c12 ;
  }
  .box-body ul{
    float: left;
    margin-left: 12px;
    margin-bottom: 0;
  }
  .box-body ul li{
    padding: 3px;
    line-height: normal;
  }
</style>
<template>
  <div class="box" :class="boxData.color">
    <div class="box-header with-border">
      <h3 class="box-title">{{boxData.listTitle}}</h3>
      <div class="box-tools pull-right">
        <button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i>
        </button>
        <button type="button" class="btn btn-box-tool" data-widget="remove"><i class="fa fa-times"></i></button>
      </div>
    </div>
    <div class="box-body">
      <div>
        <span :class="boxData.color"><i class="fa " aria-hidden="true" :class="boxData.icon"></i></span>
        <ul>
          <li v-for="item in boxData.items"><router-link :to="{}">{{item.text}}</router-link></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    data(){
      return {

      }
    },
    props:['boxData']
  }
</script>
