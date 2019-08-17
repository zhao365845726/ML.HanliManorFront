<template>
  <div class="container verification margin">
    <img src="../assets/img/产品验证.png" alt="" class="img"> 
    <div class="container main margin">
        <div class="intro-header">
          <h2 class="t-c">MEDIA FOCUS</h2>
          <p class="t-c" >产品验证</p>
        </div>
        <div class="icon">
          <div class="tag">2019<span style="font-size:39px;font-weight:400;">“韩梨”</span><br><span style="font-size:39px;font-weight:400;">全新包装</span></div>
          <!--<span>2019</span><br />
          <span>“韩梨”全新包装</span>-->
        </div>
        <div class="story left mt-150">
          <div class="story-inner margin">
            <div class="story-img story-img-02 img-box">
                <img :src="this.pop">
            </div>
            <div class="story-intro story-intro-02">
                <div class="story-intro__txt story-intro-02__txt">
                  <div class="title">{{Positive_b}}</div>
                  <div class="content" v-html="this.Positive" ></div>
                   <div class="tag">
                     <span class="new">NEW</span>
                     <span class="tag2">启用全新包装</span>
                     <span class="tag3">2019韩梨全新包装</span>
                    </div> 
                </div>
            </div>
          </div>
        </div>

        <div class="story right mt-150">
          <div class="story-inner margin">
            <div class="story-intro story-intro-02">
                <div class="story-intro__txt story-intro-02__txt story-intro-03__txt">
                  <div class="title">{{side_b}}</div>
                  <div class="content" v-html="this.side">
                    {{this.side}}
                  </div>
                   <div class="tag">
                     <span class="new">NEW</span>
                     <span class="tag2">启用全新包装</span>
                     <span class="tag3">2019韩梨全新包装</span>
                    </div> 
                </div>
            </div>
            <div class="story-img img-box">
                <img :src="this.pop_a">
            </div>
          </div>
     </div>

        <ul class="list-btn margin">
          <li>
            <a href="https://liangpinpuzi.tmall.com/" class="mall-item">
              <img :src="this.pop_b" alt="">
            </a>
          </li>
          <li>
            <a href="https://liangpinpuzi.tmall.com/" class="mall-item">
              <img :src="this.pop_c" alt="">
            </a>
          </li>
          <li>
            <a href="https://liangpinpuzi.tmall.com/" class="mall-item">
              <img :src="this.pop_d" alt="">
            </a>
          </li>

        </ul>
  </div>
  </div>
</template>

<script>
export default {
  name: "verification",
  data() {
    return {
      Positive: '',
      Positive_b:'',
      side: '',
      side_b: '',
      pop: '',
      pop_a: '',
      pop_b: '',
      pop_c: '',
      pop_d:'',
    }
    },
    mounted() {
      //this.$axios
      //  .post('http://hlzy.api.gpscxqyw.com/api/content/getcategoryarticlelist', {
      //      "categoryid": "ac1e5571-d81f-4fc7-886c-c4ba6d7a871a",
      //      "PageIndex": 1,
      //      "PageSize": 10
      //  })
      //  .then((potop) => {
      //    console.log(potop)
      //    this.pop_b= potop.data.data.lst_categoryarticlelist[2].CoverPhoto;
      //    this.pop_c= potop.data.data.lst_categoryarticlelist[3].CoverPhoto;
      //    this.pop_d= potop.data.data.lst_categoryarticlelist[4].CoverPhoto;
      //  })
     this.$axios//包装箱正面
      .post('http://hlzy.api.gpscxqyw.com/api/content/getarticledetail', {
           "ArticleId": "7331d073-2b32-463d-990b-750ece86048b"
      })
       .then((res) => {
         this.Positive = res.data.data.Body;
         this.Positive_b = res.data.data.Title;
         this.pop = res.data.data.CoverPhoto;
       })
     this.$axios//包装箱侧面
      .post('http://hlzy.api.gpscxqyw.com/api/content/getarticledetail', {
            "ArticleId": "9a340d98-00f6-4f9c-ad8a-2297fb1d049a"
      })
       .then((res_a) => {
         this.side = res_a.data.data.Body;
         this.side_b = res_a.data.data.Title;
         this.pop_a = res_a.data.data.CoverPhoto;
       })
      this.$axios//包装2
      .post('http://hlzy.api.gpscxqyw.com/api/content/getarticledetail', {
           "ArticleId": "be643d3e-faf3-4807-80a5-73438aa2518c"
      })
       .then((res_b) => {
         this.pop_b = res_b.data.data.CoverPhoto;
       })
      this.$axios//包装3
      .post('http://hlzy.api.gpscxqyw.com/api/content/getarticledetail', {
           "ArticleId": "b840bdf1-7188-44c9-9d8e-241795f32d27"
      })
       .then((res_c) => {
         this.pop_c = res_c.data.data.CoverPhoto;
       })
      this.$axios//包装1
      .post('http://hlzy.api.gpscxqyw.com/api/content/getarticledetail', {
           "ArticleId": "3de01be2-35b4-4845-b25c-bf3927086267"
      })
       .then((res_d) => {
         this.pop_d = res_d.data.data.CoverPhoto;
       })
    }
};
</script>

<style scoped>
.container{
  overflow: hidden;
}
.verification {
  margin-bottom: 260px;
}
  /*.intro-header p::after {
    content: "";
    position: absolute;
    top: 806px;
    width: 63px;
    height: 1px;
    right: 43%;
    background-color: #00873c;
  }
   .intro-header p::before {
    content: "";
    position: absolute;
    width: 63px;
    height: 1px;
    left: 43%;
    top: 806px;
    background-color: #00873c;
  }*/
.img {
  width: 100%;
  height: auto;
  overflow: hidden;
  margin-bottom: 114px;
}
.intro-header {
  color: #00873c;
}
.intro-header h2 {
  font-size: 38px;
    line-height: 27px;
    width: 100%;
    font-weight: 600;
}
.intro-header p {
  font-size: 33px;
  margin-top: 36px;
}
.icon{
  max-width: 1400px;
  height: 552px;
  background: url(../assets/img/icon2.png) center center no-repeat;
  background-size: auto 100%;
  margin:0 auto;
  margin-top: 97px;
  margin-bottom: 179px;
  position: relative;
  cursor:pointer;
}
.icon .tag{
  font-size: 36px;
    color: #00873c;
    position: absolute;
    top: 36px;
    left: 0;
    font-weight: 600;
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
  /*content: "";
    position: absolute;
    top: 74px;
    bottom: 0;
    width: 43.75%;
    height: 80%;
    background-color: #efefef;*/
}
.story.right::before {
  right: 0px;
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
    height: 100%;
    cursor: pointer;
    transition:all 0.3s ease-out;
    -moz-transition:all 0.3s ease-out;
    -webkit-transition:all 0.3s ease-out;
    -o-transition:all 0.3s ease-out;
}
  .img-box img:hover {
    transform:scale(1.05,1.05);
  }
.story-intro-02__txt{
  position: absolute;
  top: 0;
  right: 7%;
  left: 25%;
  text-align: left;
}
.story-intro-03__txt {
  position: absolute;
  top: 0;
  left:0;
  text-align: left;
  right:33%;
}
.story-intro-02__txt .title{
  font-size: 33px;
  color: #000;
  margin-bottom: 30px;
}
.story-intro-02__txt .content{ 
  font-size: 16px;
  line-height: 30px;
  color: #9fa0a0;
  cursor:text;
}
.story-intro-02__txt .tag{
  border-top: 1px solid #ccc;
  margin-top: 25px;
  display: flex;
  display: -webkit-flex;
  justify-content: space-between;
}
.story-intro-02__txt .tag .new{
  display: inline-block;
  width: 47px;
  height: 17px;
  font-size: 13px;
  color: #fff;
  text-align: center;
  line-height: 17px;
	background-color: #00873c;
  border-radius: 8.5px;
  margin-top: 5px;
}
.story-intro-02__txt .tag .tag2,.story-intro-02__txt .tag .tag3{
  display: inline-block;
  font-size: 16px;
  color: #9fa0a0;
}
.mt-150 {
  margin-top: 150px;
  /*padding:200px;*/
}
.list-btn{
  width: 100%;
  max-width: 1400px;
  height: auto;
  overflow: hidden;
  position: relative;
  margin-top: 270px;
}
.list-btn li {
  width: 33.33%;
  float: left;
}
.mall-item {
  display: block;
  margin: 0 40px;
  position: relative;
  border-radius: 50%;
}
.mall-item::before {
  content: "";
  display: block;
  padding-top: 100%;
  border-radius: 50%;
  position: relative;
    transition:all 0.3s ease-out;
    -moz-transition:all 0.3s ease-out;
    -webkit-transition:all 0.3s ease-out;
    -o-transition:all 0.3s ease-out;
}
.mall-item img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 1px solid #00873c;
  position: absolute;
  top: 0;
  left: 0;
  transition:all 0.3s ease-out;
    -moz-transition:all 0.3s ease-out;
    -webkit-transition:all 0.3s ease-out;
    -o-transition:all 0.3s ease-out;
}
  .mall-item img:hover {
     transform:scale(0.95,0.95);
     border:none;
     /*height:90%;*/
     margin:auto
  }
@media (max-width: 1100px) {
  .verification {
    margin-bottom: 80px;
  }
  .intro-header h2 {
    font-size: 27px;
    text-align: center;
  }
  .intro-header p {
    font-size: 25px;
    text-align: center;
    margin-top: 20px;
  }
  .icon{
    margin-top: 30px;
    margin-bottom: 30px;
    height: 300px;
  }
  .icon .tag{
    font-size: 25px;
    left: 20px;
  }
  .story {
    padding: 0 20px;
  }
  .story-intro__txt p{
    font-size: 20px;
    text-align: left;
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
    margin-bottom: 20px;
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
  .img-box img {
    position: relative;
  }
  .mt-150{
    margin-top: 50px;
  }
  .list-btn{
    margin-top: 70px;
  }
}
@media (max-width: 768px) {
  .img{
    margin-bottom: 50px;
  }
  .icon .tag{
    font-size: 20px;
    margin-top: -18%;
  }
  .intro-header h2, .intro-header p p{
    font-size: 20px;
  }
  .story-intro__txt p{
    font-size: 16px;
  }
  .story-intro-02__txt .title{
    font-size: 20px;
  }
  .mall-item {
    margin:0 20px;
  }
  .intro-header[data-v-9f8abeaa] {
    color: #00873c;
    margin-bottom: 18%;
}
}
</style>
