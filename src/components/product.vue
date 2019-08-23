
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
          <img src="../assets/img/m6.jpg" @click="roua()"><!--苹果-->
        </li>
        <li>
          <img src="../assets/img/m5.jpg" @click="roub()"><!--桃子-->
        </li>
        <li>
          <img src="../assets/img/m2.jpg" @click="rouc()"><!--李子-->
        </li>
        <li>
          <img src="../assets/img/m7.jpg" @click="roud()"><!--梨-->
        </li>
        <li>
          <img src="../assets/img/m1.jpg" @click="roue()"><!--西梅-->
        </li>
        <li>
          <img src="../assets/img/m4.jpg" @click="rouf()"><!--油杏-->
        </li>
        <li>
          <img src="../assets/img/m3.jpg" @click="roug()"><!--梨-->
        </li>
      </ul>
      <a href="javascript:;" class="prev" @click="fnLeft">&#60;</a>
      <a href="javascript:;" class="next" @click="fnRight">&#62;</a>
    </div>

    <div class="story right mt-80" id="demo">
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
        //imgArr: [],
        size: [
          { "top": 10, "left": -47, "width": 173, "height": 530, "zIndex": 1, "opacity": 70 },
          { "top": -11, "left":121, "width": 181, "height": 570, "zIndex": 2, "opacity": 80 },
          { "top": -26, "left": 296, "width": 188, "height": 600, "zIndex": 3, "opacity": 90 },
          { "top": -41, "left": 480, "width": 217, "height": 630, "zIndex": 4, "opacity": 100 },
          { "top": -26, "left": 694, "width": 188, "height": 600, "zIndex": 3, "opacity": 90 },
          { "top": -11, "left":879, "width": 181, "height": 570, "zIndex": 2, "opacity": 80 },
          { "top": 10, "left": 1055, "width": 173, "height": 530, "zIndex": 1, "opacity": 70 }
        ],
         size_a: [//768
          { "top": 30, "left": 88, "width":100, "height": 109, "zIndex": 1, "opacity": 0 },
          { "top": 30, "left": 88, "width":100, "height": 109, "zIndex": 2, "opacity": 60 },
          { "top": 16, "left": 154, "width":173, "height": 138, "zIndex": 3, "opacity": 80 },
          { "top": 0, "left": 250, "width": 255, "height": 170, "zIndex": 4, "opacity": 100 },
          { "top": 16, "left": 432, "width": 173, "height": 138, "zIndex": 3, "opacity": 80 },
          { "top": 30, "left": 570, "width": 100, "height": 109, "zIndex": 2, "opacity": 60 },
          { "top": 30, "left": 570, "width": 100, "height": 109, "zIndex": 1, "opacity": 0 }
        ],
         size_b: [//414
          { "top": 13, "left": 37, "width":100, "height": 80, "zIndex": 1, "opacity": 0 },
          { "top": 13, "left": 37, "width":100, "height": 80, "zIndex": 2, "opacity": 50 },
          { "top": 8, "left": 73, "width":132, "height": 90, "zIndex": 3, "opacity": 70 },
          { "top": 0, "left": 120, "width": 145, "height": 105, "zIndex": 4, "opacity": 100 },
          { "top": 8, "left": 182, "width": 132, "height": 90, "zIndex": 3, "opacity": 70 },
          { "top": 13, "left": 249, "width": 100, "height": 80, "zIndex": 2, "opacity": 50 },
          { "top": 13, "left": 249, "width": 100, "height": 80, "zIndex": 1, "opacity": 0 }
        ],
         size_c: [//375
          { "top": 11, "left": 40, "width":80, "height": 66, "zIndex": 1, "opacity": 0 },
          { "top": 11, "left": 40, "width":80, "height": 66, "zIndex": 2, "opacity": 50 },
          { "top": 6, "left": 74, "width":100, "height": 76, "zIndex": 3, "opacity": 70 },
          { "top": 0, "left": 112, "width": 120, "height": 88, "zIndex": 4, "opacity": 100 },
          { "top": 6, "left": 172, "width": 100, "height": 76, "zIndex": 3, "opacity": 70 },
          { "top": 11, "left": 226, "width": 80, "height": 66, "zIndex": 2, "opacity": 50 },
          { "top": 11, "left": 226, "width": 80, "height": 66, "zIndex": 1, "opacity": 0 }
        ],
         size_d: [//1024
           { "top": 31, "left": 101, "width":245, "height": 160, "zIndex": 1, "opacity": 0 },
          { "top": 31, "left": 101, "width": 245, "height": 160, "zIndex": 2, "opacity": 40 },
          { "top": 16, "left": 196, "width": 300, "height": 190, "zIndex": 3, "opacity": 70 },
          { "top": 0, "left": 315, "width": 360, "height": 220, "zIndex": 4, "opacity": 100 },
          { "top": 16, "left": 490, "width": 300, "height": 190, "zIndex": 3, "opacity": 70 },
          { "top": 31, "left": 648, "width": 245, "height":160, "zIndex": 2, "opacity": 40 },
          { "top": 31, "left": 648, "width": 245, "height": 160, "zIndex": 1, "opacity": 0 }
        ],
        title: '',
        Body: '',
        CoverPhoto:'',
        res_c: [],
        isShow: false,
        speed: 2000,
        falg: false,
        timerS: '',
        ins: 0,
         width: window.innerWidth,
      };
    },
    methods: {
      roua() {
        this.$axios
                .post('http://hlzy.api.gpscxqyw.com/api/content/getarticledetail', {
                  "ArticleId": 'e6edd3bd-a483-4d3e-9bb9-aeae9fe16022'
                })
                .then((data) => {
                  console.log(data)
                  this.Body = data.data.data.Body;
                  this.CoverPhoto = data.data.data.CoverPhoto;
                  this.title = data.data.data.Title;
                })
        document.querySelector('#demo').scrollIntoView(true);
      },
      roub() {
        this.$axios
                .post('http://hlzy.api.gpscxqyw.com/api/content/getarticledetail', {
                  "ArticleId": '63834175-3c0d-4706-a985-b8dba2db466c'
                })
                .then((data) => {
                  console.log(data)
                  this.Body = data.data.data.Body;
                  this.CoverPhoto = data.data.data.CoverPhoto;
                  this.title = data.data.data.Title;
                })
        document.querySelector('#demo').scrollIntoView(true);
      },
      rouc() {
        this.$axios
                .post('http://hlzy.api.gpscxqyw.com/api/content/getarticledetail', {
                  "ArticleId": '55c5c530-b97f-44b2-9021-4dac8a085e68'
                })
                .then((data) => {
                  console.log(data)
                  this.Body = data.data.data.Body;
                  this.CoverPhoto = data.data.data.CoverPhoto;
                  this.title = data.data.data.Title;
                })
        document.querySelector('#demo').scrollIntoView(true);
      },
      roud() {
        this.$axios
                .post('http://hlzy.api.gpscxqyw.com/api/content/getarticledetail', {
                  "ArticleId": '38a4b177-368d-456e-a0a1-0db8f173c4cd'
                })
                .then((data) => {
                  console.log(data)
                  this.Body = data.data.data.Body;
                  this.CoverPhoto = data.data.data.CoverPhoto;
                  this.title = data.data.data.Title;
                })
        document.querySelector('#demo').scrollIntoView(true);
      },
      roue() {
        this.$axios
                .post('http://hlzy.api.gpscxqyw.com/api/content/getarticledetail', {
                  "ArticleId": '75aa0cee-7b32-41c7-9349-c93ac17bad72'
                })
                .then((data) => {
                  console.log(data)
                  this.Body = data.data.data.Body;
                  this.CoverPhoto = data.data.data.CoverPhoto;
                  this.title = data.data.data.Title;
                })
        document.querySelector('#demo').scrollIntoView(true);
      },
      rouf() {
        this.$axios
                .post('http://hlzy.api.gpscxqyw.com/api/content/getarticledetail', {
                  "ArticleId": '7869bae1-2d2c-49ec-91ae-2fd601cee23b'
                })
                .then((data) => {
                  console.log(data)
                  this.Body = data.data.data.Body;
                  this.CoverPhoto = data.data.data.CoverPhoto;
                  this.title = data.data.data.Title;
                })
        document.querySelector('#demo').scrollIntoView(true);
      },
    roug() {
        this.$axios
                .post('http://hlzy.api.gpscxqyw.com/api/content/getarticledetail', {
                  "ArticleId":'38dce4cb-0635-4f69-a6bc-5f154b30f3ae'
                })
                .then((data) => {
                  console.log(data)
                  this.Body = data.data.data.Body;
                  this.CoverPhoto = data.data.data.CoverPhoto;
                  this.title = data.data.data.Title;
                })
      document.querySelector('#demo').scrollIntoView(true);
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
              //this.imgArr = this.res_c;
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
         if (this.width === 768) {
          this.size = this.size_a;
        } else if (this.width === 414) {
          this.size = this.size_b;
        }else if (this.width === 375) {
          this.size = this.size_c;
        }else if (this.width === 1024) {
          this.size = this.size_d;
        }
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
      //this.fnSwiper();
      this.ajax();
      document.querySelector('#demo').scrollIntoView(true);
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
    height: 490px;
    margin: 100px auto;
    margin-top: -35%;
    border: 0px solid red;
  }

   .content {
    position: absolute;
    width: 1200px;
    height: 488px;
    border: 0px solid white;
  }

    .content li {
      position: absolute;
      background-size: 100% 100%;
      cursor: pointer;
      display: inline-grid;
    }
    .content li img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    border:3px solid white;
}

  .wrap a {
    position: absolute;
    z-index: 2;
    top: 55%;
    width: 60px;
    height: 60px;
    margin-top: -30px;
    font: 36px/60px "宋体";
    text-align: center;
    text-decoration: none;
    color: #fff;
    background: rgb(255, 100, 0);
    background: rgba(255, 100, 0, .6);
    transition: background 1s ease;
  }

    .wrap a:hover {
      background: rgb(255, 100, 0);
    }

  .prev {
    left: -115px;
  }

  .next {
    right: -98px;
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
     animation:mymo 2s;
	animation-iteration-count:1;
	animation-fill-mode:forwards;
	-webkit-animation:mymo 2s;
	-webkit-animation-iteration-count:1;
	-webkit-animation-fill-mode:forwards;
  }
  @keyframes mymo
{
	from {right:-100px;}
	to {right:0px;}
}

@-webkit-keyframes mymo 
{
	from {right:-100px;}
	to {right:0px;}
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
    position: relative;
     animation:mymove 2s;
	animation-iteration-count:1;
	animation-fill-mode:forwards;
	-webkit-animation:mymove 2s;
	-webkit-animation-iteration-count:1;
	-webkit-animation-fill-mode:forwards;
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
     position: relative;
     animation:mymove 1s;
	animation-iteration-count:1;
	animation-fill-mode:forwards;
	-webkit-animation:mymove 1s;
	-webkit-animation-iteration-count:1;
	-webkit-animation-fill-mode:forwards;
  }
  @keyframes mymove
{
	from {left:-100px;}
	to {left:0px;}
}

@-webkit-keyframes mymove 
{
	from {left:-100px;}
	to {left:0px;}
}

  .story-dream-title span {
    display: block;
    font-size: 34px;
    color: #00873c;
    margin-top: 36px;
    margin-bottom: 35px;
    position: relative;
     animation:mymove 1.5s;
	animation-iteration-count:1;
	animation-fill-mode:forwards;
	-webkit-animation:mymove 1.5s;
	-webkit-animation-iteration-count:1;
	-webkit-animation-fill-mode:forwards;
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
     .img1 {
      border: 0px solid;
      width: 20%;
      height: 200px;
      margin-top: -28%;
    }
    .wrap {
    position: relative;
    width: 100%;
    height: 122px;
    margin: 100px auto;
    margin-top: -30%;
  }
    .content {
    position: absolute;
    width: 100%;
    height: 200px;
  }
    .wrap a {
    position: absolute;
    z-index: 2;
    top: 48%;
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
    margin-left:-2px;
    margin-right:-22px;
  }
  }
   @media (max-width: 1024px) {
    .img1 {
      border: 0px solid;
      width: 20%;
      height: 160px;
      margin-top: -28%;
    }
    .wrap a{
    position: absolute;
    z-index: 2;
    top: 65%;
    width: 60px;
    height: 60px;
    margin-top: -30px;
    font: 36px/60px "\5B8B\4F53";
    text-align: center;
    text-decoration: none;
    color: #fff;
    background: rgb(255, 100, 0);
    background: rgba(255, 100, 0, .2);
    -webkit-transition: background 1s ease;
    transition: background 1s ease;
    margin-left: -27px;
    margin-right: -29px;
}
    .wrap {
    position: relative;
    width: 100%;
    height: 175px;
    margin: 100px auto;
    margin-top: -30%;
}
    .content{
    position: absolute;
    width: auto;
    height: 360px;
}
  }
  @media(max-width:414px) {
    .wrap a {
      position: absolute;
      z-index: 2;
      top: 193%;
      width: 30px;
      height: 30px;
      margin-top: -50px;
      font: 25px/32px "\5B8B\4F53";
      text-align: center;
      text-decoration: none;
      color: #fff;
      background: rgb(255, 100, 0);
      background: rgba(255, 100, 0, .2);
      -webkit-transition: background 1s ease;
      transition: background 1s ease;
      margin-left: -29px;
      margin-right: -30px;
    }

    .wrap {
      position: relative;
      width: 100%;
      height: 46px;
      margin: 100px auto;
      margin-top: -30%;
    }
  }
    @media(max-width:375px) {
      .wrap a {
        position: absolute;
        z-index: 2;
        top: 176%;
        width: 30px;
        height: 30px;
        margin-top: -50px;
        font: 25px/32px "\5B8B\4F53";
        text-align: center;
        text-decoration: none;
        color: #fff;
        background: rgb(255, 100, 0);
        background: rgba(255, 100, 0, .2);
        -webkit-transition: background 1s ease;
        transition: background 1s ease;
        margin-left: -29px;
        margin-right: -30px;
      }

      .wrap {
        position: relative;
        width: 100%;
        height: 46px;
        margin: 100px auto;
        margin-top: -30%;
      }
    }
</style>
