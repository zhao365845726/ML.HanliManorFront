<template>
  <div class="container technology margin">
   <img src="../assets/img/种植技术.png" alt="" class="img"> 
   <div class="container main margin" id="demo">
     <div class="list">
       <div class="intro-header">
         <h2>MEDIA FOCUS</h2>
         <p>庄园理念</p>
       </div>
       <img src="../assets/img/img2.png" alt="" class="list-img">
       <ul class="container list-btns">
         <li><img src="http://image.jmta.milisx.com/Fp7XBDjMrdBBd2rwOn0PD3XGrJYD" class="img_b" /><p>太阳能驱虫</p></li>    
         <li><img src="http://image.jmta.milisx.com/FlSs5tonAlzaGONc7OCDtEPVrEg-" class="img_b" /><p>人工套袋防虫</p></li>
         <li><img src="http://image.jmta.milisx.com/Fno9fGEaI4TfCtu2f0ahuyUkmTsW" class="img_b" /><p>山泉水灌溉</p></li>
         <li><img src="http://image.jmta.milisx.com/FozgQMrCqytOxSPuOda1JBmnA2rD" class="img_b" /><p>自产农家肥</p></li>
       </ul>
     </div>
     <div class="list">
       <div class="intro-header intro-header2">
         <h2>MEDIA FOCUS</h2>
         <p>产品包装</p>
       </div>
       <img src="../assets/img/img5.png" alt="" class="list-img">
       <ul class="container list-btn">
         <li><img src="http://image.jmta.milisx.com/FjWWUX8BOW3973yhXsXntuMIfuSa" class="img_a" /></li>
         <li><img src="http://image.jmta.milisx.com/FvpuvoCqONN-fZ8_MjypTAGW75U-" class="img_a" /></li>
         <li><img src="http://image.jmta.milisx.com/FvSP89jlC8NQbqm0WrlFeMVTbk4Q" class="img_a" /></li>
         <li><img src="http://image.jmta.milisx.com/FlXf41dEYARghbJQQ5RpsShenYsg" class="img_a" /></li>
       </ul>
     </div>
     <div class="list"  style="top:50px;">
       <div class="intro-header intro-header3">
         <h2>MEDIA FOCUS</h2>
         <p>储运发货</p>
       </div>
       <img src="../assets/img/bg6 (4).png" alt="" class="list-img">
       <ul class="container list-btn">
         <li><img src="http://image.jmta.milisx.com/FsvzFiB5VSL-VFImhE9dsv1mjOts" class="img_a" /></li>
         <li><img src="http://image.jmta.milisx.com/Ft9ausd23bXVnIRK13_Th7yZEFcF" class="img_a" /></li>
         <li><img src="http://image.jmta.milisx.com/FkH1zTzy9Luitf0_hGne89aphuw7" class="img_a" /></li>
         <li><img src="http://image.jmta.milisx.com/FjsyP424Iy_85FEmwmHq-UNAocyF" class="img_a" /></li>
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
    }
  },
  mounted() {
    this.$axios
      .post('http://hlzy.api.gpscxqyw.com/api/content/getcategoryarticlelist', {
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
