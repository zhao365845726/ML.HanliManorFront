<template>
  <div class="header">
      <div class="headerTitle margin">
         <img src="../assets/img/icon.png" class="icon float_left">
         <div class="container other float_right">
           <a href="" class="taobao float_left"></a>
           <a href="" class="jingdong float_left"></a>
           <div class="container sreach float_left">
             <input id="sreach" class="float_left" placeholder="搜寻韩梨庄园">
             <button class="sreachBtn pointer float_left"></button>
           </div>
           <div class="language float_right">EN / 中文</div>
         </div>
      </div>
     <div class="container header-menu" id="dh">
        <ul class="margin t-c"  >
          <li class="menu-item pointer" v-for="(item,index) in forklifts" :key="index">
            <router-link to="/home" class="menu-link"><!--首页-->{{item.Name}}</router-link>
            <div class="subMenu">
              <div class="subMenu-bg"><span></span></div>
              <ul class="subMenu-ul">
                <li class="subMenu-item" v-for="subitem in daohang" >
                  <router-link to="/description" class="subMenu-link">{{subitem.Name}}</router-link>
                </li>
              </ul>
            </div>
          </li>
          <!--<li class="menu-item pointer">
            <router-link to="" class="menu-link">关于我们</router-link>
            <div class="subMenu">
							<div class="subMenu-bg"><span></span></div>
							<ul class="subMenu-ul">
                <li class="subMenu-item">
                    <router-link to="/description" class="subMenu-link">韩梨庄园介绍</router-link>
                    <router-link to="/brandStory" class="subMenu-link">好山好水好人家</router-link>
                  </li>
              </ul>
						</div>
          </li>
           <li class="menu-item pointer">
             <router-link to="" class="menu-link">产品世界</router-link>
            <div class="subMenu">
							<div class="subMenu-bg"><span></span></div>
							<ul class="subMenu-ul">
                <li class="subMenu-item">
                    <router-link to="/verification" class="subMenu-link">产品验证</router-link>
                    <router-link to="/product_chanpin" class="subMenu-link">所有品类</router-link>
                    <router-link to="/store" class="subMenu-link">线上商城</router-link>
                   
                  </li>
              </ul>
						</div>
          </li>
           <li class="menu-item pointer">
             <router-link to="" class="menu-link">品牌故事</router-link>
            <div class="subMenu">
							<div class="subMenu-bg"><span></span></div>
							<ul class="subMenu-ul">
                <li class="subMenu-item">
                  <router-link to="/rule" class="subMenu-link">村规村规</router-link>
                  <router-link to="/technology" class="subMenu-link">种植技术</router-link>
                  </li>
              </ul>
						</div>
          </li>
           <li class="menu-item pointer">
             <router-link to="" class="menu-link">新闻中心</router-link>
            <div class="subMenu">
							<div class="subMenu-bg"><span></span></div>
							<ul class="subMenu-ul">
                <li class="subMenu-item">
                     <router-link to="/notice" class="subMenu-link">企业公告</router-link>
                    <router-link to="/media" class="subMenu-link">媒体聚焦</router-link>
                    <router-link to="/video" class="subMenu-link">品牌视频</router-link>
                  </li>
              </ul>
						</div>
          </li>
           <li class="menu-item pointer">
             <router-link to="" class="menu-link">联系我们</router-link>
            <div class="subMenu">
							<div class="subMenu-bg"><span></span></div>
							<ul class="subMenu-ul">
                <li class="subMenu-item">
                     <router-link to="/supplier" class="subMenu-link">诚招供应商</router-link>
                    <router-link to="/contact" class="subMenu-link">联系我们</router-link>
                  </li>
              </ul>
						</div>
          </li>-->
        </ul>
      </div>
      <div class="btn-manu" @click="fnClickNav">
        <span></span>
        <span></span>
        <span></span>
        <!--<div class="div1">
          <ul style="display:-webkit-box;">
            <li> <router-link to="/description" class="subMenu-link" style=" margin-top:-9px;">韩梨庄园介绍</router-link></li>
            <li > <router-link to="/brandStory" class="subMenu-link" style=" margin-top:-9px;">好山好水好人家</router-link></li>
            <li><router-link to="/notice" class="subMenu-link" style=" margin-top:-9px;">企业公告</router-link></li>
            <li><router-link to="/product_chanpin" class="subMenu-link" style=" margin-top:-9px;">所有品类</router-link></li>
            <li><router-link to="/contact" class="subMenu-link" style=" margin-top:-9px;">联系我们</router-link></li>
          </ul> 
        </div>-->
      </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        isMouseover: false,
        forklifts: [
        ],
         daohang: [
        ],
        
      }
    },
    mounted() {
     this.$axios
       .post('http://hlzy.api.milisx.xyz/api/content/homenavigation', {
       })
       .then((res) => {
         this.forklifts = res.data.data;
         for (var i = 0; i < res.data.data.length; i++) {
           this.$axios.post('http://hlzy.api.milisx.xyz/api/content/getnavcategorylist', {
             "navid": this.forklifts[i].Id,
            "PageIndex": 0,
            "PageSize": 0
           })
             .then((res_sub) => {
               this.daohang = res_sub.data;
               console.log(this.daohang)
             })
            console.log(this.forklifts[i].Id)
         }
         console.log(this.forklifts)  
       })
    }
  }
</script>
<style scoped>
.header {
  position: relative;
}
.headerTitle {
  max-width: 1060px;
  height: 96px;
  padding: 20px 0 17px 0;
}
  .div1{
  border:0px solid;width:456px;height:26px;margin-top:51px;
  }
    .div1 ul li {
      height:23px;
    }
.icon {
  height: 59px;
}
.other {
  width: 480px;
  padding-top: 6px;
}
.taobao,
.jingdong {
  display: block;
  width: 49px;
  height: 49px;
  background: url(../assets/img/taobao.png) no-repeat;
  background-size: 100% 100%;
  margin-right: 17px;
}
.jingdong {
  background: url(../assets/img/jingdong.png) no-repeat;
  background-size: 100% 100%;
}
.sreach {
  width: 234px;
  height: 31px;
  border-radius: 5px;
  margin: 9px 0 0 4px;
}
#sreach {
  width: 179px;
  height: 100%;
  font-size: 14px;
  color: #c9caca;
  padding-left: 16px;
  border: 1px solid #c9caca;
  border-right: 0;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
}
.sreachBtn {
  width: 55px;
  height: 100%;
  background: #fff url(../assets/img/sreach.png) center center no-repeat;
  background-size: auto 18px;
  border: 1px solid #c9caca;
  border-left: 0;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
}
.language {
  font-size: 14px;
  line-height: 49px;
  color: rgba(0, 0, 0, 0.5);
}
.header-menu {
  background-color: #00873c;
}
.menu-item {
  position: relative;
  display: inline-block;
  vertical-align: top;
}
.menu-link {
  font-size: 15px;
  line-height: 69px;
  color: #fff;
  margin: 0 35px;
}
.subMenu {
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -50px;
  width: 110px;
  background-color: #fff;
  z-index:30;
}
.subMenu-bg {
  position: absolute;
  top: -7px;
  left: 0;
  height: 7px;
  width: 100%;
  overflow: hidden;
}
.subMenu-bg span {
  position: absolute;
  top: 0;
  right: 0;
  height: 2px;
  width: 110px;
  background-color: #fff;
}
.subMenu-link {
  display: block;
  text-align: center;
  margin: 0 6px;
  border-bottom: 1px solid #f2f2f2;
  font-size: 14px;
  line-height: 44px;
  color: gray;
}
.subMenu-link:last-child {
  border-bottom: 0;
}
.btn-manu {
  position: absolute;
  left: 20px;
  top: 20px;
  width: 30px;
  height: 30px;
  padding: 5px;
  display: none;
}
.btn-manu span {
  display: block;
  width: 20px;
  height: 2px;
  background: #00873c;
  margin-top: 3px;
}
.subMenu-link:hover {
  color: #00873c;
}
.menu-item:hover .subMenu {
  visibility: visible;
  opacity: 1;
  -webkit-transform: translateY(0);
  transform: translateY(0);
}
@media (min-width: 769px) {
  .subMenu {
    visibility: hidden;
    opacity: 0;
    -moz-box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.05);
    -webkit-box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.05);
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.05);
    -webkit-transform: translateY(-10px);
    transform: translateY(-10px);
    -webkit-transition: all 0.3s ease;
    transition: all 0.3s ease;
  }
}
@media (max-width: 768px) {
  .headerTitle {
    height: auto;
    overflow: hidden;
  }
  .icon {
    float: initial;
    display: block;
    margin: 0 auto;
    height: 30px;
  }
  .other {
    float: initial;
    display: block;
    margin: 0 auto;
    height: auto;
    width: 100%;
    padding: 0 20px;
    overflow: hidden;
  }
  .taobao,
  .jingdong {
    width: 30px;
    height: 30px;
    margin-top: 9px;
  }
  .sreach {
    width: calc(100% - 170px);
  }
  #sreach {
    width: 75%;
  }
  .sreachBtn {
    width: 25%;
  }
  .btn-manu {
    z-index: 100;
    display: block;
  }
  .header-menu {
    position: fixed;
    top: 50px;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: #fff;
    opacity: 0;
    overflow-y: auto;
    -webkit-transform: translate3d(0, -150%, 0);
    transform: translate3d(0, -150%, 0);
    -webkit-transition: all .3s ease;
    transition: all .3s ease;
}
.menu-item {
    position: relative;
    display: block;
    opacity: 1;
    -webkit-transform: translate3d(0, 20px, 0);
    transform: translate3d(0, 20px, 0);
    -webkit-transition: all .3s ease;
    transition: all .3s ease;
}
.menu-item a{
  display: block;
  border-bottom: 1px solid #ccc;
}
.header-menu.active{
  transform: translate3d(0, 0, 0);
  opacity: 1;
  }
  .menu-link {
    position: relative;
    font-size: 16px;
    line-height: 60px;
    color: gray;
}
.subMenu {
    position: relative;
    top: auto;
    width: 100%;
    height: 0;
    left: 0;
    margin-left: 0;
    margin-right: 0;
    opacity: 0;
    -webkit-transition: all .3s ease;
    transition: all .3s ease;
    padding: 0 35px;
}
.menu-item:hover .subMenu {
  height: auto;
  overflow: hidden;
  visibility: visible;
  opacity: 1;
  -webkit-transform: translateY(0);
  transform: translateY(0);
}
.subMenu-item{
  border-bottom: 1px solid #eee;
}
}
</style>
