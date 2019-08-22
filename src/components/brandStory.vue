<template>
  <div class="container brandStory margin">
    <img src="../assets/img/好山好水.png" alt="" class="img">
    <div class=" story right" id="demo">
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
          <!--<img src="http://image.jmta.milisx.com/lg9SSeviQuETH4wYxVCT7dnqHhG0">-->
          <img :src="this.photo">

        </div>
      </div>
    </div>
    <div class="story left mt-150">
      <div class="story-inner margin">
        <div class="story-img-a story-img-02 img-box">
          <!--<img src="http://image.jmta.milisx.com/FktWRJzSQHttdA5M_btwodbAksap">-->
          <img :src="this.CoverPhoto">
        </div>
        <div class="story-intro-b story-intro-02">
          <div class="story-intro__txt story-intro-02__txt">
            <p v-html="this.media" style="font-size:13px;"></p>
          </div>
        </div>
      </div>
    </div>
    <div class="story right mt-150">
      <div class="story-inner margin">
        <div class="story-intro-c">
          <div class="story-intro-03__txt">
            <div class="story-dream-title">
              <p>{{this.media_b}}</p>
              <span>MEDIA FOCUS</span>
            </div>
            <div class="story-intro__txt">
              <p v-html="this.media_a" style="font-size:13px;"></p>
            </div>
          </div>
        </div>
        <div class="story-img-b img-box">
          <!--<img src="http://image.jmta.milisx.com/luFSp1cqrp689Jegq9SX5lUBtUJ0">-->
          <img :src="this.CoverPhoto_a">
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
      CoverPhoto_a: '',
      CoverPhoto: '',
      photo:'',
    };
  },
    mounted() {
         this.$axios
           .post('http://hlzy.api.gpscxqyw.com/api/content/getarticledetail', {
             "ArticleId": "35797c8b-7fee-4163-bf44-9316e6bd17b3"
           })
           .then((res_a) => {
             this.media = res_a.data.data.Body;
             this.media_c = res_a.data.data.Title;
             this.CoverPhoto = res_a.data.data.CoverPhoto;
             console.log(res_a)
           })
          this.$axios
           .post('http://hlzy.api.gpscxqyw.com/api/content/getarticledetail', {
             "ArticleId": "55c55a75-d32b-4921-8dc2-77342bca53cb"
           })
           .then((res_b) => {
             this.media_a = res_b.data.data.Body;
             this.media_b = res_b.data.data.Title;
             this.CoverPhoto_a = res_b.data.data.CoverPhoto;
             //console.log(this.media_b)
           })
          this.$axios
           .post('http://hlzy.api.gpscxqyw.com/api/content/getarticledetail', {
             "ArticleId": "3aaf2f3f-32e7-4968-b92d-54734c8385f8"
           })
            .then((res_c) => {
              this.photo = res_c.data.data.CoverPhoto;
              console.log(this.photo)
            })
      document.querySelector('#demo').scrollIntoView(true);
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
  .t-c {
      line-height: 29px;
    font-family: cursive;
    font-size: 22px;
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
  /*border:1px solid;*/
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
  /*max-width: 1400px;*/
      max-width: 95%;
    /*border: 1px solid;*/
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
  .story-intro-b {
    position: relative;
    top: 0;
    bottom: 0;
    width: 41%;
    text-align: left;
    /*border: 1px solid;*/
    float:right;
    animation:myb 8s;
	animation-iteration-count:1;
	animation-fill-mode:forwards;

	/*/* Safari 和 Chrome */
	-webkit-animation:myb 8s;
	-webkit-animation-iteration-count:1;
	-webkit-animation-fill-mode:forwards;

  }
  @keyframes myb
{
	from {right:0px;}
	to {right:100px;}
}

@-webkit-keyframes myb 
{
	from {right:0px;}
	to {right:100px;}
}
  .story-intro-c {
     position: absolute;
    top: 0;
    bottom: 0;
    width: 41%;
    text-align: left;
    /*border: 1px solid;*/
    animation:myd 9s;
	animation-iteration-count:1;
	animation-fill-mode:forwards;

	/*/* Safari 和 Chrome */
	-webkit-animation:myd 9s;
	-webkit-animation-iteration-count:1;
	-webkit-animation-fill-mode:forwards;
  }
  @keyframes myd
{
	from {left:0px;}
	to {left:100px;}
}

@-webkit-keyframes myd 
{
	from {left:0px;}
	to {left:100px;}
}
.story-intro {
  /*position: absolute;
  top: 0;
  bottom: 0;
  width: 50%;
  text-align: left;*/
  position: absolute;
    top: 0;
    bottom: 0;
    width: 41%;
    text-align: left;
    /*border: 1px solid;*/
    animation:mymove 3s;
	animation-iteration-count:1;
	animation-fill-mode:forwards;

	/*/* Safari 和 Chrome */
	-webkit-animation:mymove 3s;
	-webkit-animation-iteration-count:1;
	-webkit-animation-fill-mode:forwards;
}
@keyframes mymove
{
	from {right:0px;}
	to {right:100px;}
}

@-webkit-keyframes mymove 
{
	from {right:0px;}
	to {right:100px;}
}
.story-intro-01 {
  background: url(../assets/img/img.png) center center no-repeat;
  background-size: 76% auto;
      /*border: 1px solid;*/
    width: 39%;
    animation:mymove 3s;
	animation-iteration-count:1;
	animation-fill-mode:forwards;

	/*/* Safari 和 Chrome */
	-webkit-animation:mymove 3s;
	-webkit-animation-iteration-count:1;
	-webkit-animation-fill-mode:forwards;
}
@keyframes mymove
{
	from {left:0px;}
	to {left:100px;}
}

@-webkit-keyframes mymove 
{
	from {left:0px;}
	to {left:100px;}
}
.intro-header {
  color: #00873c;
}
.intro-header h2 {
    font-size: 37px;
    line-height: 27px;
    width: 100%;
    position: relative;
    font-weight: 600;
     animation:myn 5s;
	animation-iteration-count:1;
	animation-fill-mode:forwards;
	-webkit-animation:myn 5s;
	-webkit-animation-iteration-count:1;
	-webkit-animation-fill-mode:forwards;
}
@keyframes myn
{
	from {left:-100px;}
	to {left:0px;}
}

@-webkit-keyframes myn 
{
	from {left:-100px;}
	to {left:0px;}
}
.intro-header p {
  font-size: 33px;
  margin-top: 36px;
   position: relative;
     animation:myn 6s;
	animation-iteration-count:1;
	animation-fill-mode:forwards;
	-webkit-animation:myn 6s;
	-webkit-animation-iteration-count:1;
	-webkit-animation-fill-mode:forwards;
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
  .story-img-a {
    display: inline-block;
  vertical-align: top;
  width: 43%;
  position: relative;
   animation:myy 3s;
	animation-iteration-count:1;
	animation-fill-mode:forwards;

	/*/* Safari 和 Chrome */
	-webkit-animation:myy 3s;
	-webkit-animation-iteration-count:1;
	-webkit-animation-fill-mode:forwards;
  }
  @keyframes myy
{
	from {left:0px;}
	to {left:100px;}
}

@-webkit-keyframes myy
{
	from {left:0px;}
	to {left:100px;}
}
  .story-img-b {
    display: inline-block;
  vertical-align: top;
  width: 43%;
  position: relative;
   animation:myc 10s;
	animation-iteration-count:1;
	animation-fill-mode:forwards;

	/*/* Safari 和 Chrome */
	-webkit-animation:myc 10s;
	-webkit-animation-iteration-count:1;
	-webkit-animation-fill-mode:forwards;
  }
  @keyframes myc
{
	from {right:0px;}
	to {right:100px;}
}

@-webkit-keyframes myc 
{
	from {right:0px;}
	to {right:100px;}
}
.story-img {
  display: inline-block;
  vertical-align: top;
  width: 43%;
  position: relative;
   animation:my 3s;
	animation-iteration-count:1;
	animation-fill-mode:forwards;

	/*/* Safari 和 Chrome */
	-webkit-animation:my 3s;
	-webkit-animation-iteration-count:1;
	-webkit-animation-fill-mode:forwards;
}
@keyframes my
{
	from {right:0px;}
	to {right:100px;}
}

@-webkit-keyframes my 
{
	from {right:0px;}
	to {right:100px;}
}
.img-box::before {
  content: "";
  display: block;
}
.story-img::before {
  padding-top: 66.57143%;
}
.story-img-a::before {
  padding-top: 66.57143%;
}
  .story-img-b::before {
    padding-top:66.57143%;
  }
.img-box img {
  right: 0;
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
  .img-box img {
      transition:all 0.3s ease-out;
    -moz-transition:all 0.3s ease-out;
    -webkit-transition:all 0.3s ease-out;
    -o-transition:all 0.3s ease-out;
  }
    .img-box img:hover {
    transform:scale(1.05,1.05);
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
  left: 21%;
  text-align: left;
}
/* 第三层 */
.story-intro-03__txt {
  width: 82%;
  position: absolute;
  top: 0;
  left:0;
  text-align: left;
   margin-top: -11%;
}
.story-dream-title p {
  position: absolute;
  top: 0;
  left: 0;
  font-size: 30px;
  color:#00873C;
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
