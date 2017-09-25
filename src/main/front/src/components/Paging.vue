<style scoped>
  .pageBtn{
    display: inline-block;
    list-style: none;
    padding: 8px 10px;
    border:1px solid #00c0ef;
    cursor: pointer;
  }
  .pageBtn input{
    width:30px;
    height:20px;
  }
  ul{
    text-align: center;
  }
  .color{
    background-color: #00c0ef;
  }
</style>
<template>
  <div>
    <ul>
      <li @click="prePage" class="pageBtn prePage">上一页</li>
      <li class="pageBtn" v-if="allPre" @click="preList">...</li>
      <li v-for="item in pageList"
          class="pageBtn"
          :class="{color:currentPage === item}"
          @click="changePage(item)">{{item}}</li>
      <li class="pageBtn" v-if="allNext" @click="lastList">...</li>
      <li @click="nextPage" class="pageBtn nextBtn">下一页</li>
      <li class="pageBtn">跳转至:<input type="text" v-model="toPage"></li>
    </ul>
  </div>
</template>
<script>
  export default {
    props:['totalPages','nowPage'],
    data(){
      return{
        currentPage:this.nowPage,
        count:5,
        pageList:[],
        allNext:false,
        allPre:false,
        toPage:null,
        jumpPage:null
      }
    },
    watch:{
      nowPage(){
        this.currentPage = this.nowPage;
      },
      toPage(){
        console.log("1111111")
        this.jumpPage = parseInt(this.toPage);
      },
      jumpPage(){
        if(!this.jumpPage||this.jumpPage<1||this.jumpPage>this.totalPages){
          alert("您请求的页面不存在，请重新输入");
          return;
        }
        this.currentPage = this.jumpPage;
      },
      pageList(){
        this.allPre = this.pageList[0]>1;
        this.allNext =this.pageList[4]<this.totalPages;
        console.log('test:'+this.currentPage);
        console.log('test:'+this.pageList);
      },
      currentPage(){
        if(this.currentPage>=this.totalPages){
          this.currentPage = this.totalPages;
          $('.nextBtn').css('cursor','no-drop');
        }else
          $('.nextBtn').css('cursor','pointer');
        if(this.currentPage<=1){
          this.currentPage = 1;
          $('.prePage').css('cursor','no-drop');
        }else
          $('.prePage').css('cursor','pointer');
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
        this.$emit('change',this.currentPage );
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
      }
    }
  }
</script>
