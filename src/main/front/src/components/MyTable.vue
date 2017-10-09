<template>
  <div class="table-responsive">
    <table class="table no-margin">
      <thead>
      <tr>
        <th><input type="checkbox" @click="selectAll"></th>
        <th v-for="item in currentKey">{{item.title}}</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(item,index) in tableData" >
        <td><input type="checkbox" v-on:click="selectItem(index)" class="itemCheckBox"></td>
        <td  v-for="colItem in currentKey">{{item[colItem.key]}}</td>
        <!--<td><span class="label label-success">{{item.situation}}</span></td>-->
        <!--<td><span class="label label-warning">{{item.status}}</span></td>-->
      </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
  export default {
    props:['currentKey','tableData'],
    methods:{
      //选择选项
      selectItem(index){
        this.$emit('select',index);
      },
      selectAll(event) {
        let itemCheckBoxs = document.getElementsByClassName('itemCheckBox');
        //选择所有选项
        for (let key in this.tableData) {
          itemCheckBoxs[key].checked = false;
        }
        if (event.target.checked) {
          for (let key in this.tableData) {
            itemCheckBoxs[key].checked = true;
            // 这里的key要替换成id，对应数据库
          }
          this.$emit('checkedAll');
        } else {
          for (let key in this.tableData) {
            itemCheckBoxs[key].checked = false;
            // 这里的key要替换成id，对应数据库
          }
          this.$emit('checkedNull');
        }
      }
    }
  }
</script>
