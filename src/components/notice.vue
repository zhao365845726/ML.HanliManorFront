<template>
  <div class="container notice margin">
    <img src="../assets/img/bg3.png" alt="" class="img"> 
    <div class="container main margin">
       <div class="container  list">
          <div class="intro-header">
            <h2>MEDIA FOCUS</h2>
            <p>庄园理念</p>
          </div>
          <ul class="container notice-list1">
            <li>
              <img src="../assets/img/about_company.jpg" alt="" class="bg">
              <router-link to="/sreach" class="news-item">
                <div class="notice-list1-con">
                  <div class="icon"></div>
                  <span class="tag">MEDIA FOCUS <br>DMKNI</span>
                  <p class="title ellipsis">企业使命</p>
                  <p class="content ellipsis2">里水电费金利科技卡风景，水电费</p>
                </div>
               </router-link>
            </li>
            <li>
              <img src="../assets/img/about_company.jpg" alt="" class="bg">
              <router-link to="/sreach" class="news-item">
                <div class="notice-list1-con">
                  <div class="icon"></div>
                  <span class="tag">MEDIA FOCUS <br>DMKNI</span>
                  <p class="title ellipsis">企业使命</p>
                  <p class="content ellipsis2">里水电费金利科技卡风景，水电费</p>
                </div>
              </router-link>
            </li>
          </ul>
       </div>
       <div class="container list">
          <div class="intro-header">
            <h2>MEDIA FOCUS</h2>
            <p>企业公告</p>
          </div>
          <ul class="container notice-news">
              <li>
                <img src="../assets/img/about_company.jpg" alt="" class="notice-left float_left">
                <router-link to="/sreach" class="news-item">
                  <div class="notice-right float_left">
                    <p class="notice-title ellipsis">韩梨庄园看镂空自己当了飞洒十来款风景</p>
                    <p class="notice-con ellipsis3">2月25日下午，外交部蓝厅举行主题为“新时代的中国：山西新转型 共享新未来”的山西全球推介活动。国务委员兼外长王毅发表致辞，山西省委书记骆惠宁讲话，省长楼阳生进行推介。外交部党委书记齐玉、副部长乐玉成</p>
                    <p class="notice-time">2019-02-27</p>
                  </div>
                </router-link>
              </li>
              <li>
                <img src="../assets/img/about_company.jpg" alt="" class="notice-left float_left">
                <router-link to="/sreach" class="news-item">
                  <div class="notice-right float_left">
                    <p class="notice-title ellipsis">韩梨庄园看镂空自己当了飞洒十来款风景</p>
                    <p class="notice-con ellipsis3">2月25日下午，外交部蓝厅举行主题为“新时代的中国：山西新转型 共享新未来”的山西全球推介活动。国务委员兼外长王毅发表致辞，山西省委书记骆惠宁讲话，省长楼阳生进行推介。外交部党委书记齐玉、副部长乐玉成</p>
                    <p class="notice-time">2019-02-27</p>
                  </div>
                </router-link>
              </li>
          </ul>
       </div>
      </div>
  </div>
</template>

<script>
export default {
  name: "notice",
  data() {
    return {};
  }
};
</script>

<style scoped>
.container{
  overflow: hidden;
}
.notice {
  margin-bottom: 200px;
}
.img {
  width: 100%;
  height: auto;
  overflow: hidden;
}
.main {
  max-width: 1400px;
}
.intro-header {
  color: #00873c;
  margin-top: 72px;
}
.intro-header h2 {
  font-size: 36px;
  width: 100%;
  line-height: 27px;
}
.intro-header p {
  font-size: 33px;
  margin-top: 36px;
}
.notice-list1 {
  margin-top: 50px;
}
.notice-list1 li {
  float: left;
  width: calc((100% - 33px) / 2);
  height: 687px;
  position: relative;
  margin-left: 33px;
}
.notice-list1 li:first-child {
  margin-left: 0;
}
.notice-list1 li .bg {
  width: 100%;
  height: 100%;
}
.notice-list1-con {
  width: 333px;
  height: 353px;
  background-color: rgba(255, 255, 255, 0.6);
  opacity: 0.6;
  padding: 43px 29px;
  position: absolute;
  top: 40px;
  left: 50px;
}
.notice-list1-con .icon {
  width: 55px;
  height: 55px;
  background: url(../assets/img/jiantou.png) no-repeat;
  background-size: 100% 100%;
  margin-bottom: 55px;
}
.notice-list1-con .tag {
  font-size: 32px;
  color: #595757;
  line-height: 32px;
}
.notice-list1-con .title {
  font-size: 24px;
  color: #595757;
  margin: 16px 0;
}
.notice-list1-con .content {
  font-size: 14px;
  color: #595757;
}
.notice-list1-con:hover {
  background: #00873c;
  opacity: 1;
}
.notice-list1-con:hover .icon {
  background: url(../assets/img/jiang.png) no-repeat;
  background-size: 100% 100%;
}
.notice-list1-con:hover .tag,
.notice-list1-con:hover .title,
.notice-list1-con:hover .content {
  color: #fff;
}
.notice-news{
  margin-top: 48px;
}
.notice-news li{
  width: 100%;
  height: 195px;
  background: #efefef;
  margin-bottom: 40px;
}
.notice-news li .notice-left{
  width: 345px;
  height: 100%;
}
.notice-right{
  width: calc(100% - 345px);
  padding: 20px 76px 0 76px;
}
.notice-title{
  font-size: 25px;
  color: #595757;
  line-height: 48px;
}
.notice-con{
 font-size: 14px;
 line-height: 28px;
 color: #9fa0a0;
}
.notice-time{
  font-size: 14px;
  color: #00873c;
  margin-top: 10px;
}
.notice-news li:hover{
  background: #00873c;
}
.notice-news li:hover .notice-title,.notice-news li:hover .notice-con,.notice-news li:hover .notice-time{
  color: #fff;
}
@media (max-width: 1100px) {
  .notice-list1 li{
    height: 500px;
  }
}
@media (max-width: 768px) {
  .main{
    padding: 0 20px;
  }
  .notice{
    margin-bottom: 50px;
  }
  .notice-list1 li{
    float: initial;
    width: 100%;
    height: auto;
    overflow: hidden;
    margin-left:0;
    margin-bottom: 10px;
  }
  .notice-news li{
    height: auto;
  }
  .notice-news li .notice-left{
    float: initial;
    width: 100%;
  }
   .notice-news li .notice-right{
    float: initial;
    width: 100%;
    padding: 10px;
  }
  .intro-header{
    margin-top: 30px;
  }
  .intro-header h2 {
    font-size: 27px;
  }
  .intro-header p {
    font-size: 25px;
    margin-top: 20px;
  }
  .notice-list1,.notice-news{
    margin-top: 20px;
  }  
  .notice-list1-con {
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.6);
    opacity: 0.6;
    padding: 20px 10px;
    position: absolute;
    top: 0;
    left: 0;
  }
  .notice-list1-con .icon{
    width: 30px;
    height: 30px;
    margin-bottom: 10px;
  }
  .notice-list1-con .tag{
    font-size: 25px;
  }
  .notice-list1-con .title{
    font-size: 20px;
    margin:10px 0;
  }
  .notice-title{
    font-size: 20px;
  }
}
</style>
