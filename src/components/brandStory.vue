<template>
  <div class="container brandStory margin">
    <img src="../assets/img/bg3.png" alt="" class="img">
    <div class="container story right">
      <div class="story-inner margin">
          <div class="story-intro story-intro-01">
              <div class="intro-header">
                  <h2>MEDIA FOCUS LLXVMDKDF</h2>
                  <p style="cursor:auto">{{this.media_c}}</p>
              </div>
              <div class="story-intro-01__txt">
                  <div>
                      <p class="t-c">守护本来的味道<br>韩家庄人民欢迎您</p>
                  </div>
              </div>
          </div>
          <div class="story-img img-box">
              <img src="http://image.jmta.milisx.com/lg9SSeviQuETH4wYxVCT7dnqHhG0">
          </div>
      </div>
    </div>

    <div class="story left mt-150">
      <div class="story-inner margin">
        <div class="story-img story-img-02 img-box">
            <img src="http://image.jmta.milisx.com/FktWRJzSQHttdA5M_btwodbAksap">
        </div>
        <div class="story-intro story-intro-02">
          <div class="story-intro__txt story-intro-02__txt">
            <p v-html="this.media"></p>
          </div>
        </div>
      </div>
    </div>

    <div class="story right mt-150">
      <div class="story-inner margin">
        <div class="story-intro">
            <div class="story-intro-03__txt">
                <div class="story-dream-title">
                    <p>{{this.media_b}}</p>
                    <span>MEDIA FOCUS</span>
                </div>
                <div class="story-intro__txt">
                  <p v-html="this.media_a"></p>
                </div>
            </div>
        </div>
        <div class="story-img img-box">
            <img src="http://image.jmta.milisx.com/luFSp1cqrp689Jegq9SX5lUBtUJ0">
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
      media: '',
      media_c:'',
      media_a: '',
      media_b: '',
    };
    },
    mounted() {
         this.$axios
           .post('http://hlzy.api.milisx.xyz/api/content/getarticledetail', {
             "ArticleId": "35797c8b-7fee-4163-bf44-9316e6bd17b3"
           })
           .then((res_a) => {
             this.media = res_a.data.data.Body;
             this.media_c = res_a.data.data.Title;
           })
          this.$axios
           .post('http://hlzy.api.milisx.xyz/api/content/getarticledetail', {
             "ArticleId": "55c55a75-d32b-4921-8dc2-77342bca53cb"
           })
           .then((res_b) => {
             this.media_a = res_b.data.data.Body;
             this.media_b = res_b.data.data.Title;
             //console.log(this.media_b)
           })
          //this.$axios
          // .post('http://hlzy.api.milisx.xyz/api/content/getarticledetail', {
          //   "ArticleId": "3aaf2f3f-32e7-4968-b92d-54734c8385f8"
          // })
          //  .then((res_c) => {
          //    this.photo = res_c.data.data.CoverPhoto;
          //    console.log(this.photo)
          // })
    }
};
</script>

<style scoped>
  p {
    cursor:text;
  }
.brandStory {
  margin-bottom: 156px;
}
.img {
  width: 100%;
  height: auto;
  overflow: hidden;
  margin-bottom: 114px;
}
/* 第一层 */
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
  background-color: #efefef;
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
.story-intro-01 {
  background: url(../assets/img/img.png) center center no-repeat;
  background-size: 76% auto;
}
.intro-header {
  color: #00873c;
}
.intro-header h2 {
  font-size: 36px;
  line-height: 27px;
  width: 100%;
}
.intro-header p {
  font-size: 33px;
  margin-top: 36px;
}
.story-intro-01 .intro-header {
  margin-top: -60px;
}

.story-intro-01__txt {
  position: absolute;
  top: 50%;
  right: 20px;
  left: 20px;
  text-align: center;
  font-size: 18px;
  line-height: 45px;
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
  height: 100%;
  cursor: pointer;
}
/* 第二层 */
.mt-150 {
  margin-top: 150px;
}
.story-intro__txt {
  font-size: 14px;
  line-height: 36px;
  color: #333;
}
.story-intro-02__txt{
  position: absolute;
  top: 0;
  right: 7%;
  left: 7%;
  text-align: left;
}
/* 第三层 */
.story-intro-03__txt {
  width: 82%;
  position: absolute;
  top: 0;
  left:0;
  text-align: left;
}
.story-dream-title p {
  position: absolute;
  top: 0;
  left: 0;
  font-size: 30px;
}
.story-dream-title span {
  display: block;
  font: 900 70px/1.3 "AvenirLTStd";
  color: #dbdbdb;
  opacity: 0.2;
  white-space: nowrap;
}
@media (max-width: 1100px) {
  .brandStory {
    margin-bottom: 50px;
  }
  .story-dream-title span {
    font-size: 30px;
    text-align: center;
  }
  .intro-header h2 {
    font-size: 27px;
    text-align: center;
  }
  .story-inner p {
    font-size: 25px;
    text-align: center;
  }
  .story {
    padding: 0 20px;
  }
  .story-intro__txt p{
    font-size: 20px;
    text-align: left;
  }
   .story-intro-01 {
    margin-bottom: 40px;
    background-size: contain;
  }
  .story-intro-01__txt {
    position: relative;
    text-align: left;
    left: 0;
    margin-top: 30px;
  }
  .story-img-02 {
    margin-bottom: 30px;
  }
  .story-img {
    width: 100%;
  }
  .story-intro-02__txt,
  .story-intro-03__txt {
    width: 100%;
    position: relative;
    top: auto;
    right: auto;
    left: auto;
  }
  .story::before,
  .story-img::before {
    display: none;
  }
  .story-intro {
    position: relative;
    width: 100%;
  }
  .story.right .story-intro {
    left: 0;
  }
  .story-intro-01 .intro-header {
    margin-top: 0;
  }
  .story-intro-01 {
    margin-bottom: 40px;
    background-size: contain;
  }
  .img-box img {
    position: relative;
  }
  .story-dream-title p {
    font-size: 20px;
    text-align: center;
    position: relative;
  } 
  .mt-150{
    margin-top: 50px;
  }
}
@media (max-width: 768px) {
  .img{
    margin-bottom: 50px;
  }
  .intro-header h2,.story-inner p{
    font-size: 20px;
  }
  .story-intro__txt p{
    font-size: 16px;
  }
}
</style>
