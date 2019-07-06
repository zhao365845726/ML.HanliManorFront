<template>
  <div class="container brandStory margin">
    <img src="../assets/img/bg3.png" alt="" class="img">
    <div class="container story right">
      <div class="story-inner margin">
          <div class="story-intro story-intro-01">
              <div class="intro-header">
                  <h2>MEDIA FOCUS LLXVMDKDF</h2>
                  <p>品牌故事</p>
              </div>
              <div class="story-intro-01__txt">
                  <div>
                      <p class="t-c">守护本来的味道<br>韩家庄人民欢迎您</p>
                  </div>
              </div>
          </div>
          <div class="story-img img-box">
              <img src="../assets/img/about_company.jpg" alt="">
          </div>
      </div>
    </div>

    <div class="story left mt-150">
      <div class="story-inner margin">
        <div class="story-img story-img-02 img-box">
            <img src="../assets/img/about_company.jpg" alt="">
        </div>
        <div class="story-intro story-intro-02">
            <div class="story-intro__txt story-intro-02__txt">
                <p>2005年，杨红春从科龙电器离开后，就加入了久久丫，向顾青和梁新科学习作为职业经理人如何向创业者转型。用了将近一年的时间，与大学同学张国强一道，拜访了100多家，走遍了武汉的大街小巷，编写了三版商业计划书。他认为当时的市场中存在“两个基础，一对矛盾”的客观机遇：一是消费者需求升级的基础，顾客需要更有品质更能享受生活的零食；二是中国农业产业化，在全国各地富有特色的基础已经初具规模；一对矛盾是消费者不断升级、追求品质的需求和以大卖场为主导的全而泛，不具专业化品质的提供模式之间的矛盾；这两个基础和一对矛盾是良品铺子作为休闲食品细分品类专业化、零售连锁品牌化经营的土壤。</p>
                <p>2006年，准备了60多种产品，良品铺子的创始人们于8月28日，在武汉广场对面开了第一家门店。</p>
            </div>
        </div>
      </div>
    </div>

    <div class="story right mt-150">
      <div class="story-inner margin">
        <div class="story-intro">
            <div class="story-intro-03__txt">
                <div class="story-dream-title">
                    <p>品牌名称的由来</p>
                    <span>MEDIA FOCUS</span>
                </div>
                <div class="story-intro__txt">
                    <p>“良品铺子”是从300多个名字中挑选出来的，这是基于创业团队对休闲食品零售连锁服务这件事的根本认识而决定的。</p>
                    <p>2006年4月，杨红春和张国强动员了所有能联系上的朋友、老同事和同学，让大家献计献策给他们的事业取名，一周的时间收集了300多个名字，后来决定选择良品铺子四个字去注册。因为，既然是做食品的，就要凭良心来做吃的，食品安全最重要；休闲食品通俗讲就是零食，吃零食最重要的不是便宜和多，而是吃得好，吃得乐，吃得有品味来享受生活，品质上讲究是这件事的精要；“铺子”是中国最原始的商业形态，是最让消费者感到亲切、自然、轻松的地方。同时“良品铺子”四个字也代表了创业团队对这项事业的认知，即使销售规模再大，永远只是个“为大家提供服务的小地方”的这种小生意模式。</p>
                </div>
            </div>
        </div>
        <div class="story-img img-box">
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
    return {};
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
