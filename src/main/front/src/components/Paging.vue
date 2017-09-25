<style scoped>
  .pageBtn{
    display: inline-block;
    list-style: none;
    padding: 8px 10px;
    border:1px solid #00c0ef;
    cursor: pointer;
  }
  .color{
    background-color: #00c0ef;
  }
</style>
<template>
  <div>
    <ul>
      <li @click="prePage" class="pageBtn">上一页</li>
      <li class="pageBtn" v-if="allPre" @click="preList">...</li>
      <li v-for="item in pageList"
          class="pageBtn"
          :class="{color:currentPage === item}"
          @click="changePage(item)">{{item}}</li>
      <li class="pageBtn" v-if="allNext" @click="lastList">...</li>
      <li @click="nextPage" class="pageBtn">下一页</li>
    </ul>
  </div>
</template>
<script>
  export default {
    props:['totalPages'],
    data(){
      return{
        currentPage:1,
        count:5,
        pageList:[],
        allNext:false,
        allPre:false,
      }
    },
    watch:{
      pageList(){
        this.allPre = this.pageList[0]>1;
        this.allNext =this.pageList[4]<this.totalPages;
        console.log('test:'+this.currentPage);
        console.log('test:'+this.pageList);
      },
      currentPage(){
        if(this.totalPages>5){
          if(this.currentPage-1<3){
            this.pageList = [1,2,3,4,5];
          }else{
            if(this.totalPages - this.currentPage<3){
              this.pageList = [this.totalPages-4,this.totalPages-3,this.totalPages-2,this.totalPages-1,this.totalPages]
            }else{
              this.pageList = [this.currentPage-2,this.currentPage-1,this.currentPage,this.currentPage+1,this.currentPage+2];
            }
          }
        }
      }
    },
    mounted(){
      if(this.totalPages<5){
        for(let i = 0;i<this.totalPages;i++){
          this.pageList = [...this.pageList,i+1];
        }
      }else{
        this.pageList = [1,2,3,4,5];
      }
      console.log('paging',this.pageList);
    },

    methods:{
      changePage(pageNum){
        this.currentPage = pageNum;
      },
      preList(){
        this.currentPage = this.pageList[0]-1;
      },
      lastList(){
        this.currentPage = this.pageList[4]+1;
      },
      nextPage(){
        this.currentPage++;
        this.$emit('change', this.currentPage );
      },
      prePage(){
        this.currentPage--;
        this.$emit('change',this.currentPage );
      }
    }
  }
</script>
