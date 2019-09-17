<template>
  <!--<div class="lunbo">
    <swiper :options="swiperOption" class='swiper-box'>
      <swiper-slide class="img1"><img src="http://image.hanjiazhuang.cn/m6.jpg"></swiper-slide>
      <swiper-slide><img src="http://image.hanjiazhuang.cn/m5.jpg"></swiper-slide>
      <swiper-slide><img src="http://image.hanjiazhuang.cn/m2.jpg"></swiper-slide>
      <swiper-slide><img src="http://image.hanjiazhuang.cn/m7.jpg"></swiper-slide>
      <swiper-slide><img src="http://image.hanjiazhuang.cn/m1.jpg"></swiper-slide>
      <swiper-slide><img src="http://image.hanjiazhuang.cn/m4.jpg"></swiper-slide>
      <swiper-slide> <img src="http://image.hanjiazhuang.cn/m3.jpg"></swiper-slide>
      </swiper>
  </div>-->
  <div id="app">
    <img v-for="img in imgs" v-lazy="img">
    <img v-for="img in imgs" v-lazy:background-image="img">
    <img v-for="img in imgs" v-lazy:background-image="img">
    <img v-for="img in imgs" v-lazy:background-image="img">
    <div>
      <img v-for="imgv in imga" v-lazy="imgv">
      <img v-for="imgv in imga" v-lazy:background-image="imgv">
      <img v-for="imgv in imga" v-lazy:background-image="imgv">
    </div>
  </div>
  
</template>
<script>export default {
  name: 'lunbo',
    data() {
    return {
      msg: '',
      imgs: [
        'http://image.hanjiazhuang.cn/m1.jpg',
        'http://image.hanjiazhuang.cn/m2.jpg',
        'http://image.hanjiazhuang.cn/m3.jpg',
        'http://image.hanjiazhuang.cn/m4.jpg',
      ],
      imga: [
         'http://image.hanjiazhuang.cn/m5.jpg',
        'http://image.hanjiazhuang.cn/m6.jpg',
        'http://image.hanjiazhuang.cn/m7.jpg'
      ]
      //swiperOption: {
      //  loop: true,
      //  speed: 5000,
      //  width: 217,
      //  autoplay: {
      //    delay:3000
      //  },
      //  //effect : 'fade',
      //}
    }
  }
  }
</script>
<style>
  .lunbo {
      border:1px solid;
      margin-top: 5%;
      margin-bottom:5%;
  }
  .img1 {
    border:1px solid;
    width:11.5%;
  }
</style>
