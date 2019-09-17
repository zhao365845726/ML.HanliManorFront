<template>
  <div class="container technology margin">
    <!--<img src="http://image.hanjiazhuang.cn/%E7%A7%8D%E6%A4%8D%E6%8A%80%E6%9C%AF.png" alt="" class="img">-->
    <img v-for="img in imga" v-lazy="img" alt="" class="img">
    <div class="container main margin" id="demo">
      <div class="list">
        <div class="intro-header">
          <h2>MEDIA FOCUS</h2>
          <p>庄园理念</p>
        </div>
        <!--<img src="http://image.hanjiazhuang.cn/img2.png" alt="" class="list-img">-->
        <img v-for="img in imgb" v-lazy="img" alt="" class="list-img">
        <ul class="container list-btns">
          <!--<li><img src="http://image.hanjiazhuang.cn/FlSs5tonAlzaGONc7OCDtEPVrEg-" class="img_b" /><p>太阳能驱虫</p></li>
               <li><img src="http://image.hanjiazhuang.cn/Fno9fGEaI4TfCtu2f0ahuyUkmTsW" class="img_b" /><p>人工套袋防虫</p></li>
               <li><img src="http://image.hanjiazhuang.cn/Fp7XBDjMrdBBd2rwOn0PD3XGrJYD" class="img_b" /><p>山泉水灌溉</p></li>
               <li><img src="http://image.hanjiazhuang.cn/FozgQMrCqytOxSPuOda1JBmnA2rD" class="img_b" /><p>自产农家肥</p></li>-->
          <li><img v-for="img in img1" v-lazy="img" class="img_b" /><p>太阳能驱虫</p></li>
          <li><img v-for="img in img2" v-lazy="img" class="img_b" /><p>人工套袋防虫</p></li>
          <li><img v-for="img in img3" v-lazy="img" class="img_b" /><p>山泉水灌溉</p></li>
          <li><img v-for="img in img4" v-lazy="img" class="img_b" /><p>自产农家肥</p></li>
        </ul>
      </div>
      <div class="list">
        <div class="intro-header intro-header2">
          <h2>MEDIA FOCUS</h2>
          <p>产品包装</p>
        </div>
        <!--<img src="http://image.hanjiazhuang.cn/img5.png" alt="" class="list-img">-->
        <img v-for="img in imgc" v-lazy="img" alt="" class="list-img">
        <ul class="container list-btn">
          <!--<li><img src="http://image.hanjiazhuang.cn/FvSP89jlC8NQbqm0WrlFeMVTbk4Q" class="img_a" /></li>
             <li><img src="http://image.hanjiazhuang.cn/FlXf41dEYARghbJQQ5RpsShenYsg" class="img_a" /></li>
             <li><img src="http://image.hanjiazhuang.cn/FjWWUX8BOW3973yhXsXntuMIfuSa" class="img_a" /></li>
             <li><img src="http://image.hanjiazhuang.cn/FvpuvoCqONN-fZ8_MjypTAGW75U-" class="img_a" /></li>-->
          <li><img v-for="img in img5" v-lazy="img" class="img_a" /></li>
          <li><img v-for="img in img6" v-lazy="img" class="img_a" /></li>
          <li><img v-for="img in img7" v-lazy="img" class="img_a" /></li>
          <li><img v-for="img in img8" v-lazy="img" class="img_a" /></li>
        </ul>
      </div>
      <div class="list" style="top:50px;">
        <div class="intro-header intro-header3">
          <h2>MEDIA FOCUS</h2>
          <p>储运发货</p>
        </div>
        <!--<img src="http://image.hanjiazhuang.cn/bg6%20%284%29.png" alt="" class="list-img">-->
        <img v-for="img in imgd" v-lazy="img" alt="" class="list-img">
        <ul class="container list-btn">
          <!--<li><img src="http://image.hanjiazhuang.cn/FjsyP424Iy_85FEmwmHq-UNAocyF" class="img_a" /></li>
               <li><img src="http://image.hanjiazhuang.cn/Fi2DUFNHZbwoJ4HzyCLKpp0f6tbi" class="img_a" /></li>
               <li><img src="http://image.hanjiazhuang.cn/Ft9ausd23bXVnIRK13_Th7yZEFcF" class="img_a" /></li>
               <li><img src="http://image.hanjiazhuang.cn/FuLoULzb135H-GRWp5fwge1ek7vy" class="img_a" /></li>-->
          <li><img v-for="img in img9" v-lazy="img" class="img_a" /></li>
          <li><img v-for="img in img10" v-lazy="img" class="img_a" /></li>
          <li><img v-for="img in img11" v-lazy="img" class="img_a" /></li>
          <li><img v-for="img in img12" v-lazy="img" class="img_a" /></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "technology",
  data() {
    return {
      imga: ['http://image.hanjiazhuang.cn/%E7%A7%8D%E6%A4%8D%E6%8A%80%E6%9C%AF.png'],
      imgb: ['http://image.hanjiazhuang.cn/img2.png'],
      imgc: ['http://image.hanjiazhuang.cn/img5.png'],
      imgd:['http://image.hanjiazhuang.cn/bg6%20%284%29.png'],
      img1:['http://image.hanjiazhuang.cn/FlSs5tonAlzaGONc7OCDtEPVrEg-'],
      img2:['http://image.hanjiazhuang.cn/Fno9fGEaI4TfCtu2f0ahuyUkmTsW'],
      img3:['http://image.hanjiazhuang.cn/Fp7XBDjMrdBBd2rwOn0PD3XGrJYD'],
      img4:['http://image.hanjiazhuang.cn/FozgQMrCqytOxSPuOda1JBmnA2rD'],
      img5:['http://image.hanjiazhuang.cn/FvSP89jlC8NQbqm0WrlFeMVTbk4Q'],
      img6:['http://image.hanjiazhuang.cn/FlXf41dEYARghbJQQ5RpsShenYsg'],
      img7:['http://image.hanjiazhuang.cn/FjWWUX8BOW3973yhXsXntuMIfuSa'],
      img8:['http://image.hanjiazhuang.cn/FvpuvoCqONN-fZ8_MjypTAGW75U-'],
      img9:['http://image.hanjiazhuang.cn/FjsyP424Iy_85FEmwmHq-UNAocyF'],
      img10:['http://image.hanjiazhuang.cn/Fi2DUFNHZbwoJ4HzyCLKpp0f6tbi'],
      img11:['http://image.hanjiazhuang.cn/Ft9ausd23bXVnIRK13_Th7yZEFcF'],
      img12:['http://image.hanjiazhuang.cn/FuLoULzb135H-GRWp5fwge1ek7vy'],
    }
  },
  mounted() {
    this.$axios
      .post('http://api.hanjiazhuang.cn/api/content/getcategoryarticlelist', {
          "categoryid": "b6b4e273-fe79-4a92-9232-05d48696b2af",
          "PageIndex": 1,
          "PageSize": 20
      })
      .then((res) => {
        console.log(res)
      })
     document.querySelector('#demo').scrollIntoView(true);
  }
  
};
</script>

<style scoped>
.container{
  overflow: hidden;
}
.technology {
  margin-bottom: 100px;
}
  .img_a {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 1px solid #00873c;
    top: 0;
    left: 0;
    transition:all 0.3s ease-out;
    -moz-transition:all 0.3s ease-out;
    -webkit-transition:all 0.3s ease-out;
    -o-transition:all 0.3s ease-out;
  }
  .img_b {
    width: 100%;
    height: 86%;
    border-radius: 50%;
    border: 1px solid #00873c;
    top: 0;
    left: 0;
    transition:all 0.3s ease-out;
    -moz-transition:all 0.3s ease-out;
    -webkit-transition:all 0.3s ease-out;
    -o-transition:all 0.3s ease-out;
  }
.img {
  width: 100%;
  height: auto;
  overflow: hidden;
  margin-bottom: 114px;
}
.main{
  max-width: 1400px;
}
.list{
  position: relative;
  margin-bottom: 75px;
}
.intro-header{
  position: absolute;
  left: 40px;
  top:40px;
  z-index: 2;
}
.intro-header2{
  left: initial;
  right: 40px;
}
.intro-header h2{
  font-size: 36px;
  line-height: 27px;
  color: #00873c;
  font-weight:600;
}
  .intro-header3 {
    right:0;
    top:1px;

  }
.intro-header p{
  font-size: 33px;
  margin-top: 36px;
  color: #00873c;
}
.list .list-img{
  width: 100%;
  height: auto;
  overflow: hidden;
  margin-bottom: 84px;
  cursor:-webkit-zoom-in;
}
.list-btn{
  display: flex;
  display: -webkit-flex;
  justify-content: space-around;
}
.list-btn li{
  width: 280px;
  height: 280px;
  /*background: #12aa00;*/
  border-radius: 50%;
  cursor:pointer;
   transition:all 0.3s ease-out;
    -moz-transition:all 0.3s ease-out;
    -webkit-transition:all 0.3s ease-out;
    -o-transition:all 0.3s ease-out;
}
  .list-btns {
  display: flex;
  display: -webkit-flex;
  justify-content: space-around;
  }
  .list-btns li {
  width: 280px;
  height: auto;
  border-radius: 50%;
  cursor:pointer;
  padding-bottom:17px;
     transition:all 0.3s ease-out;
    -moz-transition:all 0.3s ease-out;
    -webkit-transition:all 0.3s ease-out;
    -o-transition:all 0.3s ease-out;
  }
    .list-btns li .img_b:hover {
      transform:scale(0.95,0.95);
      border:none;
    }
    .list-btns li p {
    text-align: center;
    margin-top: 16px;
    color: #00873C;
    font-weight: 600;
    }
  .list-btn li .img_a:hover {
    transform:scale(0.95,0.95);
      border:none;
  }
@media (max-width: 1440px) {
  .list-btn li{
    width: 230px;
    height: 230px;
  }
}
@media (max-width: 1200px) {
  .list-btn li{
    width: 200px;
    height: 200px;
  }
}
@media (max-width: 1100px) {
  .list-btn li{
    width: 180px;
    height: 180px;
  }
}
@media (max-width: 900px) {
  .list-btn li{
    width: 150px;
    height: 150px;
  }
  .intro-header {
    left: 20px;
    top: 20px;
  }
  .intro-header h2 {
    font-size: 27px;
    line-height: initial;
  }
  .intro-header p {
    font-size: 25px;
    margin-top: 20px;
  }
}
@media (max-width: 768px) {
  .main{
    padding: 0 10px;
  }
  .intro-header{
    position: static;
  }
  .list{
    margin-bottom: 30px;
  }
  .list .list-img{
    margin: 20px 0;
  }
  .list-btn li{
    width: 60px;
    height: 60px;
  }
  .intro-header h2 {
    font-size: 20px;
    line-height: initial;
  }
  .intro-header p {
    font-size: 18px;
    margin-top: 10px;
  }
  .technology{
    margin-bottom: 50px;
  }
}
</style>
