
<template>
  <div class="container brandStory margin">
    <img src="../assets/img/bg5.png" alt="" class="img">
    <div class="wrap" id="wrap" @mouseover="fnonmouseover" @mouseout="fnonmouseout">
      <!--<ul class="content">
    <li v-for="(item, index) in imgArr" :key="item.Id">
      <img :src="item.CoverPhoto" @click="rou(index)">
    </li>
  </ul>-->
      <ul class="content">
        <li>
          <img src="http://image.jmta.milisx.com/FiL6RiMg7rwGDXIXwBecA0gMCZtg" @click="roua()">
        </li>
        <li>
          <img src="http://image.jmta.milisx.com/lqmBxrKzxsqxVX3FPn91h9H7RXEG" @click="roub()">
        </li>
        <li>
          <img src="http://image.jmta.milisx.com/ls7TusQLhovPKLngTGKlGL4pqxFF" @click="rouc()">
        </li>
        <li>
          <img src="http://image.jmta.milisx.com/lnQFGGu_p6HxyYBNvs1l9Do_GM-2" @click="roud()">
        </li>
        <li>
          <img src="http://image.jmta.milisx.com/FrcaLbWf6jEJYAkMUk0XuumXqp6Y" @click="roue()">
        </li>
        <li>
          <img src="http://image.jmta.milisx.com/FljqX72_vNbsmUluno7oLA9QP_fJ" @click="rouf()">
        </li>
      </ul>
      <a href="javascript:;" class="prev" @click="fnLeft">&#60;</a>
      <a href="javascript:;" class="next" @click="fnRight">&#62;</a>
    </div>

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
          <img :src="CoverPhoto" alt="" style="width:100%;height:100%;cursor:pointer">
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
        imgArr: [],
        size: [
          { "top": 60, "left": 0, "width": 400, "height": 240, "zIndex": 1, "opacity": 0 },
          { "top": 60, "left": 0, "width": 400, "height": 240, "zIndex": 2, "opacity": 40 },
          { "top": 30, "left": 150, "width": 500, "height": 300, "zIndex": 3, "opacity": 70 },
          { "top": 0, "left": 300, "width": 600, "height": 360, "zIndex": 4, "opacity": 100 },
          { "top": 30, "left": 550, "width": 500, "height": 300, "zIndex": 3, "opacity": 70 },
          { "top": 60, "left": 800, "width": 400, "height": 240, "zIndex": 2, "opacity": 40 },
          { "top": 60, "left": 800, "width": 400, "height": 240, "zIndex": 1, "opacity": 0 }
        ],
        title: '',
        Body: '',
        CoverPhoto:'',
        res_c: [],
        isShow: false,
        speed:3000,
        falg: true,
        timerS: '',
        ins: 0,
      };
    },
    methods: {
      roua() {
        this.$axios
                .post('http://hlzy.api.gpscxqyw.com/api/content/getarticledetail', {
                  "ArticleId": this.imgArr[0].Id
                })
                .then((data) => {
                  console.log(data)
                  this.Body = data.data.data.Body;
                  this.CoverPhoto = data.data.data.CoverPhoto;
                  this.title = data.data.data.Title;
                })
      },
      roub() {
        this.$axios
                .post('http://hlzy.api.gpscxqyw.com/api/content/getarticledetail', {
                  "ArticleId": this.imgArr[1].Id
                })
                .then((data) => {
                  console.log(data)
                  this.Body = data.data.data.Body;
                  this.CoverPhoto = data.data.data.CoverPhoto;
                  this.title = data.data.data.Title;
                })
      },
      rouc() {
        this.$axios
                .post('http://hlzy.api.gpscxqyw.com/api/content/getarticledetail', {
                  "ArticleId": this.imgArr[2].Id
                })
                .then((data) => {
                  console.log(data)
                  this.Body = data.data.data.Body;
                  this.CoverPhoto = data.data.data.CoverPhoto;
                  this.title = data.data.data.Title;
                })
      },
      roud() {
        this.$axios
                .post('http://hlzy.api.gpscxqyw.com/api/content/getarticledetail', {
                  "ArticleId": this.imgArr[3].Id
                })
                .then((data) => {
                  console.log(data)
                  this.Body = data.data.data.Body;
                  this.CoverPhoto = data.data.data.CoverPhoto;
                  this.title = data.data.data.Title;
                })
      },
      roue() {
        this.$axios
                .post('http://hlzy.api.gpscxqyw.com/api/content/getarticledetail', {
                  "ArticleId": this.imgArr[4].Id
                })
                .then((data) => {
                  console.log(data)
                  this.Body = data.data.data.Body;
                  this.CoverPhoto = data.data.data.CoverPhoto;
                  this.title = data.data.data.Title;
                })
      },
      rouf() {
        this.$axios
                .post('http://hlzy.api.gpscxqyw.com/api/content/getarticledetail', {
                  "ArticleId": this.imgArr[5].Id
                })
                .then((data) => {
                  console.log(data)
                  this.Body = data.data.data.Body;
                  this.CoverPhoto = data.data.data.CoverPhoto;
                  this.title = data.data.data.Title;
                })
      },
  
      
      ajax() {
         var param = window.location.href.split('=')[1];
          //console.log(param);
          var str = decodeURI(param);
          //console.log(str)
          this.$axios
            .post('http://hlzy.api.gpscxqyw.com/api/content/getcategoryarticlelist', {
              "categoryid": "a460675f-8a68-4bbb-b0cd-825f7578fe00",
              "PageIndex": 1,
              "PageSize": 10
            })
            .then((res_c) => {
              this.res_c = res_c.data.data.lst_categoryarticlelist;
              this.imgArr = this.res_c;
              //console.log(this.list_a)
              //console.log(this.res_c)
            })
          this.$axios
            .post('http://hlzy.api.gpscxqyw.com/api/content/getarticledetail', {
              "ArticleId": param
            })
            .then((res) => {
              this.title = res.data.data.Title;
              this.Body = res.data.data.Body;
              this.CoverPhoto = res.data.data.CoverPhoto;
              console.log(res.data.data)
            })
      },
      getStyle: function (obj, attr) {
        //console.log(obj);
        //console.log(attr);
        return obj.currentStyle ? obj.currentStyle[attr] : window.getComputedStyle(obj, null)[attr];
      },
      animate: function (obj, json, fn) {
        //console.log(json)
        //console.log(obj)
        clearInterval(obj.timer);
        var that = this;
        obj.timer = setInterval(function () {
          var bool = true;
          for (var k in json) {
            var leader;
            if (k == 'opacity') {
              if (that.getStyle(obj, k) == undefined) {
                leader = 100;
              } else {
                leader = parseInt(that.getStyle(obj, k) * 100);
              }
            } else {
              leader = parseInt(that.getStyle(obj, k)) || 0;
            }
            var step = (json[k] - leader) / 10;

            step = step > 0 ? Math.ceil(step) : Math.floor(step);
            leader = leader + step;
            if (k == 'zIndex') {
              obj.style[k] = json[k];
            } else if (k == 'opacity') {
              obj.style[k] = leader / 100;
              obj.style.filter = 'alpha(opacity=' + leader + ')';
            } else {
              obj.style[k] = leader + 'px';
            }
            if (json[k] != leader) {
              bool = false;
            }
          }
          if (bool) {
            clearInterval(obj.timer);
            if (fn) {
              fn();
            }
          }
        }, 10);
      },
      fnonmouseover() {
        this.isShow = true;
        clearInterval(this.timerS);
      },
      fnonmouseout() {
        this.isShow = false;
        var that = this;
        this.timerS = setInterval(function () {
          that.move(true);
        }, this.speed);
      },
      fnSwiper() {
        this.move();
        var that = this;
        this.timerS = setInterval(function () {
          that.move(true);
        }, this.speed)
      },
      fnLeft() {
        if (this.falg) {
          this.move(true);
        }
      },
      fnRight() {
        if (this.falg) {
          this.move(false);
        }
      },
      move: function (bool) {
        if (bool != undefined) {
          if (bool) {
            this.size.unshift(this.size.pop());
          } else {
            this.size.push(this.size.shift());
          }
        }
        var wrap = document.getElementById('wrap');
        var liArr = wrap.getElementsByTagName('li');
        console.log(liArr.length)
        var that = this;
        for (var i = 0; i < liArr.length; i++) {
          this.animate(liArr[i], this.size[i], function () {
            that.falg = true;
          });
        }
      }
    },
    mounted() {
      this.fnSwiper();
      this.ajax();
    },
     
  };
</script>
<style scoped>
   ul {
    list-style: none;
  }

  .wrap {
    position: relative;
    width: 1200px;
    height: 360px;
    margin: 100px auto;
    margin-top: -30%;
  }

  .content {
    position: absolute;
    width: 1200px;
    height: 360px;
  }

    .content li {
      position: absolute;
      background-size: 100% 100%;
      cursor: pointer;
      display: inline-grid;
    }

  .wrap a {
    position: absolute;
    z-index: 2;
    top: 50%;
    width: 60px;
    height: 60px;
    margin-top: -30px;
    font: 36px/60px "宋体";
    text-align: center;
    text-decoration: none;
    color: #fff;
    background: rgb(255, 100, 0);
    background: rgba(255, 100, 0, .2);
    transition: background 1s ease;
  }

    .wrap a:hover {
      background: rgb(255, 100, 0);
    }

  .prev {
    left: 30px;
  }

  .next {
    right: 30px;
  }

  .content li img {
    width: 100%;
    height: 100%;
  }


  .brandStory {
    margin-bottom: 5%;
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
    top: -80px;
    right: 20%;
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
