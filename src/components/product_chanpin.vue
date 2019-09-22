<template>
  <div class="container brandStory margin" style="margin-bottom:12%;">
    <img src="http://image.hanjiazhuang.cn/bg5.png" alt="" class="img">
    <div class="wrap" id="wrap" @mouseover="fnonmouseovers" @mouseout="fnonmouseouts">
      <!--<ul class="content">
        <li v-for="(item, index) in imgArr" :key="index">
          <img :src="item.CoverPhoto" @click="rou(index)">
        </li>
      </ul>-->
      <ul class="content">
        <li>
          <img src="http://image.hanjiazhuang.cn/m4.jpg" @click="roua()"><!--油杏-->
        </li>
        <li>
          <img src="http://image.hanjiazhuang.cn/m1.jpg" @click="roub()"><!--西梅-->
        </li>
        <li>
          <img src="http://image.hanjiazhuang.cn/m2.jpg" @click="roud()"><!--李子-->
        </li>
        <li>
          <img src="http://image.hanjiazhuang.cn/m7.jpg" @click="rouc()"><!--梨-->
        </li>
        <li>
          <img src="http://image.hanjiazhuang.cn/m5.jpg" @click="roue()"><!--桃子-->
        </li>
        <li>
          <img src="http://image.hanjiazhuang.cn/m6.jpg" @click="rouf()"><!--苹果-->
        </li>
        <li>
          <img src="http://image.hanjiazhuang.cn/m3.jpg" @click="roug()"><!--石榴-->
        </li>
      </ul>
      <a href="javascript:;" class="prev" @click="fnLeft">&#60;</a>
      <a href="javascript:;" class="next" @click="fnRight">&#62;</a>
    </div>

  </div>
</template>
<script>
  export default {
    name: "brandStory",
    data() {
      return {
        //includedComponents: "test-keep-alive",
        list: [],
        imgArr: [],
        size: [
          { "top": 10, "left": -47, "width": 173, "height": 530, "zIndex": 1, "opacity": 70 },
          { "top": -11, "left": 121, "width": 181, "height": 570, "zIndex": 2, "opacity": 80 },
          { "top": -26, "left": 296, "width": 188, "height": 600, "zIndex": 3, "opacity": 90 },
          { "top": -41, "left": 480, "width": 217, "height": 630, "zIndex": 4, "opacity": 100 },
          { "top": -26, "left": 694, "width": 188, "height": 600, "zIndex": 3, "opacity": 90 },
          { "top": -11, "left": 879, "width": 181, "height": 570, "zIndex": 2, "opacity": 80 },
          { "top": 10, "left": 1055, "width": 173, "height": 530, "zIndex": 1, "opacity": 70 }
        ],
        size_a: [//768
          { "top": 30, "left": 88, "width": 100, "height": 109, "zIndex": 1, "opacity": 0 },
          { "top": 30, "left": 88, "width": 100, "height": 109, "zIndex": 2, "opacity": 60 },
          { "top": 16, "left": 154, "width": 173, "height": 138, "zIndex": 3, "opacity": 80 },
          { "top": 0, "left": 250, "width": 255, "height": 170, "zIndex": 4, "opacity": 100 },
          { "top": 16, "left": 432, "width": 173, "height": 138, "zIndex": 3, "opacity": 80 },
          { "top": 30, "left": 570, "width": 100, "height": 109, "zIndex": 2, "opacity": 60 },
          { "top": 30, "left": 570, "width": 100, "height": 109, "zIndex": 1, "opacity": 0 }
        ],
        size_b: [//414
          { "top": 13, "left": 37, "width": 100, "height": 80, "zIndex": 1, "opacity": 0 },
          { "top": 13, "left": 37, "width": 100, "height": 80, "zIndex": 2, "opacity": 50 },
          { "top": 8, "left": 73, "width": 132, "height": 90, "zIndex": 3, "opacity": 70 },
          { "top": 0, "left": 120, "width": 145, "height": 105, "zIndex": 4, "opacity": 100 },
          { "top": 8, "left": 182, "width": 132, "height": 90, "zIndex": 3, "opacity": 70 },
          { "top": 13, "left": 249, "width": 100, "height": 80, "zIndex": 2, "opacity": 50 },
          { "top": 13, "left": 249, "width": 100, "height": 80, "zIndex": 1, "opacity": 0 }
        ],
        size_c: [//375
          { "top": 11, "left": 40, "width": 80, "height": 66, "zIndex": 1, "opacity": 0 },
          { "top": 11, "left": 40, "width": 80, "height": 66, "zIndex": 2, "opacity": 50 },
          { "top": 6, "left": 74, "width": 100, "height": 76, "zIndex": 3, "opacity": 70 },
          { "top": 0, "left": 112, "width": 120, "height": 88, "zIndex": 4, "opacity": 100 },
          { "top": 6, "left": 172, "width": 100, "height": 76, "zIndex": 3, "opacity": 70 },
          { "top": 11, "left": 226, "width": 80, "height": 66, "zIndex": 2, "opacity": 50 },
          { "top": 11, "left": 226, "width": 80, "height": 66, "zIndex": 1, "opacity": 0 }
        ],
        size_d: [//1024
          { "top": 31, "left": 101, "width": 245, "height": 160, "zIndex": 1, "opacity": 0 },
          { "top": 31, "left": 101, "width": 245, "height": 160, "zIndex": 2, "opacity": 40 },
          { "top": 16, "left": 196, "width": 300, "height": 190, "zIndex": 3, "opacity": 70 },
          { "top": 0, "left": 315, "width": 360, "height": 220, "zIndex": 4, "opacity": 100 },
          { "top": 16, "left": 490, "width": 300, "height": 190, "zIndex": 3, "opacity": 70 },
          { "top": 31, "left": 648, "width": 245, "height": 160, "zIndex": 2, "opacity": 40 },
          { "top": 31, "left": 648, "width": 245, "height": 160, "zIndex": 1, "opacity": 0 }
        ],
        CoverPhoto_a: '',
        isShow: false,
        speed: 2000,
        falg: false,
        timerS: '',
        width: window.innerWidth,
      };
    },
    methods: {
      roua() {
        this.$router.replace({
          path: 'product', query: { id: '7869bae1-2d2c-49ec-91ae-2fd601cee23b' },
          //replace: true,
        })
      },
      roub() {
        this.$router.replace({
          path: 'product', query: { id: '75aa0cee-7b32-41c7-9349-c93ac17bad72' },
          //replace: true,
        })
      },
      rouc() {
        this.$router.replace({
          path: 'product', query: { id: '38a4b177-368d-456e-a0a1-0db8f173c4cd' },
          //replace: true,
        })
      },
      roud() {
        this.$router.replace({
          path: 'product', query: { id: '55c5c530-b97f-44b2-9021-4dac8a085e68' },
          //replace: true,
        })
      },
      roue() {
        this.$router.replace({
          path: 'product', query: { id: '63834175-3c0d-4706-a985-b8dba2db466c' },
          //replace: true,
        })
      },
      rouf() {
        this.$router.replace({
          path: 'product', query: { id: 'e6edd3bd-a483-4d3e-9bb9-aeae9fe16022' },
          //replace: true,
        })
      },
      roug() {
        this.$router.replace({
          path: 'product', query: { id: '38dce4cb-0635-4f69-a6bc-5f154b30f3ae' },
          //replace: true,
        })
      },
      ajax() {
        this.$axios
          .post('http://api.hanjiazhuang.cn/api/content/getcategoryarticlelist', {
            "categoryid": 'a460675f-8a68-4bbb-b0cd-825f7578fe00',
            "PageIndex": 1,
            "PageSize": 10
          })
          .then((res) => {
            //console.log(res)
            this.list = res.data.data.lst_categoryarticlelist;
            this.imgArr = this.list;
            //console.log(this.imgArr);
          })
      },
      getStyle: function (obj, attr) {
        return obj.currentStyle ? obj.currentStyle[attr] : window.getComputedStyle(obj, null)[attr];
      },
      animate: function (obj, json, fn) {
        //console.log(json)
        //console.log(obj.timer)
        //console.log(fn)
        clearInterval(obj.timer);
        var that = this;
        obj.timer = setInterval(function () {
          var bool = true;
          for (var k in json) {
            var leader;
            if (k == 'opacity') {
              //console.log(that.getStyle(obj,k))
              if (that.getStyle(obj, k) == undefined) {
                leader = 100;
              } else {
                leader = parseInt(that.getStyle(obj, k) * 100);
                //console.log(leader)
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
              fn();//that.falg = true;
            }
          }
        }, 10);
        //console.log(obj.timer)
      },
      fnonmouseovers() {//移入div停止
        this.isShow = true;
        clearInterval(this.timerS);
      },
      fnonmouseouts() {//移出开始
        this.isShow = false;
        var that = this;
        this.timerS = setInterval(function () {
          that.move(true);
        }, this.speed);
      },
      fnSwiper() {
        //this.move();
        var that = this;
        this.timerS = setInterval(function () {
          that.move(true);
        }, this.speed)
        if (this.width === 768) {
          this.size = this.size_a;
        } else if (this.width === 414) {
          this.size = this.size_b;
        } else if (this.width === 375) {
          this.size = this.size_c;
        } else if (this.width === 1024) {
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
        //console.log(liArr.length)
        var that = this;
        for (var i = 0; i < liArr.length; i++) {
          this.animate(liArr[i], this.size[i], function () {
            that.falg = true;
          });
        }
      },
    },
    mounted() {
      this.fnSwiper();
      this.ajax();
    },
    //beforeDestroy ---实例销毁之前调用
    beforeDestroy() {
      if (this.timerS) {
        clearInterval(this.timerS); //关闭
      }
    }
  }
</script>
<style scoped>
  ul {
    list-style: none;
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
      border: 3px solid white;
    }

    .content li:nth-child(4) {
      width: 217px;
      height: 630px;
      top: -41px;
      left: 480.5px;
      z-index: 4;
      opacity: 1;
    }

    .content li:nth-child(1) {
      width: 173px;
      height: 530px;
      top: 10px;
      left: -49px;
      z-index: 1;
      opacity: 0.7;
    }

    .content li:nth-child(7) {
      width: 173px;
      height: 530px;
      top: 10px;
      left: 1055px;
      z-index: 1;
      opacity: 0.7;
    }

    .content li:nth-child(2) {
      width: 181px;
      height: 570px;
      top: -11px;
      left: 121px;
      z-index: 2;
      opacity: 0.8;
    }

    .content li:nth-child(6) {
      width: 181px;
      height: 570px;
      top: -11px;
      left: 879px;
      z-index: 2;
      opacity: 0.8;
    }

    .content li:nth-child(3) {
      width: 188px;
      height: 600px;
      top: -26px;
      left: 296px;
      z-index: 3;
      opacity: 0.9;
    }

    .content li:nth-child(5) {
      width: 188px;
      height: 600px;
      top: -26px;
      left: 694px;
      z-index: 3;
      opacity: 0.9;
    }

  .wrap {
    position: relative;
    width: 1200px;
    /*width:70%;*/
    height: 490px;
    margin: 100px auto;
    margin-top: -35%;
    border: 0px solid red;
  }

  .content {
    position: absolute;
    width: 100%;
    height: 488px;
    border: 0px solid white;
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
    background: rgba(255, 100, 0, .5);
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
    width: 100%;
    height: auto;
    margin-top: -25%;
  }

    .img1 img {
      width: 100%;
      height: 300px;
    }

  @media (max-width: 1100px) {
    .story-dream-title span {
      font-size: 30px;
    }

    .intro-header h2 {
      font-size: 30px;
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
      height: 360px;
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
      top: 25%;
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
      margin-left: -2px;
      margin-right: -22px;
    }
  }

  @media (max-width: 1024px) {
    .img1 {
      border: 0px solid;
      width: 20%;
      height: 160px;
      margin-top: -28%;
    }

    .wrap a {
      position: absolute;
      z-index: 2;
      top: 32%;
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
      height: 360px;
      margin: 100px auto;
      margin-top: -30%;
    }
  }

  @media(max-width:414px) {
    .wrap a {
      position: absolute;
      z-index: 2;
      top: 25%;
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
  }

  @media(max-width:375px) {
    .wrap a {
      position: absolute;
      z-index: 2;
      top: 22%;
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
  }
</style>
