<template>
  <div class="container description margin">
    <img src="../assets/img/bg2.png" alt="" class="img">
    <div class="container main margin">
      <div class="about-company">
        <div class="company-left">
          <div class="intro-header company-intro-header">
              <h2 class="intro-header-line">COMPANY PROFIL</h2>
              <p>品牌介绍</p>
          </div>
          <div class="intro-body" >
            <p v-html="this.company" style="cursor:text"></p>
          </div>
        </div>
        <div class="company-right">
            <div class="company-photo img-boxa" style="cursor:pointer">
                <!-- 图片尺寸 692*484 -->
                <img src="http://image.jmta.milisx.com/lg9SSeviQuETH4wYxVCT7dnqHhG0">
            </div>
        </div>
      </div>
      <div class="about-history">
        <div class="intro-header">
          <h2>PHYSICAL STORE</h2>
          <p>品牌历程</p>
        </div>
        <div class="swiper_">
          <swiper :options="swiperOption" class='swiper-box'>
            <swiper-slide v-for="(item, index) in swipers" :key="index">
              <div class="history-item" v-bind:class="{'active': index == swiperIndex && isShow}" @click="toggle(index)">
                <div class="history-item__wrap">
                  <h3 class="history-item__year" v-bind:class="{'active': index == swiperIndex && isShow}">{{item.CreateTime}}</h3>
                  <div class="history-item__img img-box" id="img">
                    <img :src="item.CoverPhoto" style="cursor:pointer">
                  </div>
                  <div class="history-item__desc" v-bind:class="{'active': index == swiperIndex && isShow}">
                    <p class="cursor">{{item.Abstract}}</p>
                  </div>
                  <div class="t-r">
                    <div class="more">
                      <a v-bind:class="{'active': index == swiperIndex && isShow}"></a>
                    </div>
                  </div>
                </div>
                <i class="history-item__circle" v-bind:class="{'active': index == swiperIndex && isShow}"></i>
                <i class="history-item__arrow icon-right"></i>
              </div>
            </swiper-slide>
          </swiper>
          <div class="swiper-button-prev" style="top:176px"></div>
          <div class="swiper-button-next"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: "description",
    data() {
      return {
        swiperOption: {
          slidesPerView: 4,
          spaceBetween: 0,
          slidesPerGroup: 4,
          stopOnLastSlide: true,
          //centeredSlides : true,
          loop: true,
          loopFillGroupWithBlank: true,
          loopAdditionalSlides:2,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            hideOnClick: false,
          },
        },
        swipers: [],
        company: '',
        swiperIndex: '',
        isShow: false,
      };
    },
    methods: {
      ajax() {
        this.$axios
          .post('http://hlzy.api.gpscxqyw.com/api/content/getarticledetail', {
            "ArticleId": "69a894ea-0502-40f2-96e0-3cb9a6028628"
          })
          .then((res) => {
            this.company = res.data.data.Body;
          })
      },
      toggle(index) {
        this.swiperIndex = index;
        this.isShow = !this.isShow;
      },
      shuju() {
        this.$axios
          .post('http://hlzy.api.gpscxqyw.com/api/content/getcategoryarticlelist', {
            "categoryid": "96aeb5cd-8712-4999-a029-e08479ef3b1b",
            "PageIndex": 1,
            "PageSize": 10
          })
          .then((res_a) => {
            console.log(res_a)
            this.swipers = res_a.data.data.lst_categoryarticlelist;
            
          })
       }
    },
    mounted() {
      this.ajax();
      this.shuju();
      setTimeout(() =>{
         this.swiperOption;
        },1000);
    }
  }
</script>

<style scoped>
  .more{
            width: 12px;
            height: 12px;
            cursor: pointer;
			float:right;
            -webkit-transition: all .7s ease-in-out;
            -o-transition: all .7s ease-in-out;
            transition: all .7s ease-in-out;
			margin-top:14px;
        }
        .more a{
            display: block;
            width: 12px;
            height: 12px;
            background: url(http://www.youth.cn/images/20170829icon_all.png) no-repeat -10px -11px;
        }
        .more a:hover{
            background: url(http://www.youth.cn/images/20170829icon_all.png) no-repeat -26px -11px;
        }
        .more:hover{
            transform:rotate(270deg);
            -ms-transform:rotate(270deg); 	/* IE 9 */
            -moz-transform:rotate(270deg); 	/* Firefox */
            -webkit-transform:rotate(270deg); /* Safari 和 Chrome */
            -o-transform:rotate(270deg);
        }
        .more >a.active{
            display: block;
            width: 18px;
            height: 18px;
            background: none;
            border-bottom: 2px solid #00873C;
            /* border-top: 2px solid #00873C; */
            margin-left: -5px;
            transform: rotate(180deg);
            -ms-transform: rotate(180deg);
            -moz-transform: rotate(180deg);
            -webkit-transform: rotate(180deg);
        }
.description {
  margin-bottom: 6%;
}
  .cursor {
    cursor:pointer;
  }
  #img {
   height:160px;
  }
.img {
  width: 100%;
  height: auto;
  overflow: hidden;
  margin-bottom: 114px;
}

.main {
  max-width: 1400px;
}
.about-company {
  position: relative;
  z-index: 1;
  font-size: 0;
}
.company-left,
.company-right {
  display: inline-block;
  vertical-align: top;
}
.company-left {
  width: 40%;
  margin-top: 50px;
}
.company-right {
  width: 60%;
  text-align: right;
  position: relative;
}
.intro-header {
  color: #00873c;
}
.intro-header h2 {
  font-size: 37px;
  width: 100%;
  position: relative;
  font-weight:bolder;
}
.intro-header-line::after {
  content: "";
  position: absolute;
  top: 50%;
  right: 0;
  width: 180px;
  height: 1px;
  background-color: #00873c;
}
.intro-header p {
  font-size: 33px;
  margin-top: 40px;
}
.intro-body {
  font-size: 13px;
  line-height: 28px;
  color: #333;
  margin-top: 65px;
}
.about-company::after {
  content: "";
  position: absolute;
  z-index: -1;
  top: 0;
  right: 0;
  bottom: 0;
  width: 68%;
  background-color: #f7f7f7;
}
.company-photo {
  width: 100%;
  max-width: 692px;
}
  .company-photo img {
    transition:all 0.3s ease-out;
    -moz-transition:all 0.3s ease-out;
    -webkit-transition:all 0.3s ease-out;
    -o-transition:all 0.3s ease-out;
  }
  .company-photo img:hover {
    transform:scale(1.05,1.05);
  }
  .img-box {
    display: block;
    margin: 0 0;
    /*position: relative;*/
  }
       .img-box::before {
            content: "";
            display: block;
            padding-top: 0%;
            border: 1px solid #00873c;
            border-radius: 0;
            height: 160px;
            width: 248px;
            position: absolute;

    }
    .img-box:hover::before {
       background: #00873c url(../assets/img/33.png) center center no-repeat;
        background-size: 100% 100%;
        z-index: 3;
        cursor:pointer;
    }
.img-box img {
  right: 0;
  position: absolute;
  top: 0;
  max-width: 692px;
}
.img-boxa img {
  right: 0;
  /*position: absolute;*/
  top: 0;
  max-width: 692px;
  margin-left:21%;
}
.company-photo::before {
  padding-top: 69.9422%;
}
.img-box::before {
  content: "";
  display: block;
}
.slick-slider {
  position: relative;
  display: block;
  box-sizing: border-box;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-touch-callout: none;
  -khtml-user-select: none;
  -ms-touch-action: pan-y;
  touch-action: pan-y;
  -webkit-tap-highlight-color: transparent;
}
.about-history {
  margin-top: 110px;
}
.swiper_ {
  width: 100%;
  height: auto;
  overflow: hidden;
  position: relative;
  margin-top: 95px;
  padding: 0 20px;
}
.swiper-box img {
  position: relative;
  max-width: none;
  width: 100%;
  height: 100%;
  /*top:-160px;*/
}
.swiper-slide {
  height: auto;
}
.swiper-button-next,
.swiper-button-prev {
  width: 30px;
  height: 30px;
  background-image: none;
  margin-top: -18px;
  margin-left:-11px;
  /*border:1px solid;*/
}
.swiper-button-next{
  right: 0;
}
.swiper-button-next:after, .swiper-button-next:before ,.swiper-button-prev:after, .swiper-button-prev:before {
  display: block;
  content: '';
  width: 25px;
  height: 2px;
  background: #00873C;
  position: absolute;
  left: 0;
  top:72%;
  opacity:0.5
}
  .swiper-button-next:hover:before,.swiper-button-next:hover:after,.swiper-button-prev:hover:after,.swiper-button-prev:hover:before {
    background: #00873C;
    opacity:1;
  }
.swiper-button-next:after, .swiper-button-next:before{
  left: initial;
  right: 0;
}
.swiper-button-next:before {
   transform: rotate(315deg);
}
.swiper-button-next:after {
  transform: rotate(-135deg);
  top:5px;
}
.swiper-button-prev:before {
  transform: rotate(45deg);
}
.swiper-button-prev:after {
  transform: rotate(135deg);
  top:5px;
} 
.history-item {
  position: relative;
  padding-left: 28px;
  padding-bottom: 52px;
  margin-bottom: 20px;
}
 .history-item.active::before {
    top: 120px;
  left: 12px;
  bottom: 32px;
  width: 1px;
  }
.history-item.active::before
 {
    content: "";
    position: absolute;
    background-color: #00873C;
}
  .history-item.active::after {
    background-color:white;
  }
.history-item::before,
.history-item::after {
  content: "";
  position: absolute;
  background-color: #b2b2b2;
}
.history-item::before {
  top: 7px;
  left: 12px;
  bottom: 32px;
  width: 1px;
}
.history-item::after {
  right: 8px;
  bottom: 11px;
  left: 32px;
  height: 1px;
  -webkit-transform-origin: 0 0;
  transform-origin: 0 0;
}
.history-item__wrap {
  max-width: 248px;
  margin-right: 10px;
}
.history-item__year {
     position: relative;
    margin-bottom: 0.8em;
    font: 700 27px/1 "AvenirLTStd";
    color: #b2b2b2;
}
  .history-item__year.active {
    color:#00873C;
  }
    .history-item__year.active::before {
      background-color:#00873C;
      top:11px;
    }
.history-item__year::before {
    content: "";
    position: absolute;
    top: 0;
    left: -20.1px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #b2b2b2;
}
.history-item__desc {
  margin-bottom: 0.5em;
  height: 48px;
  min-height: 48px;
  overflow: hidden;
  font-size: 14px;
  line-height: 24px;
  color: gray;
  margin-top:13px;
}
.history-item__desc.active{
  /*height: auto;*/
  height: auto;
  overflow: auto;
}
.history-item__desc_a {
  margin-bottom: 0.5em;
  height: 48px;
  min-height: 48px;
  font-size: 14px;
  line-height: 24px;
  color: gray;
  display:none;
}
.history-item__plus {
  position: relative;
  display: inline-block;
  vertical-align: top;
  width: 15px;
  height: 15px;
}

.history-item__plus::before,
.history-item__plus::after {
  content: "";
  position: absolute;
  background-color: #a0a0a0;
}
.history-item__plus::before {
  top: 0;
  bottom: 0;
  left: 7px;
  width: 1px;
}
.history-item__plus::after {
  top: 7px;
  right: 0;
  left: 0;
  height: 1px;
}
.history-item__circle {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: #00873C;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: 60% auto;
}
  .history-item__circle.active {
    border: 6.5px solid #00873C;
    background-color: white;
    margin-left: 3.05px;
    width: 20px;
    height: 20px;
    top: auto;
  }
.history-item__arrow {
  display: none;
  position: absolute;
  bottom: -1px;
  right: -8px;
  width: 24px;
  height: 24px;
  font-size: 20px;
  line-height: 24px;
  text-align: right;
}
@media (max-width: 1400px) {
  .main {
    padding: 0 15px;
  }
}
@media (max-width: 1100px) {
  .company-left {
    width: 100%;
    padding-right: 0;
  }
  .company-right {
    width: 100%;
    max-width: 820px;
  }
  .about-company::after {
    display: none;
  }
  .img{
    margin-bottom: 0;
  }
  .intro-header h2{
    font-size: 27px;
  }
  .intro-header p{
    font-size: 25px;
    margin-top: 25px;
  }
  .intro-body{
    font-size: 16px;
  }
  .about-history{
    margin-top: 50px;
  }
  .swiper_{
    margin-top: 40px;
  }
  .description{
    margin-bottom: 100px;
  }
  .img-box img{
    width: 100%;
  }
}

  @media (max-width: 414px) {
    .history-item__year{
        position: relative;
        margin-bottom: 0.5em;
        font: 500 14px/1 "AvenirLTStd";
        color: #b2b2b2;
    }
    .history-item__desc{
        margin-bottom: 0.5em;
        height: 48px;
        min-height: 48px;
        overflow: hidden;
        font-size: 10px;
        line-height: 16px;
        color: gray;
    }
      #img {
       height:100px;
      }
  }
   @media (max-width: 375px) {
    .history-item__year{
        position: relative;
        margin-bottom: 0.5em;
        font: 500 14px/1 "AvenirLTStd";
        color: #b2b2b2;
    }
    .history-item__desc{
        margin-bottom: 0.5em;
        height: 48px;
        min-height: 48px;
        overflow: hidden;
        font-size: 10px;
        line-height: 16px;
        color: gray;
    }
      #img {
       height:78px;
      }
  }
</style>
