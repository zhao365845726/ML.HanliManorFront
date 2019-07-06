<template>
  <div class="container mediaDetail margin">
    <img src="../assets/img/bg2.png" alt="" class="img">
    <div class="container main margin">
      <div class="title">媒体聚焦</div>
      <div class="container content">
        <div class="content-left">
          <div class="time">03.05 <span>2019</span></div>
          <div class="content-title">韩梨庄园里水电费空间</div>
          <p class="share">
            <img src="../assets/img/sp1.png" alt="">
            <img src="../assets/img/sp2.png" alt="">
            <img src="../assets/img/sp3.png" alt="">
          </p>
          <div class="goback">返回列表</div>
        </div>
        <div class="content-right">
          <img src="../assets/img/bg2.png" alt="">
          <p>韩家庄文化发展新政策韩家庄文化发展新政策韩家庄文化发展新政策韩家庄文化韩家庄文化发展新政策韩家庄文化发展新政策韩家</p>
          <p>庄文化发展新政策韩家庄文化韩家庄文化发展新政策韩家庄文化发展新政策韩家庄文化发展新政策韩家庄文化韩家庄文化发展新政策韩家庄文化发展新政策韩家庄文化发展新政策韩家庄文化韩家庄文化发展新政策韩家庄文化发展新政策韩家庄文化发展新政策韩家庄文化韩家庄文化发展新政策韩家庄文化发展新政策韩家庄文化发展新政策韩家庄文化韩家庄文化发展新政策韩家庄文化发展新政策韩家庄文化发展新政策韩家庄文化</p>
          <p>庄文化发展新政策韩家庄文化韩家庄文化发展新政策韩家庄文化发展新政策韩家庄文化发展新政策韩家庄文化韩家庄文化发展新政策韩家庄文化发展新政策韩家庄文化发展新政策韩家庄文化韩家庄文化发展新政策韩家庄文化发展新政策韩家庄文化发展新政策韩家庄文化韩家庄文化发展新政策韩家庄文化发展新政策韩家庄文化发展新政策韩家庄文化韩家庄文化发展新政策韩家庄文化发展新政策韩家庄文化发展新政策韩家庄文化</p>
          <img src="../assets/img/bg2.png" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "mediaDetail",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    }
  }
};
</script>

<style scoped>
.mediaDetail {
  margin-bottom: 270px;
}
.container{
  overflow: hidden;
}
.img {
  width: 100%;
  height: auto;
  overflow: hidden;
  margin-bottom: 110px;
}
.main {
  max-width: 1400px;
}
.title{
  font-size: 14px;
  color: #000000;
  line-height: 56px;
}
.content{
  margin-top: 84px;
}
.content-left{
  float: left;
  width: 40%;
  height: auto;
  overflow: hidden;
}
.content-right{
  float: left;
  width: 60%;
  height: auto;
  overflow: hidden;
}
.content-right img{
  width: 100%;
  margin-bottom: 20px;
}
.content-right p{
  font-size: 14px;
  line-height: 22px;
  color: #595757;
  margin-bottom: 20px;
}
.time{
  font-size: 31px;
  color: #000000;
  position: relative;
}
.time span{
  font-size: 12px;
  position: absolute;
  right:50%;
  bottom:12px;
}
.content-title{
  font-size: 27px;
  color: #000000;
  margin-top: 50px;
}
.share{
  height: 30px;
  margin:44px 0;
}
.share img{
  float: left;
  width: 30px;
  height: 30px;
  padding: 5px;
  margin-right: 10px;
}
.goback{
  padding-left: 12px;
  font-size: 14px;
  color: #9fa0a0;
  position: relative;
}
.goback:after, .goback:before {
  display: block;
  content: '';
  width: 6px;
  height: 2px;
  background: #b2b2b2;
  position: absolute;
  left: 0;
  top:60%;
}
.goback:before {
   transform: rotate(45deg);
}
.goback:after {
  transform: rotate(135deg);
  top:7px;
}
@media (max-width: 1100px) {
  .main{
    padding: 0 20px;
  }
  .img{
    margin-bottom: 50px;
  }
  .title{
    line-height: 30px;
  }
  .content,.content-title{
    margin-top: 20px;
  }
  .share {
    margin: 10px 0;
  }
  .goback{
    margin-bottom: 15px;
  }
  .content-left,.content-right{
    float: initial;
    width: 100%;
  }
  .mediaDetail{
    margin-bottom: 100px;
  }
}
</style>
