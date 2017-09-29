<template>
  <div class="table-responsive">
    <table class="table no-margin">
      <thead>
      <tr>
        <th v-for="item in currentKey">{{item.title}}</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(item,index) in tableData" >
        <td v-for="personalItem in currentKey">{{item[personalItem.key]}}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
  export default {
    props:['currentKey','tableData']
  }
</script>
