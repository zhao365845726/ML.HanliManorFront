<template>
  <div class="container brandStory margin" style="margin-bottom:12%;">
    <img src="../assets/img/bg5.png" alt="" class="img">
    <!--<swiper :options="swiperOption" class="img1">
      <swiper-slide>
        <ul v-for="(item,index) in res_a">>
          <li><img :src="item.CoverPhoto"/></li>
        </ul>-->
        <!--v-for="(item,index) in res_a">-->
        <!--<router-link :to="{path:'product',query:{Id:item.Id}}" class="news-item">-->
        <!--<img :src="item.CoverPhoto" />-->
        <!--</router-link>-->
        
      <!--</swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>-->
    <div class="wrapper">
      <swiper :options="swiperOption" v-if="showSwiper" class="img1">
        <swiper-slide v-for="(item,index) of list" :key="index">
          <img class="swiper-img" :src="item.CoverPhoto" alt="">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </div>
  </div>
</template>
<script>
     export default {
    name: "brandStory",
        data() {
          return {
            swiperOption: {
              pagination: '.swiper-pagination',clickable: true,
              autoplay: {
                 delay: 30000,
              },
              loop: true,
              navigation: { 
                 nextEl: '.swiper-button-next', 
                 prevEl: '.swiper-button-prev', 
              },
              initialSlide: 2,
             direction: 'horizontal', //滑动方向，可设置水平(horizontal)或垂直(vertical)。
              grabCursor: true,
              slidesPerView: "auto",
              spaceBetween: 10,
              centeredSlides: true,
              loopAdditionaSlider: 0, // loop模式下会在slides前后复制若干个slide,，前后复制的个数不会大于原总个数。
              
            },
            list: [],
          };
    },
         computed: {
    showSwiper () {
      return this.list.length
    }
  },
      mounted() {
      this.$axios
        .post('http://hlzy.api.milisx.xyz/api/content/getcategoryarticlelist', {
                "categoryid": "a460675f-8a68-4bbb-b0cd-825f7578fe00",
                "PageIndex": 1,
                "PageSize": 10
              })
        .then((res) => {
          this.list = res.data.data.lst_categoryarticlelist;
          console.log(this.list)
        })
    }
     };
</script>
 <style scoped>
   .wrapper >  .swiper-pagination-bullet-active {
      background: #fff;
      }
   .wrapper {
    width: 50%;
    margin: auto;
   }
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
     width:100%;
     height:auto;
     margin-top:-25%;
   }
     .img1 img {
       width:100%;
       height:300px;
     }
@media (max-width: 1100px){
.story-dream-title span {
    font-size: 30px;
}
.intro-header h2 {
    font-size: 30px;
   }
.story-dream-title p {
    font-size: 20px;
}
}
@media (max-width: 768px){
  .brandStory{
    margin-bottom: 40px;
  }
   .img1 {
     border:0px solid;
     width:20%;
     height:200px;
     margin-top:-28%;
   }
}
   @media (max-width: 1024px){
       .img1 {
     border:0px solid;
     width:20%;
     height:160px;
     margin-top:-28%;
   }
   }
 </style>
