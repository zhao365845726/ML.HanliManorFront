<template>
  <div class="container brandStory margin">
    <img src="../assets/img/bg5.png" alt="" class="img">
     <router-link  :to="{path:'product',query:{Id:res_a}}" class="news-item">
    <swiper :options="swiperOption" class="img1">
    <swiper-slide><img src="../assets/img/icon2.png" /></swiper-slide>
    <swiper-slide><img src="../assets/img/icon2.png" /></swiper-slide>
    <swiper-slide><img src="../assets/img/icon2.png" /></swiper-slide>
    <swiper-slide><img src="../assets/img/icon2.png" /></swiper-slide>
    <swiper-slide><img src="../assets/img/icon2.png" /></swiper-slide>
    <swiper-slide><img src="../assets/img/icon2.png" /></swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
     </router-link>
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
            },
            res_a:[]
          };
         },
      mounted() {
      this.$axios
        .post('http://hlzy.api.milisx.xyz/api/content/getcategoryarticlelist', {
                "categoryid": "a460675f-8a68-4bbb-b0cd-825f7578fe00",
                "PageIndex": 1,
                "PageSize": 10
              })
        .then((res) => {
          this.res_a = res.data.data.lst_categoryarticlelist[0].Id;
          console.log(res.data.data.lst_categoryarticlelist[0].Id)
        })
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
