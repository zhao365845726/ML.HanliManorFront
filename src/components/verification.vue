<template>
  <div class="container verification margin">
    <img src="../assets/img/bg3.png" alt="" class="img"> 
    <div class="container main margin">
        <div class="intro-header">
          <h2 class="t-c">MEDIA FOCUS</h2>
          <p class="t-c">产品验证</p>
        </div>
        <div class="icon">
          <div class="tag">2019“韩梨”<br>全新包装</div>
        </div>
        <div class="story left mt-150">
          <div class="story-inner margin">
            <div class="story-img story-img-02 img-box">
                <img src="../assets/img/about_company.jpg" alt="">
            </div>
            <div class="story-intro story-intro-02">
                <div class="story-intro__txt story-intro-02__txt">
                  <div class="title">包装箱正面</div>
                  <div class="content">
                     山西晋城高平市野川镇韩家庄村民委员会山西晋城高平市野川镇韩家庄村民委员会山西晋城高平市野川镇韩家庄村民委员会山西晋城高平市野川<br>
                     镇韩家庄村民委员会山西晋城高平市野川镇韩家庄村民委员会山西晋城高平市野川镇韩家庄村民委员会山西晋城高平市野川镇韩市野川
                  </div>
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
                  <div class="title">包装箱正面</div>
                  <div class="content">
                     山西晋城高平市野川镇韩家庄村民委员会山西晋城高平市野川镇韩家庄村民委员会山西晋城高平市野川镇韩家庄村民委员会山西晋城高平市野川<br>
                     镇韩家庄村民委员会山西晋城高平市野川镇韩家庄村民委员会山西晋城高平市野川镇韩家庄村民委员会山西晋城高平市野川镇韩市野川
                  </div>
                   <div class="tag">
                     <span class="new">NEW</span>
                     <span class="tag2">启用全新包装</span>
                     <span class="tag3">2019韩梨全新包装</span>
                    </div> 
                </div>
            </div>
            <div class="story-img img-box">
                <img src="../assets/img/about_company.jpg" alt="">
            </div>
          </div>
     </div>

     <ul class="list-btn margin">
      <li>
        <a href="https://liangpinpuzi.tmall.com/" class="mall-item">
            <img src="../assets/img/about_company.jpg" alt="">
        </a>
      </li>
      <li>
        <a href="https://liangpinpuzi.tmall.com/" class="mall-item">
            <img src="../assets/img/about_company.jpg" alt="">
        </a>
      </li>
      <li>
        <a href="https://liangpinpuzi.tmall.com/" class="mall-item">
            <img src="../assets/img/about_company.jpg" alt="">
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
    }
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
.img {
  width: 100%;
  height: auto;
  overflow: hidden;
  margin-bottom: 80px;
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
.icon{
  max-width: 1400px;
  height: 552px;
  background: url(../assets/img/icon2.png) center center no-repeat;
  background-size: auto 100%;
  margin:0 auto;
  margin-top: 97px;
  margin-bottom: 179px;
  position: relative;
}
.icon .tag{
  font-size: 41px;
  color: #00873c;
  position: absolute;
  top:36px;
  left:0;
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
}
.story-intro-02__txt{
  position: absolute;
  top: 0;
  right: 7%;
  left: 7%;
  text-align: left;
}
.story-intro-03__txt {
  position: absolute;
  top: 0;
  left:0;
  text-align: left;
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
  margin-top: 8px;
}
.story-intro-02__txt .tag .tag2,.story-intro-02__txt .tag .tag3{
  display: inline-block;
  font-size: 16px;
  color: #9fa0a0;
}
.mt-150 {
  margin-top: 150px;
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
}
.mall-item img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 1px solid #00873c;
  position: absolute;
  top: 0;
  left: 0;
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
}
</style>
