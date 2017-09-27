<template>
  <div>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
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
