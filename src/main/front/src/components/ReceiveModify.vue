<style scoped>
  .dialog{
    position: absolute;
    bottom:300px;
    left:25%;
    background-color: #fff;
    width:50%;
    padding: 30px;
    box-shadow: 0 0 10px #cdcdcd;
    z-index: 10001;
    opacity: 1;
  }
  .table td, .table th{
    border:none;
  }
  select,input{
    border :1px solid #00c0ef;
  }
  .options{
    text-align: center;
    margin-top: 20px;
  }
  .options>div{
    border-style: none;
    line-height: 32px;
    padding: 0 48px;
    background-image: linear-gradient(-133deg,#004CFB 0,#85A1E1 100%);
    border-radius: 16px;
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color: #FFF;
    letter-spacing: 0;
    display: inline-block;
    cursor: pointer;
  }
  .options div:nth-of-type(1){
    margin-right: 15px;
  }

</style>


<template>
  <div class="dialog Modify">
    <form id="ModifyForm">
      <div class="table-responsive">
        <table class="table table-bordered no-margin">
          <tbody>
          <tr>
            <th>名称</th>
            <td><input type="text" name="name"></td>
            <th>单位</th>
            <td><input type="text" name="danwei"></td>
          </tr>
          <tr>
            <th>数量</th>
            <td><input type="text" name="number"></td>
            <th>使用方向</th>
            <td>
              <select name="useful">
                <option value="社区街道">社区街道</option>
                <option value="单位企业">单位企业</option>
                <option value="高校">高校</option>
                <option value="献血点">献血点</option>
                <option value="其他">其他</option>
              </select>
            </td>
          </tr>
          <tr>
            <th>使用方名称</th>
            <td colspan="3"><input type="text" name="user"></td>
          </tr>
          </tbody>
        </table>
      </div>
    </form>
    <div class="options">
      <div @click="MoSave">保存</div>
      <div @click="MoCancel">取消</div>
    </div>
  </div>
</template>

<script>
  export default {
    props:['nowIndex','nowItem'],
    data(){
      return {
        index:this.nowIndex,
        item:this.nowItem
      }
    },
    mounted(){
      $('select').val(this.item.useful);
      $("[name='name']").val(this.item.name);
//      $("[name='mode']").val(this.item.mode);
      $("[name='danwei']").val(this.item.danwei);
      $("[name='number']").val(this.item.number);
      $("[name='user']").val(this.item.user);
    },
    methods:{
      MoSave(){
        console.log($('#ModifyForm').serializeJSON());
        this.$emit('MoSave',this.index,$('#ModifyForm').serializeJSON());
      },
      MoCancel(){
        this.$emit('MoCancel');
      }
    }
  }
</script>
