<style scoped>
  .box{
    /*border-top:#00a65a;*/
    border-top:3px solid #00c0ef
  }
</style>

<template>
  <div class="box">
    <div class="box-header with-border">
      <h3 class="box-title">  {{mydata.title}}</h3>
      <div class="box-tools pull-right">
        <button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i>
        </button>
        <button type="button" class="btn btn-box-tool" data-widget="remove"><i class="fa fa-times"></i></button>
      </div>
    </div>
    <div class="box-body">
      <div class="chart">
        <bar
          :chart-data="mydata.chartData"
          :options="mydata.options"
          :width="400"
          :height="200"
        ></bar>
      </div>

    </div>
  </div>

</template>
<script>
  import Bar from '@/components/share/bar'
  export default {
    components:{
      Bar
    },
    props:['mydata']
  }
</script>
