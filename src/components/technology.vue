<template>
  <div class="container technology margin">
   <img src="../assets/img/bg6.png" alt="" class="img"> 
   <div class="container main margin">
     <div class="list">
       <div class="intro-header">
         <h2>MEDIA FOCUS</h2>
         <p>庄园理念</p>
       </div>
       <img src="../assets/img/img2.png" alt="" class="list-img">
       <ul class="container list-btn">
         <li><img src="http://image.jmta.milisx.com/Fl4-TfG0eZ8VR6cyvtiRdGYbrCSn" class="img_a" /></li>
         <li><img src="http://image.jmta.milisx.com/FiPbTT6czFQg5lH0qu_YeQPktMpN" class="img_a" /></li>
         <li><img src="http://image.jmta.milisx.com/lu1TbzpLUNbj-nO_Zs2dBR2y5-h5" class="img_a" /></li>
         <li><img src="http://image.jmta.milisx.com/lsWRClkUMwBKIahbYzWKNMmzF20k" class="img_a" /></li>
       </ul>
     </div>
     <div class="list">
       <div class="intro-header intro-header2">
         <h2>MEDIA FOCUS</h2>
         <p>产品包装</p>
       </div>
       <img src="../assets/img/img5.png" alt="" class="list-img">
       <ul class="container list-btn">
         <li><img src="http://image.jmta.milisx.com/lnw9tnICRJbBcw5Isrz_KwgR_f5L" class="img_a" /></li>
         <li><img src="http://image.jmta.milisx.com/llA_7dSKM5eRZfdVgStX7s3y9yvf" class="img_a" /></li>
         <li><img src="http://image.jmta.milisx.com/Fq43h0jXcsZqB-GEJhEa6lPw128Z" class="img_a" /></li>
         <li><img src="http://image.jmta.milisx.com/FufcvqZ5EzKW7abLem1Ys4Z5YuQE" class="img_a" /></li>
       </ul>
     </div>
     <div class="list"  style="top:50px;">
       <div class="intro-header intro-header3">
         <h2>MEDIA FOCUS</h2>
         <p>储运发货</p>
       </div>
       <img src="../assets/img/bg6 (4).png" alt="" class="list-img">
       <ul class="container list-btn">
         <li><img src="http://image.jmta.milisx.com/lnw9tnICRJbBcw5Isrz_KwgR_f5L" class="img_a" /></li>
         <li><img src="http://image.jmta.milisx.com/llA_7dSKM5eRZfdVgStX7s3y9yvf" class="img_a" /></li>
         <li><img src="http://image.jmta.milisx.com/Fq43h0jXcsZqB-GEJhEa6lPw128Z" class="img_a" /></li>
         <li><img src="http://image.jmta.milisx.com/FufcvqZ5EzKW7abLem1Ys4Z5YuQE" class="img_a" /></li>
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
    //this.$axios
    //  .post('http://hlzy.api.milisx.xyz/api/content/getcategoryarticlelist', {
    //      "categoryid": "b6b4e273-fe79-4a92-9232-05d48696b2af",
    //      "PageIndex": 1,
    //      "PageSize": 10
    //  })
    //  .then((res) => {
    //    console.log(res)
    //  })
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
  }
.img {
  width: 100%;
  height: auto;
  overflow: hidden;
  margin-bottom: 22px;
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
  background: #12aa00;
  border-radius: 50%;
  cursor:pointer;
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
