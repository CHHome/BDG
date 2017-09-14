<template>
  <div id="app" class="wrapper">
    <my-header></my-header>
    <my-slider></my-slider>
    <router-view></router-view>
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
