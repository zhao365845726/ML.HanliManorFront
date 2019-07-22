
<template>
  <div class="container brandStory margin">
    <img src="../assets/img/bg5.png" alt="" class="img">
    <swiper :options="swiperOption" class="img1">
      <!--<swiper-slide v-for="(item,index) in res_c">
        <router-link :to="{path:'product',query:{Id:item.Id}}" class="news-item">
          <img :src="item.CoverPhoto" />
        </router-link>
      </swiper-slide>-->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>

    <div class="story right mt-80">
      <div class="story-inner margin">
        <div class="story-intro">
          <div class="story-intro-03__txt">
            <div class="story-dream-title">
              <p>MEDIA FOCUS</p>
              <span>{{title}}</span>
            </div>
            <div class="story-intro__txt">
              <p v-html="Body">
              </p>
            </div>
          </div>
        </div>
        <div class="story-img img-box wow fadeInRightSmall">
          <!-- Size 700*466 -->
          <img :src="CoverPhoto"alt="">
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
        },
        title: '',
        Body: '',
        CoverPhoto:'',
        res_c: []
      };
    },
    mounted() {
      var param = window.location.href.split('=')[1];
      console.log(param);
      this.$axios
        .post('http://hlzy.api.milisx.xyz/api/content/getcategoryarticlelist', {
          "categoryid": "a460675f-8a68-4bbb-b0cd-825f7578fe00",
          "PageIndex": 1,
          "PageSize": 10
        })
        .then((res_c) => {
          this.res_c = res_c.data.data.lst_categoryarticlelist;
          //console.log(this.res_c)
        })
      this.$axios
        .post('http://hlzy.api.milisx.xyz/api/content/getarticledetail', {
          "ArticleId": param
        })
        .then((res) => {
            this.title = res.data.data.Title;
          this.Body = res.data.data.Body;
          this.CoverPhoto = res.data.data.CoverPhoto;
          console.log(res.data.data)
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

  .main {
    max-width: 1400px;
    overflow: hidden;
  }

  .img1 {
    border: 0px solid;
    width: 30%;
    height: auto;
    margin-top: -25%;
  }

    .img1 img {
      width: 100%;
      height: 300px;
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

  .story.left .story-intro {
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
    margin-top: 15%;
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
    font-size: 34px;
    color: #00873c;
    margin-top: 36px;
    margin-bottom: 35px;
  }

  @media (max-width: 1100px) {
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

    .story::before, .story-img::before {
      display: none;
    }

    .story-intro {
      position: relative;
      width: 100%;
    }

    .story.right .story-intro {
      left: 0;
    }

    .story-inner p {
      text-align: left;
    }

    .img-box img {
      position: relative;
    }

    .story-dream-title p {
      font-size: 20px;
    }
  }

  @media (max-width: 768px) {
    .brandStory {
      margin-bottom: 40px;
    }
  }
</style>
