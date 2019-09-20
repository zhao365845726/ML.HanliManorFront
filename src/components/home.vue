<template>
  <div class="home">
    <!--<img src="../assets/img/bg.png" alt="">-->
    <swiper :options="swiperOption" class='swiper-box'>
      <swiper-slide><img src="http://image.hanjiazhuang.cn/bg.png" alt=""></swiper-slide>
      <swiper-slide><img src="http://image.hanjiazhuang.cn/%E9%A6%96%E9%A1%B5.png" alt=""></swiper-slide>
      <!--<swiper-slide><img v-for="img in imga" v-lazy="img" alt=""></swiper-slide>
      <swiper-slide><img v-for="img in imgb" v-lazy="img" alt=""></swiper-slide>-->
    </swiper>
    <!--<div class="swiper-button-prev"></div>--><!--左箭头。如果放置在swiper-container外面，需要自定义样式。-->
    <!--<div class="swiper-button-next"></div>--><!--右箭头。如果放置在swiper-container外面，需要自定义样式。-->

  </div>
</template>

<script>
export default {
  name: 'home',
    data() {
      return {
        //imga: [
        //  'http://image.hanjiazhuang.cn/bg.png',        
        //],
        //imgb: [
        //   'http://image.hanjiazhuang.cn/%E9%A6%96%E9%A1%B5.png'
        //],
      msg: '',
      swiperOption: {
        loop: true,
        speed: 5000,
        autoplay: {
          delay:3000
        },
        effect : 'fade',
      }
    }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home,.home img{
  width: 100%;
  height: auto;
  overflow: hidden;
}
</style>
