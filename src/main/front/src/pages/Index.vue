<style scoped>
  .curtain{
    position: absolute;
    width: 100%;
    height: 100%;
    top:0;
    left: 0;
    background-color: #fff;
    opacity: 0.25;
    z-index: 10000;
  }
</style>

<template>
  <div id="app" class="wrapper">
    <div class="curtain" v-show="$store.state.dialog"></div>
    <my-header></my-header>
    <my-slider></my-slider>
    <keep-alive>
      <router-view name="default"></router-view>
    </keep-alive>
    <router-view name="recreate"></router-view>
    <myFooter></myFooter>
  </div>
</template>

<script>
  import myHeader from '@/components/share/Header'
  import mySlider from '@/components/share/Slider'
  import myFooter from '@/components/share/Footer'
  export default {
    name: 'app',
    components:{
      myHeader,
      mySlider,
      myFooter
    }
  }
</script>

<style>

</style>

