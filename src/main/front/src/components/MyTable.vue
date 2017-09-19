<template>
  <div class="table-responsive">
    <table class="table no-margin">
      <thead>
      <tr>
        <th><input type="checkbox" ></th>
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
      <tr v-for="(item,index) in tableData" :key="item.title">
        <td><input type="checkbox" v-on:change="selectItem(index)"></td>
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
    data(){
      return {
        selectList:[]
      }
    },
    methods:{
      selectItem(index){
        this.$emit('select',index);
      }
    }
  }
</script>
