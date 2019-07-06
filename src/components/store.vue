<template>
    <div class="container store">
       <img src="../assets/img/bg3.png" alt="" class="img">
       <div class="container main margin">
        <div class="intro-header">
            <h2 class="t-c">ONLINE MALL</h2>
            <p class="t-c">线上商城</p>
        </div>
        <ul class="list">
          <li>
            <a href="https://liangpinpuzi.tmall.com/" class="mall-item">
               <i class="icon-tianmao"></i>
            </a>
            <div class="mall-item-name">天猫</div>
          </li>
          <li>
            <a href="https://liangpinpuzi.tmall.com/" class="mall-item">
               <i class="icon-tianmao"></i>
            </a>
            <div class="mall-item-name">天猫</div>
          </li>
          <li>
            <a href="https://liangpinpuzi.tmall.com/" class="mall-item">
               <i class="icon-tianmao"></i>
            </a>
            <div class="mall-item-name">天猫</div>
          </li>
          <li>
            <a href="https://liangpinpuzi.tmall.com/" class="mall-item">
               <i class="icon-tianmao"></i>
            </a>
            <div class="mall-item-name">天猫</div>
          </li>
          <li>
            <a href="https://liangpinpuzi.tmall.com/" class="mall-item">
               <i class="icon-tianmao"></i>
            </a>
            <div class="mall-item-name">天猫</div>
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
  background: url(../assets/img/taobao.png) no-repeat;
  background-size: 100% 100%;
  position: absolute;
  top: 25%;
  left: 25%;
}
.mall-item:hover::before {
  background: #00873c url(../assets/img/bg_02.svg) center center no-repeat;
  background-size: 50% 50%;
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
