<!--宣传品资料制作查询-->
<style scoped>
  select{
    height: 25px!important;
  }
  .searchOption{
    margin-top: 10px;
  }
  .searchOption>div{
    display: inline-block;
    padding: 5px 20px;
    background-color: #00c0ef;
    margin-left: 10px;
    border-radius: 4px;
    cursor: pointer;
  }
  .row{
    margin-bottom: 10px;
  }
</style>
<template>
  <div class="line-slider ">
    <form id="barData">
      <div class="row">
        <div class="col-md-3">
          标题：
          <input type="text" placeholder="请输入标题" name="title">
        </div>
        <div class="col-md-3">
          申请人：
          <input type="text" placeholder="请输申请人" name="drafter">
        </div>
        <div class="col-md-3">
          制作方式:
          <select name="markWay">
            <option value="全部">全部</option>
            <option value="A">内部制作</option>
            <option value="C">外部制作</option>
          </select>
        </div>
        </div>
      <div class="row">

        <div class="col-md-6">
          总费用
          <input type="text" name="minMoney">
          -
          <input type="text" name="maxMoney">
        </div>
        <div class="col-md-3">
          类别:
          <select name="category">
            <option value="全部">全部</option>
            <option value="A">A</option>
            <option value="C">C</option>
          </select>
        </div>
      </div>
    </form>
    <div class="searchOption">
      <div @click="query">查询</div>
      <div @click="reset">重置</div>
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return {

      }
    },
    methods:{
      query(){
        this.$emit('query',$('#barData').serializeJSON());
      },
      reset(){
        $('#barData')[0].reset();
      }
    }
  }
</script>
