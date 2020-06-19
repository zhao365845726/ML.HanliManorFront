<template>
  <div class="container description margin">
    <!--<img src="http://image.hanjiazhuang.cn/%E5%85%B3%E4%BA%8E%E6%88%91%E4%BB%AC.png" alt="" class="img">-->
    <img v-for="img in imga" v-lazy="img" alt="" class="img">
    <div class="container main margin" id="demo">
      <div class="about-company">
        <div class="company-left">
          <div class="intro-header company-intro-header">
            <h2 class="intro-header-line">COMPANY PROFIL</h2>
            <p>品牌介绍</p>
          </div>
          <div class="intro-body">
            <p v-html="this.company" style="cursor:text"></p>
          </div>
        </div>
        <div class="company-right">
          <div class="company-photo">
            <!-- 图片尺寸 692*484 -->
            <img v-lazy="this.photo">
          </div>
        </div>
      </div>
      <div class="about-history">
        <div class="intro-header">
          <h2 class="h2">PHYSICAL STORE</h2>
          <p>品牌历程</p>
        </div>
        <div class="swiper_">
          <swiper :options="swiperOption" class='swiper-box' v-if="swipers.length">
            <swiper-slide v-for="(item, index) in swipers" :key="index" class="list_">
              <div class="history-item" :id="index">
                <div class="history-item__wrap">
                  <h3 class="history-item__year">{{item.CreateTime}}</h3>
                  <div class="history-item__img img-box">
                    <!--<img v-lazy="item.CoverPhoto" style="cursor:pointer">-->
                    <img :src="item.CoverPhoto" style="cursor:pointer">
                  </div>
                  <div class="history-item__desc">
                    <p class="cursor">{{item.Abstract}}</p>
                  </div>
                  <div class="t-r">
                    <div class="more">
                      <a></a>
                    </div>
                  </div>
                </div>
                <i class="history-item__circle"></i>
                <i class="history-item__arrow icon-right"></i>
              </div>
            </swiper-slide>
          </swiper>
          <div class="swiper-button-prev" style="top:176px"></div>
          <div class="swiper-button-next" style="top:176px"></div>
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
        imga: [
          'http://image.hanjiazhuang.cn/%E5%85%B3%E4%BA%8E%E6%88%91%E4%BB%AC.png'
        ],
        swiperOption: {
          slidesPerView: 4,
          spaceBetween: 0,
          slidesPerGroup: 6,
          stopOnLastSlide: true,
          //centeredSlides : true,
          loop: true,
          ////loopFillGroupWithBlank: true,
          loopAdditionalSlides:0,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            hideOnClick: false,
          },
          initialSlide: 0,
          observer:true,
          observeParents:true,
          on: {
            click: function (e) {
              //alert(this.clickedIndex);
              var parent = document.getElementsByClassName("swiper-wrapper")[0].getElementsByClassName('list_');
              var el = parent[this.clickedIndex].getElementsByClassName("history-item__desc")[0];
              var ml = parent[this.clickedIndex].getElementsByClassName("history-item__circle")[0];
              var nl = parent[this.clickedIndex].getElementsByClassName("history-item__year")[0];
              if (el.classList.contains('active1')) {
                el.classList.remove("active1");
              } else {
                for (var i = 0; i < parent.length; i++) {
                  var list_ = parent[i].getElementsByClassName("history-item__desc")[0];
                  list_.classList.remove("active1");
                  el.classList.add("active1");
                }
              }

                if (ml.classList.contains('active2')) {
                ml.classList.remove("active2");
              } else {
                for (var i = 0; i < parent.length; i++) {
                  var list_ = parent[i].getElementsByClassName("history-item__circle")[0];
                  list_.classList.remove("active2");
                  ml.classList.add("active2");
                }
             }

            if (nl.classList.contains('active')) {
                nl.classList.remove("active");
              } else {
                for (var i = 0; i < parent.length; i++) {
                  var list_ = parent[i].getElementsByClassName("history-item__year")[0];
                  list_.classList.remove("active");
                  nl.classList.add("active");
                }
            }

            },
            
          }
        },
        swipers: [],
        company: '',
        photo:'',
      };
    },
    methods: {    
      ajax() {
        this.$axios
          .post('http://api.hanjiazhuang.cn/api/content/getarticledetail', {
            "ArticleId": "69a894ea-0502-40f2-96e0-3cb9a6028628"
          })
          .then((res) => {
            console.log(res)
            this.company = res.data.data.Body;
            this.photo = res.data.data.CoverPhoto;
          })
      },
      shuju() {
        this.$axios
          .post('http://api.hanjiazhuang.cn/api/content/getcategoryarticlelist', {
            "categoryid": "96aeb5cd-8712-4999-a029-e08479ef3b1b",
            "PageIndex": 1,
            "PageSize": 10
          })
          .then((res_a) => {
            console.log(res_a)
            this.swipers = res_a.data.data.lst_categoryarticlelist;
            
          })
      },
     
    },
    mounted() {
      this.ajax();
      this.shuju();
      if (window.innerWidth === 375 || window.innerWidth===414) {
        this.swiperOption.slidesPerView = 1;
      } else {
        this.swiperOption.slidesPerView = 4;
      }
      document.querySelector('#demo').scrollIntoView(true);
    }
  }
</script>

<style scoped>
  .company-photo {
  max-width: 692px;
   overflow: hidden;
  cursor:pointer;
}
  .company-photo img {
     transition: all 0.3s ease;
     width:100%;
     height:100%;
  }
  .company-photo img:hover {
    transform: scale(1.2);
  }
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
    cursor:context-menu;
  }
  /*#img {
   height:160px;
  }*/
.img {
  width: 100%;
  height: auto;
  overflow: hidden;
  margin-bottom: 114px;
}

.main {
  /*max-width: 1400px;*/
  max-width:100%;
}
.about-company {
  /*position: relative;
  z-index: 1;
  font-size: 0;*/
      position: relative;
    z-index: 1;
    font-size: 0;
    width: 95%;
    margin: auto;
}
.company-left,
.company-right {
  display: inline-block;
  vertical-align: top;
}
.company-left {
  width: 31%;
  margin-top: 50px;
  position:relative;
  animation:mymove 2s;
	animation-iteration-count:1;
	animation-fill-mode:forwards;

	/*/* Safari 和 Chrome */
	-webkit-animation:mymove 2s;
	-webkit-animation-iteration-count:1;
	-webkit-animation-fill-mode:forwards;
}
@keyframes mymove
{
	from {left:0px;}
	to {left:11.1%;}
}

@-webkit-keyframes mymove 
{
	from {left:0px;}
	to {left:11.1%;}
}
.company-right {
  /*width: 60%;
  text-align: right;
  position: relative;*/
    width: 37%;
    text-align: right;
    position: relative;
    float: right;
     animation:my 2s;
	animation-iteration-count:1;
	animation-fill-mode:forwards;

	/*/* Safari 和 Chrome */
	-webkit-animation:my 2s;
	-webkit-animation-iteration-count:1;
	-webkit-animation-fill-mode:forwards;
}
@keyframes my
{
	from {right:0px;}
	to {right:11.1%;}
}

@-webkit-keyframes my 
{
	from {right:0px;}
	to {right:11.1%;}
}
.intro-header {
  color: #00873c;
}
.intro-header h2 {
  font-size: 37px;
  width: 100%;
  position: relative;
  font-weight:bolder;
     animation:mya 2.5s;
	animation-iteration-count:1;
	animation-fill-mode:forwards;

	/*/* Safari 和 Chrome */
	-webkit-animation:mya 2.5s;
	-webkit-animation-iteration-count:1;
	-webkit-animation-fill-mode:forwards;
}
  .h2 {
    font-size: 37px;
  width: 100%;
  position: relative;
  font-weight:bolder;
     animation:mya 2.5s;
	animation-iteration-count:1;
	animation-fill-mode:forwards;

	/*/* Safari 和 Chrome */
	-webkit-animation:mya 2.5s;
	-webkit-animation-iteration-count:1;
	-webkit-animation-fill-mode:forwards;
  }
@keyframes mya
{
	from {left:-100px;}
	to {left:0px;}
}

@-webkit-keyframes mya 
{
	from {left:-100px;}
	to {left:0px;}
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
  position: relative;
  animation:mya 3s;
	animation-iteration-count:1;
	animation-fill-mode:forwards;

	/*/* Safari 和 Chrome */
	-webkit-animation:mya 3s;
	-webkit-animation-iteration-count:1;
	-webkit-animation-fill-mode:forwards;
}
.intro-body {
  font-size: 13px;
  line-height: 28px;
  color: #333;
  margin-top: 65px;
   position: relative;
  animation:a 2.5s;
	animation-iteration-count:1;
	animation-fill-mode:forwards;
	-webkit-animation:a 2.5s;
	-webkit-animation-iteration-count:1;
	-webkit-animation-fill-mode:forwards;
}
@keyframes a
{
	from {top:100px;}
	to {top:0px;}
}

@-webkit-keyframes a 
{
	from {top:100px;}
	to {top:0px;}
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

  .img-box {
    display: block;
    margin: 0 0;
    height:160px;
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
       background: #00873c url(http://image.hanjiazhuang.cn/33.png) center center no-repeat;
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
/*.img-boxa img {
  right: 0;
  top: 0;
  max-width: 692px;
  margin-left:21%;
}*/
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
      margin-top: 110px;
    width: 74%;
    margin-left: 13%;
    margin-right: 10%;
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
.history-item__desc.active1{
  /*height: auto;*/
  height: auto;
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
  .history-item__circle.active2 {
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
@media (max-width: 1436px) {
  .company-photo{
    margin-top: 78px;
}
  .main {
    padding: 0 15px;
  }
}
@media (max-width: 1100px) {
  .company-left {
    width: 86%;
    padding-right: 0;
  }
  .company-right {
    width: 100%;
    max-width: 820px;
  }
  .company-photo{
    margin-left: 12%;
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
    float:left;
  }
  .img-box::before {
    width: 80%;
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

 
  @media(max-width:1024px) {
    @keyframes mymove
    {
	    from {left:0px;}
	    to {left:3%;}
    }

    @-webkit-keyframes mymove 
    {
	    from {left:0px;}
	    to {left:3%;}
    }
    .about-history{
    width: 84%;
    margin-left: 7%;
    margin-right: 10%;
    }
    .h2 {
   /*border: 1px solid;*/
    height: 39px;
  }
    .img-box::before {
    width: 81%;
}
     .history-item__desc.active1 {
    height: 147px;
    overflow: auto;
    }
}

   @media(max-width:768px) {
     @keyframes my
      {
	      from {right:0px;}
	      to {right:20%;}
      }

      @-webkit-keyframes my 
      {
	      from {right:0px;}
	      to {right:20%;}
      }
      .company-right{
    width: 80%;
}
      .h2 {
    /*border: 1px solid;*/
    height: 37px;
  }
    .about-history{
    width: 93%;
    margin-left: 5%;
    margin-right: 10%;
    }
   .img-box::before {
    width: 76%;
  }
  .history-item__year {
    font: 700 21px/1 "AvenirLTStd";
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
      .img-box::before {
            width: 78.5%;
        }
      

  }
  @media(max-width:375px) {
     .company-photo{
        max-width: 692px;
        height: 142px;
        overflow: hidden;
        margin-left: 19%;
        margin-top:0px;
        cursor: pointer;
    }
    .company-photo img {
    -webkit-transition: all 0.3s ease;
    transition: all 0.3s ease;
    width: 100%;
    height: 100%;
    }
    .img-box::before {
          width: 86.5%;
      }
  }
  
</style>
