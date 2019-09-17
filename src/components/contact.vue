<template>
  <div class="container contact margin">
    <!--<img src="http://image.hanjiazhuang.cn/%E8%81%94%E7%B3%BB%E6%88%91%E4%BB%AC.png" alt="" class="img">-->
    <img v-for="img in imga" v-lazy="img" alt="" class="img">
    <div class="main margin">
      <h2 class="t-c">MEDIA FOCUS</h2>
      <span class="title t-c">联系我们</span>
      <!--<div class="map"></div>-->

      <div class="amap-page-container">
        <div :style="{width:'100%',height:'566px'}">
          <el-amap vid="amap" :plugin="plugin" class="amap-demo" :center="center" style="height:566px;width:100%;" :zoom="zoom">
            <el-amap-marker :position="center" vid="marker"></el-amap-marker>
            <el-amap-circle vid="circle"
                            :center="center"
                            :radius="radius"
                            fill-opacity="0.2"
                            strokeColor="#38f"
                            strokeOpacity="0.8"
                            strokeWeight="1"
                            fillColor="#38f">
            </el-amap-circle>
          </el-amap>

        </div>
        <div class="toolbar">
          <span v-if="loaded">
            location: lng = {{ lng }} lat = {{ lat }}
          </span>
          <span v-else><!--正在定位--></span>
        </div>
        <div v-on:click="req_post()">
          <!--查询周边-->
        </div>
      </div>

      <ul class="address">
        <li v-for="(item,index) in res">
          <div class="item">
            <span class="address-title">{{item.Title}}</span>
            <p class="address-con">{{item.Abstract}}</p>
            <!--<p class="tel"></p>-->
          </div>
        </li>
      </ul>
      <div class="contact-con">
        <div class="list">
          <span class="list-title">留言标题</span>
          <input type="text" v-model="Title">
        </div>
        <div class="list">
          <span class="list-title">留言内容</span>
          <textarea name="" id="" cols="30" rows="10" v-model="Body"></textarea>
        </div>
        <div class="list">
          <span class="list-title">联系邮箱</span>
          <input type="text" v-model="Email">
        </div>
        <!--<div class="list code">
        <span class="list-title">验证码</span>
        <input type="text">
        <div class="code-con"></div>
      </div>-->
      </div>
      <div class="submit-box">
        <div class="submit float_right t-c" @click="submit">提交</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "contact",
    data() {
            //const self = this;
            let self = this;
            return {
              //center: [112.768327, 35.840101],
              center: [112.765223, 35.838691],
              //lng: 112.765223,
              //lat: 35.838691,
               //center: [121.5273285, 31.21515044],//圆心位置
               radius:200,
              zoom: 14, // 初始化地图时显示的地图放大等级
              loaded: false,
              plugin: [{
                   pName: 'Geolocation',
                   showMarker:false,
                  // events: {
                  //  init(o) {
                  //    //定位成功 自动将marker和circle移到定位点
                  //  o.getCurrentPosition((status, result) => {
                  //    console.log(result);
                  //     if (result && result.position) {
                  //      self.center=[result.position.lng,result.position.lat]
                  //      self.loaded = true; 
                  //      }else{
                  //       console.log(`定位失败`)
                  //      }
                  //  });
                  //    //console.log(o);
                  //  }
                  //}
              }],
              res: [],
              imga: [
                'http://image.hanjiazhuang.cn/%E8%81%94%E7%B3%BB%E6%88%91%E4%BB%AC.png',
              ],
              Title: '',
              Body: '',
              Email:''
            }
    },
    methods: {
      submit() {
        this.$axios
          .post('http://api.hanjiazhuang.cn/api/content/leavingmessage', {
            "Title": this.Title,
            "Body": this.Body,
            "Email": this.Email
          })
          .then((res) => {
            //console.log(res)
            if (res.data.status_code === 200) {
              alert(res.data.status_message)
            } else {
               alert(res.data.status_message)
            }          
          })
      }
    },
    mounted() {
      this.$axios
            .post('http://api.hanjiazhuang.cn/api/content/getcategoryarticlelist', {
              "categoryid": "24d61bb2-7670-40c0-bc62-a5f6324df3d2",
              "PageIndex": 1,
              "PageSize": 10
            })
            .then((res) => {
              this.res = res.data.data.lst_categoryarticlelist;
              //console.log(this.res)
            })
    }
};
</script>

<style scoped>
  .amap-demo {
    height: 300px;
  }
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
  font-weight:600;
}
.title{
  display: block;
  font-size: 33px;
  color: #00873c;
  margin-top: 36px;
}
  .amap-page-container {
    border: 0px solid;
    width: 100%;
    height: 600px;
    background: white;
    margin-top: 90px;
    margin-bottom: 80px;
  }
/*.map{
  width: 100%;
  height: 600px;
  background: #ccc;
  margin-top: 90px;
  margin-bottom: 80px;
}*/
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
    width: 72%;
    line-height: 29px;
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
