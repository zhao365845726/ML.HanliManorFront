<template>
    <div class="container store">
       <img src="http://image.hanjiazhuang.cn/%E4%BA%A7%E5%93%81%E5%95%86%E5%9F%8E.png" alt="" class="img">
       <div class="container main margin" id="demo">
        <div class="intro-header">
            <h2 class="t-c">ONLINE MALL</h2>
            <p class="t-c">线上商城</p>
        </div>
        <ul class="list">
          <li class="li1">
            <a href=" https://shop238833399.taobao.com/" class="mall-item">
               <i class="icon-tianmao"></i>
            </a>
            <div class="mall-item-name">淘宝</div>
          </li>
          <li class="li2">
            <a href="https://www.tmall.com/?ali_trackid=2:mm_26632258_3504122_48284354:1564882382_136_2104611908&clk1=5606d12bd92d9b482aa48c8d19453b08&upsid=5606d12bd92d9b482aa48c8d19453b08" class="mall-item">
               <t class="icon-tianmao"></t>
            </a>
            <div class="mall-item-name">天猫</div>
          </li>
          <li class="li3"> 
            <a href="#" class="mall-item">
               <j class="icon-tianmao"></j>
            </a>
            <div class="mall-item-name">京东</div>
          </li>
          <li class="li4">
            <a href="https://www.pinduoduo.com/" class="mall-item">
               <d class="icon-tianmao"></d>
            </a>
            <div class="mall-item-name">拼多多</div>
          </li>
          <li class="li5">
            <a href="http://www.sf-express.com/cn/sc/" class="mall-item">
               <m class="icon-tianmao"></m>
            </a>
            <div class="mall-item-name">顺丰快递</div>
          </li>
        </ul>
        </div>
    </div>
</template>

<script>
export default {
  name: "store",
  data() {
    return {};
    },
    mounted() {
      document.querySelector('#demo').scrollIntoView(true);
    }
};
</script>

<style scoped>
.store {
  margin-bottom: 200px;
}
.main {
  max-width: 1400px;
}
.img {
  width: 100%;
  height: auto;
  overflow: hidden;
  margin-bottom: 114px;
}
.intro-header {
  color: #00873c;
}
.intro-header h2 {
  font-size: 36px;
  line-height: 27px;
  width: 100%;
  font-weight:600;
}
.intro-header p {
  font-size: 33px;
  line-height: 32px;
  margin-top: 36px;
}
.list {
  width: 100%;
  height: auto;
  overflow: hidden;
  margin-top: 110px;
  position: relative;
}
.list li {
  width: 20%;
  float: left;
}
  .li1 {
    position: relative;
     animation:a1 2s;
	animation-iteration-count:1;
	animation-fill-mode:forwards;
	-webkit-animation:a1 2s;
	-webkit-animation-iteration-count:1;
	-webkit-animation-fill-mode:forwards;
  }
  @keyframes a1
{
	from {left:-300px;}
	to {left:0px;}
}

@-webkit-keyframes a1 
{
	from {left:-300px;}
	to {left:0px;}
}
  .li2 {
    position: relative;
     animation:a1 1.5s;
	animation-iteration-count:1;
	animation-fill-mode:forwards;
	-webkit-animation:a1 1.5s;
	-webkit-animation-iteration-count:1;
	-webkit-animation-fill-mode:forwards;
  }
  .li3 {
    position: relative;
     animation:a1 1s;
	animation-iteration-count:1;
	animation-fill-mode:forwards;
	-webkit-animation:a1 1s;
	-webkit-animation-iteration-count:1;
	-webkit-animation-fill-mode:forwards;
  }
  .li4 {
    position: relative;
     animation:a1 .8s;
	animation-iteration-count:1;
	animation-fill-mode:forwards;
	-webkit-animation:a1 .8s;
	-webkit-animation-iteration-count:1;
	-webkit-animation-fill-mode:forwards;
  }
  .li5 {
    position: relative;
     animation:a1 .3s;
	animation-iteration-count:1;
	animation-fill-mode:forwards;
	-webkit-animation:a1 .3s;
	-webkit-animation-iteration-count:1;
	-webkit-animation-fill-mode:forwards;
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
  border: 1px solid #00873c;
  border-radius: 50%;
  position: relative;
}
.mall-item i {
  display: block;
  width: 50%;
  height: 50%;
  background: url(http://image.hanjiazhuang.cn/%E6%B7%98%E5%AE%9D.jpg) no-repeat;
  background-size: 100% 100%;
  position: absolute;
  top: 25%;
  left: 25%;
  border-radius: 18%;
}
.mall-item j {
  display: block;
  width: 50%;
  height: 50%;
  background: url(http://image.hanjiazhuang.cn/%E4%BA%AC%E4%B8%9C.jpg) no-repeat;
  background-size: 100% 100%;
  position: absolute;
  top: 25%;
  left: 25%;
  border-radius: 18%;
}
.mall-item t {
  display: block;
    width: 83%;
    height: 53%;
    background: url(http://image.hanjiazhuang.cn/tianmao.jpg) no-repeat;
    background-size: 100% 100%;
    position: absolute;
    top: 24%;
    left: 9%;
}
.mall-item d {
  display: block;
  width: 50%;
  height: 50%;
  background: url(http://image.hanjiazhuang.cn/pinduoduo.jpg) no-repeat;
  background-size: 100% 100%;
  position: absolute;
  top: 25%;
  left: 25%;
  border-radius: 18%;
}
.mall-item m {
  display: block;
  width: 50%;
  height: 50%;
  background: url(http://image.hanjiazhuang.cn/%E9%A1%BA%E4%B8%B0.jpg) no-repeat;
  background-size: 100% 100%;
  position: absolute;
  top: 25%;
  left: 25%;
  border-radius: 18%;
}
.mall-item:hover::before {
  background: #00873c url(http://image.hanjiazhuang.cn/33.png) center center no-repeat;
  background-size: 80% 60%;
  z-index: 3;
}
.mall-item-name {
  font-size: 14px;
  color: #00873c;
  margin-top: 30px;
  text-align: center;
}
@media (max-width: 768px) {
  .store {
    margin-bottom: 55px;
  }
  .img {
    margin-bottom: 55px;
  }
  .intro-header h2 {
    font-size: 30px;
    text-align: left;
    padding: 0 40px;
  }
  .intro-header p {
    font-size: 24px;
    text-align: left;
    padding: 0 40px;
  }
  .list li {
    width: 33.3333%;
  }
  .mall-item {
    margin: 0 2.66667vw 4vw;
  }
  .mall-item-name {
    margin-top: 0;
    margin-bottom: 6.66667vw;
  }
  .list {
    margin-top: 55px;
    padding: 0 40px;
  }
}
</style>
