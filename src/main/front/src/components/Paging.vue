<template>
  <div>
    <Button @click="prePage">上一页</Button>
    <Button @click="nextPage">下一页</Button>
  </div>
</template>
<script>
  export default {
    props:['totalPages','currentPage'],
    data(){
      return{
        nowPage:1
      }
    },
    computed:{
      init(){
        this.nowPage =  this.currentPage;
      }
    },
    methods:{
      nextPage(){
        this.nowPage++;
        this.$emit('change', this.nowPage );
      },
      prePage(){
        this.nowPage--;
        this.$emit('change',this.nowPage );
      }
    }
  }
</script>
