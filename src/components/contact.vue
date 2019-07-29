<template>
  <div class="container contact margin">
     <img src="../assets/img/bg2.png" alt="" class="img">
     <div class="main margin">
       <h2 class="t-c">MEDIA FOCUS</h2>
       <span class="title t-c">联系我们</span>
       <div class="map"></div>
       <ul class="address">
         <li>
           <div class="item">
              <span class="address-title">韩梨庄园（基地）</span>
              <p class="address-con">山西晋城高平市野川镇韩家庄村民委员会</p>
              <p class="tel">庄园电话：020-351548</p>
           </div>
         </li>
          <li>
           <div class="item margin">
              <span class="address-title">韩梨庄园（基地）</span>
              <p class="address-con">山西晋城高平市野川镇韩家庄村民委员会</p>
              <p class="tel">庄园电话：020-351548</p>
           </div>
         </li>
          <li>
           <div class="item float_right">
              <span class="address-title">韩梨庄园（基地）</span>
              <p class="address-con">山西晋城高平市野川镇韩家庄村民委员会</p>
              <p class="tel">庄园电话：020-351548</p>
           </div>
         </li>
       </ul>
       <div class="contact-con">
         <div class="list">
           <span class="list-title">留言标题</span>
           <input type="text">
         </div>
         <div class="list">
           <span class="list-title">留言内容</span>
           <textarea name="" id="" cols="30" rows="10"></textarea>
         </div>
         <div class="list">
           <span class="list-title">联系邮箱</span>
           <input type="text">
         </div>
         <div class="list code">
           <span class="list-title">验证码</span>
           <input type="text">
           <div class="code-con"><!--b0a5--></div>
         </div>
       </div>
       <div class="submit-box">
         <div class="submit float_right t-c">提交</div>
       </div>
     </div>
  </div>
</template>

<script>
export default {
  name: "contact",
  data() {
    return {
    }
  }
};
</script>

<style scoped>
.img{
  width: 100%;
  margin-bottom: 114px;
}
.main{
  max-width: 1400px;
  width: auto;
  height: auto;
  overflow: hidden;
  margin-bottom:5%;
}
h2{
  font-size: 36px;
  line-height: 27px;
  color: #00873c;
}
.title{
  display: block;
  font-size: 33px;
  color: #00873c;
  margin-top: 36px;
}
.map{
  width: 100%;
  height: 600px;
  background: #ccc;
  margin-top: 90px;
  margin-bottom: 80px;
}
.address{
  width: 100%;
  height: auto;
  overflow: hidden;
  margin-bottom: 70px;
}
.address li{
  float: left;
  width: 33.33%;
  height: 162px;
  position: relative;
}
.address li::before{
  display: block;
  content: '';
  width: 1px;
	height: 162px;
	background-color: #9fa0a0;
  position: absolute;
  left:0;
  top:0;
}
.address li:first-child::before{
  display: none;
}
.item{
  width: 100%;
  height: 100%;
  overflow: hidden;
  padding-left: 10%;
}
.address-title{
  display: block;
  width: 100%;
	height: 70px;
	font-size: 25px;
	color: #000000;
  position: relative;
}
.address-title::after{
  display: block;
  content: '';
  width: 100px;
	height: 1px;
	background-color: #9fa0a0;
  position: absolute;
  left:0;
  top:40px;
}
.address li p{
  font-size: 16px;
	color: #9fa0a0; 
}
.tel{
  margin-top: 35px;
}
.contact-con .list{
  width: 100%;
  height: auto;
  overflow: hidden;
  margin-bottom:20px;
}
.list-title{
  display: block;
  font-size: 16px;
  color: #9fa0a0;
  margin-bottom: 10px;
}
.contact-con input{
  display: block;
  width: 100%;
  height: 38px;
  font-size: 16px;
  line-height: 38px;
  background-color: #efefef;
	border: solid 1px #c9caca;
  padding: 0 10px;
}
.contact-con textarea{
  display: block;
  width: 100%;
  height: 120px;
  font-size: 16px;
  line-height: 38px;
  background-color: #efefef;
	border: solid 1px #c9caca;
  outline: none;
  resize:none; 
  padding:10px;
}
.code input{
  float: left;
  width: calc(100% - 115px);
}
.code .code-con{
  float: left;
  width: 115px;
  height: 38px;
  font-size: 16px;
  text-align: center;
  line-height: 38px;
  background: #ccc;
  letter-spacing: 3px;
}
.submit-box{
  width: 100%;
  height: 38px;
}
.submit{
  width: 93px;
	height: 38px;
  font-size: 16px;
  color: #fff;
  line-height: 38px;
	background-color: #00873c;
  border-radius: 10px;
  cursor:pointer;
}
@media (max-width: 1250px) {
  .main{
    padding: 0 20px;
  }
}
@media (max-width: 1100px) {
  .address li{
    float: initial;
    width: 100%;
    height: auto;
    padding-left: 50px;
    margin-bottom: 20px;
  }
  .address li:first-child::before{
    display: block;
  }
}
@media (max-width: 786px) {
  .img{
    margin-bottom: 50px;
  }
  .main{
    margin-bottom: 50px;
    padding: 0 10px;
  }
  h2{
    font-size: 27px;
  }
  .title{
    font-size: 25px;
    margin-top: 18px;
}
.item{
  padding-left: 0;
}
  .map{
    height: 200px;
    margin-top: 45px;
    margin-bottom: 40px;
  }
  .address-title{
    font-size: 20px;
    height: 60px;
  }
  .address li p{
    margin-top: 15px;
  }
  .address li{
    margin-bottom: 20px;
    padding-left: 20px;
  }
  .address li::before{
    height: 100%;
  }
  .address li .float_right{
    float: initial;
  }
  .address{
    margin-bottom: 35px;
  }
}
</style>
