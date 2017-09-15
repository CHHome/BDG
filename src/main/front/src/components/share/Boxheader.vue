<template>
  <div class="box-header with-border">
    <h3 class="box-title">  本月宣传计划统计</h3>
    <div class="box-tools pull-right">
      <button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i>
      </button>
      <div class="btn-group">
        <button type="button" class="btn btn-box-tool ">
          <i class="fa fa-wrench"></i></button>
      </div>
      <button type="button" class="btn btn-box-tool" data-widget="remove"><i class="fa fa-times"></i></button>
    </div>
  </div>
</template>

<script>
  export default {
    props:['data']
  }

</script>
