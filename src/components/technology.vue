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
         <li></li>
         <li></li>
         <li></li>
         <li></li>
       </ul>
     </div>
      <div class="list">
       <div class="intro-header intro-header2">
          <h2>MEDIA FOCUS</h2>
          <p>产品包装</p>
        </div>
       <img src="../assets/img/img5.png" alt="" class="list-img">
       <ul class="container list-btn">
         <li></li>
         <li></li>
         <li></li>
         <li></li>
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
