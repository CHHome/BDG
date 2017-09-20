<template>
  <div class="table-responsive">
    <table class="table no-margin">
      <thead>
      <tr>
        <th><input type="checkbox" @click="selectAll"></th>
        <th>No.</th>
        <th>标题</th>
        <th>小组名称</th>
        <th>计划所属年份</th>
        <th>计划事务类别</th>
        <th>负责人</th>
        <th>拟稿时间</th>
        <th>完成情况</th>
        <th>状态</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(item,index) in tableData" >
        <td><input type="checkbox" v-on:click="selectItem(index)" class="itemCheckBox"></td>
        <td>{{index}}</td>
        <td>{{item.title}}</td>
        <td>{{item.groupName}}</td>
        <td>{{item.beloneTime}}</td>
        <td>{{item.type}}</td>
        <td>{{item.master}}</td>
        <td>{{item.createTime}}</td>
        <td><span class="label label-success">{{item.situation}}</span></td>
        <td><span class="label label-warning">{{item.status}}</span></td>
      </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
  export default {
    props:['tableData'],
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
