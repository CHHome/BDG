<style scoped>
  .login-container{
    position: absolute;
    width:100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: url("../assets/index_bg.jpg") no-repeat ;
    background-size: 100%;
  }
  .login-container .login-myBox{
    display: inline-block;
    text-align: center;
    background-color: #fff;
    padding: 40px 80px;
    border-radius: 4px;
  }
  .login-container .login-myBox header{
    color: #666;
    font-size: 18px;
  }
  .login-container .login-myBox div:nth-of-type(1){
    margin-top: 30px;
    position: relative;
  }
  i.fa{
    position: absolute;
    left: 5px;
    line-height: 40px;
    font-size: 25px;
  }

  .login-container .login-myBox div:nth-of-type(2){
    margin-top: 20px;
    margin-bottom: 20px;
    position: relative;
  }
  .login-container .login-myBox input{
    display: block;
    width:350px;
    height: 40px;
    line-height: 35px;
    font-size: 16px;
    padding:0 40px;
    border: 1px solid blue;
  }
  .login-container .login-myBox .button{
    color: #fff;
    border-radius: 4px;
    background-color: blue;
    padding:10px 20px;
    display: inline-block;
    cursor: pointer;
    margin-right: 30px;
  }
  .fade-enter-active, .fade-leave-active {
    transition: all 1s
  }
  .fade-enter{
    opacity: 0;
    transform: translateX(300px);
  }
  .fade-enter-to,.fade-leave{
    opacity: 0.9
  }
</style>

<template>
  <div class="login-container">
    <transition  name="fade">
      <div class="login-myBox" v-if="show">
        <header>欢迎登录广州献血中心服务平台</header>
        <section>
          <div><i class="fa fa-user-o" aria-hidden="true"></i><input type="text" class="username"></div>
          <div><i class="fa fa-key" aria-hidden="true"></i><input type="password" class="password"></div>
          <div class="button" @click="loginIn">登录</div>
          <div class="button">注册</div>
          <div class="button" @click="test">测试免密</div>
        </section>
      </div>
    </transition>
  </div>
</template>

<script>
  import { baseUrl } from '@/data/Const'
  export default {
    data(){
      return {
        show:false
      }
    },
    mounted(){
      setTimeout(()=>{
        console.log("454")
        this.show = !this.show;
        console.log(this.show)
      },200)
    },
    methods:{
      test(){
        this.$router.push({name:'index'});
      },
      loginIn(){
        let userName = $('.username').val();
        let password = $('.password').val();
        let formData = new  FormData();
        formData.append('username',userName);
        formData.append('password',password);
        console.log(formData);
        this.$http.post(baseUrl + '/login', formData).then(res =>{
          if(res.data){
            this.$router.push({name:'index'});
          }else{
            alert("用户名或密码错误，请重新输入！")
          }
        },res => {
          alert("连接失败。请检查网络！")
        });
//        var request = new XMLHttpRequest();
//        request.open("POST", "http://127.0.1:8082/login");
//        request.send(formData);
      }
    }
  }
</script>
