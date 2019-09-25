
<template>
  <div class="container lunbo margin" style="margin-bottom:12%;">
    <img src="http://image.hanjiazhuang.cn/bg5.png" alt="" class="img">
    <div class="wrap" id="wrap">
      <ul class="content">
        <li @click="roua()" style="background-image: url(&quot;http://image.hanjiazhuang.cn/m4.jpg&quot;); top: 10px; left: -47px; width: 173px; height: 530px; z-index: 1; opacity: 0.7;"></li>
        <li @click="roub()" style="background-image: url(&quot;http://image.hanjiazhuang.cn/m1.jpg&quot;); top: -11px; left: 121px; width: 181px; height: 570px; z-index: 2; opacity: 0.8;"></li>
        <li @click="roud()" style="background-image: url(&quot;http://image.hanjiazhuang.cn/m2.jpg&quot;); top: -26px; left: 296px; width: 188px; height: 600px; z-index: 3; opacity: 0.9;"></li>
        <li @click="rouc()" style="background-image: url(&quot;http://image.hanjiazhuang.cn/m7.jpg&quot;); top: -41px; left: 480px; width: 217px; height: 630px; z-index: 4; opacity: 1;"></li>
        <li @click="roue()" style="background-image: url(&quot;http://image.hanjiazhuang.cn/m5.jpg&quot;); top: -26px; left: 694px; width: 188px; height: 600px; z-index: 3; opacity: 0.9;"></li>
        <li @click="rouf()" style="background-image: url(&quot;http://image.hanjiazhuang.cn/m6.jpg&quot;); top: -11px; left: 879px; width: 181px; height: 570px; z-index: 2; opacity: 0.8;"></li>
        <li @click="roug()" style="background-image: url(&quot;http://image.hanjiazhuang.cn/m3.jpg&quot;); top: 10px; left: 1055px; width: 173px; height: 530px; z-index: 1; opacity: 0.7;"></li>
      </ul>
      <a href="javascript:;" class="prev">&#60;</a>
      <a href="javascript:;" class="next">&#62;</a>
    </div>

  </div>
</template>
<script>
  export default {
    name: "lunbo",
    data() {
      return {
        imgArr: [
          { "path": "http://image.hanjiazhuang.cn/m4.jpg" },
          { "path": "http://image.hanjiazhuang.cn/m1.jpg" },
          { "path": "http://image.hanjiazhuang.cn/m2.jpg" },
          { "path": "http://image.hanjiazhuang.cn/m7.jpg" },
          { "path": "http://image.hanjiazhuang.cn/m5.jpg" },
          { "path": "http://image.hanjiazhuang.cn/m6.jpg" },
          { "path": "http://image.hanjiazhuang.cn/m3.jpg" }
        ],
        size: [
          { "top": 10, "left": -47, "width": 173, "height": 530, "zIndex": 1, "opacity": 70 },
          { "top": -11, "left": 121, "width": 181, "height": 570, "zIndex": 2, "opacity": 80 },
          { "top": -26, "left": 296, "width": 188, "height": 600, "zIndex": 3, "opacity": 90 },
          { "top": -41, "left": 480, "width": 217, "height": 630, "zIndex": 4, "opacity": 100 },
          { "top": -26, "left": 694, "width": 188, "height": 600, "zIndex": 3, "opacity": 90 },
          { "top": -11, "left": 879, "width": 181, "height": 570, "zIndex": 2, "opacity": 80 },
          { "top": 10, "left": 1055, "width": 173, "height": 530, "zIndex": 1, "opacity": 70 }
        ],
        liArr: [],
        list: [],
      }
    },
    methods: {
      roua() {
        this.$router.replace({
          path: 'product', query: { id: '7869bae1-2d2c-49ec-91ae-2fd601cee23b' },
        })
      },
      roub() {
        this.$router.replace({
          path: 'product', query: { id: '75aa0cee-7b32-41c7-9349-c93ac17bad72' },
        })
      },
      rouc() {
        this.$router.replace({
          path: 'product', query: { id: '38a4b177-368d-456e-a0a1-0db8f173c4cd' },
        })
      },
      roud() {
        this.$router.replace({
          path: 'product', query: { id: '55c5c530-b97f-44b2-9021-4dac8a085e68' },
        })
      },
      roue() {
        this.$router.replace({
          path: 'product', query: { id: '63834175-3c0d-4706-a985-b8dba2db466c' },
        })
      },
      rouf() {
        this.$router.replace({
          path: 'product', query: { id: 'e6edd3bd-a483-4d3e-9bb9-aeae9fe16022' },
        })
      },
      roug() {
        this.$router.replace({
          path: 'product', query: { id: '38dce4cb-0635-4f69-a6bc-5f154b30f3ae' },
        })
      },
      //ajax() {
      //  this.$axios
      //    .post('http://api.hanjiazhuang.cn/api/content/getcategoryarticlelist', {
      //      "categoryid": 'a460675f-8a68-4bbb-b0cd-825f7578fe00',
      //      "PageIndex": 1,
      //      "PageSize": 10
      //    })
      //    .then((res) => {
      //      //console.log(res)
      //      this.list = res.data.data.lst_categoryarticlelist;
      //    })
      //},
      getStyle: function (obj, attr) {
        return obj.currentStyle ? obj.currentStyle[attr] : window.getComputedStyle(obj, null)[attr];
      },
      animate: function (obj, json, fn) {
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
      lunbo: function () {
        var that = this;
        var imgsum = this.imgArr.length;//imgArr数组长度7，照片的
        var wrap = document.getElementById('wrap');//id=wrap
        var cont = wrap.firstElementChild || wrap.firstChild;//firstElementChild=获取指定元素下第一个子元素节点。firstChild=返回文档节点的第一节点。
        var btnArr = wrap.getElementsByTagName('a');//按钮
        var speed = 2000;
        var falg = true;
        wrap.onmouseover = function () {
          //for (var i = 0; i < btnArr.length; i++) {
          //  btnArr[i].style.display = 'block';
          //}
          clearInterval(wrap.timer);
        }
        wrap.onmouseout = function () {
          //for (var i=0;i<btnArr.length;i++) {
          //  btnArr[i].style.display='none';
          //}
          wrap.timer = setInterval(function () {
            that.move(true);
          }, speed);
        }
        for (var i = 0; i < imgsum; i++) {
          var lis = document.createElement('li');//createElement() 方法通过指定名称创建一个元素
          lis.style.backgroundImage = 'url(' + this.imgArr[i].path + ')';//获取imgArr数组照片
          cont.appendChild(lis);//appendChild() 方法可向节点的子节点列表的末尾添加新的子节点。
          //console.log(cont.appendChild(lis))
        }
        var liArr = cont.children;//children 属性只返回元素节点
        this.liArr = liArr;
        that.move();
        clearInterval(wrap.timer);
        wrap.timer = setInterval(function () {
          that.move(true);
        }, speed);
        btnArr[1].onclick = function () {
          if (falg) {
            that.move(true);
          }
        }
        btnArr[0].onclick = function () {
          if (falg) {
            that.move(false);
          }
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
        var that = this
        for (var i = 0; i < that.liArr.length; i++) {
          this.animate(that.liArr[i], this.size[i], function () {
            that.falg = true;
          })
        }
      }
    },
    mounted() {
      this.lunbo();
    },
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

  .lunbo {
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
</style>
