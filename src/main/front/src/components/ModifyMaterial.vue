<style scoped>
  .dialog{
    position: absolute;
    bottom:500px;
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
            <th>宣传片类别</th>
            <td>
              <select name="category">
                <option value="shouce">宣传(献血、知识)手册</option>
                <option value="haibao">电梯海报、广告</option>
                <option value="dianshi">电视媒体资料(材料)</option>
                <option value="zhiyin">宣传、活动(指引)单张</option>
                <option value="qita">其他</option>
              </select>
            </td>
            <th>宣传片名称</th>
            <td><input type="text" name="cardName"></td>
          </tr>
          <tr>
            <th>制作方式</th>
            <td colspan="2">
              <input type="radio" name="mode" value="内部制作">内部制作
              <input type="radio" name="mode" value="广告公司制作">广告公司制作
            </td>
          </tr>
          <tr>
            <th>要求完成时间</th>
            <td><input type="text" name="endTime"></td>
            <th>规格</th>
            <td><input type="text" name="size"></td>
          </tr>
          <tr>
            <th>单位</th>
            <td><input type="text" name="unit"></td>
            <th>制作数量</th>
            <td><input type="text" name="number"></td>
          </tr>
          <tr>
            <th>广告公司名称</th>
            <td colspan="3"><input type="text" name="company"></td>
          </tr>
          <tr>
            <th>广告公司联系人</th>
            <td><input type="text" name="charge"></td>
            <th>广告公司联系方式</th>
            <td><input type="text" name="comTel"></td>
          </tr>
          <tr>
            <th>费用(元)</th>
            <td colspan="3"><input type="text" name="cost"></td>
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
      $('select').val(this.item.category);
      $("[name='cardName']").val(this.item.cardName);
//      $("[name='mode']").val(this.item.mode);
      $("[name='endTime']").val(this.item.endTime);
      $("[name='size']").val(this.item.size);
      $("[name='unit']").val(this.item.unit);
      $("[name='number']").val(this.item.number);
      $("[name='company']").val(this.item.company);
      $("[name='charge']").val(this.item.charge);
      $("[name='comTel']").val(this.item.comTel);
      $("[name='cost']").val(this.item.cost);
      $(".Modify [name='mode']").each((x,item) =>{
        if(item.value === this.item.mode){
          item.checked = true;
        }
      })
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
