<!--<template>
  <div class="container brandStory margin">
    <div class="swiper_">
      <img src="../assets/img/bg5.png" alt="" class="img">
      <div class="container swiper-box margin"  style="border:1px solid;height:377px;width:50%;">
       <swiper :options="swiperOption" class='swiper-box'>
      <swiper-slide v-for="(item, index) in swipers">
        <img src="../assets/img/bg2.png" alt="2012">
      </swiper-slide>
     </swiper>
     </div>
    </div>
  </div>
</template>-->
<!--<script>
export default {
  name: "brandStory",
  data() {
    return {
      swiperOption: {
        slidesPerView: 5,
        spaceBetween: 0,
        centeredSlides: true,
        loop: true,
        // autoplay:true,
      },
      swipers: [
        {
          fdcImage: "../assets/img/about_company.jpg"
        },
        {
          fdcImage: "../assets/img/about_company.jpg"
        },
        {
          fdcImage: "../assets/img/about_company.jpg"
        },
        {
          fdcImage: "../assets/img/about_company.jpg"
        }
      ]
    };
  }
};
</script>-->
<!--<style scoped>
.swiper_{
  width: 100%;
  height: auto;
  overflow: hidden;
  position: relative;
}
.swiper_ .img{
  width: 100%;
  height:500px;
}
.swiper_ .swiper-box{
  max-width: 100%;
  position: absolute;
  left: 50%;
  top:50px;
  transform: translateX(-50%);
}
.swiper-box {
  max-width: 1400px;
}
.swiper-container{
  overflow: inherit;
}
.swiper-box img {
  position: relative;
  max-width: none;
  width: 100%;
  height: 100%;
}
.swiper-slide {
  height: auto;
}
.swiper-slide {
    transform: scale(2);
}
.swiper-slide:not(.swiper-slide-active) {
    transform: scale(1);
}
}

</style>-->
<template>
  <div class="container brandStory margin">
    <img src="../assets/img/bg5.png" alt="" class="img">
    <swiper :options="swiperOption" class="img1">
    <swiper-slide><img src="../assets/img/icon2.png" /></swiper-slide>
    <swiper-slide><img src="../assets/img/icon2.png" /></swiper-slide>
    <swiper-slide><img src="../assets/img/icon2.png" /></swiper-slide>
    <swiper-slide><img src="../assets/img/icon2.png" /></swiper-slide>
    <swiper-slide><img src="../assets/img/icon2.png" /></swiper-slide>
    <swiper-slide><img src="../assets/img/icon2.png" /></swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
    </swiper>

    <div class="story right mt-80">
      <div class="story-inner margin">
        <div class="story-intro">
          <div class="story-intro-03__txt">
            <div class="story-dream-title">
              <p>MEDIA FOCUS</p>
              <span>韩梨玉露香</span>
            </div>
            <div class="story-intro__txt">
              <p>
                2006年8月诞生于武汉的良品铺子，12年来深耕华中，辐射全国，迄今已有逾2000多家门店遍布华中、华东、华南、西北、西南、西北等13省。
                良品铺子12年专注高端零食，精选全球32大产地食材，产品超过1000种，口味丰富多样，其中以十二经典产品最为著名。由十二经典产品组成的「拾贰经典」高端礼盒，获得众多明星及知名企业追捧。良品铺子自2015年起高端零食连续3年全国销售领先，成为四亿吃货的挑剔之选。
                2019年良品铺子签约国内一线明星吴亦凡为品牌代言人，并将“高端零食”定义为品牌战略和企业战略，以期以高端零食战略引领行业升级。
              </p>
            </div>
          </div>
        </div>
        <div class="story-img img-box wow fadeInRightSmall">
          <!-- Size 700*466 -->
          <img src="../assets/img/about_company.jpg" alt="">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
     export default {
        name: "brandStory",
        data() {
          return {
            swiperOption: {
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true
                    },
                    autoplay: {
                        delay: 3000,
                        stopOnLastSlide: false,
                        disableOnInteraction: true
                    },
                }
          };
        }
     };
</script>
 <style scoped>
     .brandStory {
         margin-bottom: 156px;
     }
     .img {
         width: 100%;
         height: auto;
         overflow: hidden;
         margin-bottom: 0px;
     }
     .main{
  max-width: 1400px;
  overflow: hidden;
}
   .img1 {
     border:0px solid;
     width:20%;
     height:auto;
     margin-top:-32%;
   }
     .img1 img {
       width:100%;
       height:auto;
     }
.story {
  position: relative;
  z-index: 1;
  padding: 120px 0;
}
.story::before {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  width: 43.75%;
  background-color: #f7f7f7;
}
.story.right::before {
  right: 0;
}
.story-inner {
  position: relative;
  font-size: 0;
  max-width: 1400px;
}
.story.right .story-inner {
  text-align: right;
}
.story.right .story-intro {
  left: 0;
}
.story.left .story-intro{
  right: 0;
}
.story-intro {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 50%;
  text-align: left;
}
.story-img {
  display: inline-block;
  vertical-align: top;
  width: 50%;
  position: relative;
}
.img-box::before {
  content: "";
  display: block;
}
.story-img::before {
  padding-top: 66.57143%;
}
.img-box img {
  right: 0;
  position: absolute;
  top: 0;
  width: 100%;
}
.mt-80 {
    margin-top: 130px;
}
.story-intro__txt {
    font-size: 14px;
    line-height: 2.57143;
    color: #333;
}
.story-intro-03__txt {
    position: absolute;
    top: -120px;
    right: 7%;
    left: 7%;
    text-align: left;
}
.story-dream-title p {
    font-size: 36px;
    color: #00873c;
    margin-top: 40px;
}
.story-dream-title span {
    display: block;
    font-size:34px;
    color: #00873c;
    margin-top: 36px;
    margin-bottom: 35px;
}
@media (max-width: 1100px){
.story-dream-title span {
    font-size: 30px;
}
.intro-header h2 {
    font-size: 30px;
}
.story {
    padding-top: 0;
    padding-bottom: 0;
}
.intro-header p {
    font-size: 24px;
}
.story-img-02 {
    margin-bottom: 30px;
}
.story-img {
    width: 100%;
}
.story-intro-03__txt {
    position: relative;
    top: auto;
    right: auto;
    left: auto;
}
.story::before,.story-img::before{
  display: none;
}
.story-intro {
    position: relative;
    width: 100%;
}
.story.right .story-intro {
    left: 0;
}
.story-inner p{
  text-align: left;
}
.img-box img{
  position: relative;
}
.story-dream-title p {
    font-size: 20px;
}
}
@media (max-width: 768px){
  .brandStory{
    margin-bottom: 40px;
  }
}
 </style>
