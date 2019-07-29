<template>
  <div class="container brandStory margin" style="margin-bottom:12%;">
    <img src="../assets/img/bg5.png" alt="" class="img">
    <div class="wrap" id="wrap" @mouseover="fnonmouseover" @mouseout="fnonmouseout">
      <ul class="content">
          <li v-for="(item, index) in imgArr" :key="index">
            <img :src="item.CoverPhoto" @click="rou(index)">
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
        list: [],
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
        CoverPhoto_a:'',
        isShow: false,
        speed:3000,
        falg: true,
        timerS: '',
      };

    },
    methods: {
      rou(index) {
        console.log(this.imgArr[index].Id)
        this.$router.push({
          path: 'product', query: {id:this.imgArr[index].Id}
        })
      },
      ajax() {
        this.$axios
        .post('http://hlzy.api.gpscxqyw.com/api/content/getcategoryarticlelist', {
          "categoryid": 'a460675f-8a68-4bbb-b0cd-825f7578fe00',
          "PageIndex": 1,
          "PageSize": 10
        })
        .then((res) => {
          console.log(res)
          this.list = res.data.data.lst_categoryarticlelist;
          this.imgArr = this.list;
          console.log(this.imgArr);
          console.log(this.list_a);
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
    }
  }
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
  }

  @media (max-width: 1024px) {
    .img1 {
      border: 0px solid;
      width: 20%;
      height: 160px;
      margin-top: -28%;
    }
  }
</style>
