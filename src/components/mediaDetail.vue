<template>
  <div class="container mediaDetail margin">
    <img src="../assets/img/bg2.png" alt="" class="img">
    <div class="container main margin">
      <div class="title">媒体聚焦</div>
      <div class="container content" >
        <div class="content-left">
          <div class="time">03.05 <span>2019</span></div>
          <!--<div class="content-title"></div>-->
          <div class="content-title" v-for="(item,index) in list"><!--韩梨庄园里水电费空间-->{{item.Title}}</div>
          <p class="share">
            <img src="../assets/img/sp1.png" alt="">
            <img src="../assets/img/sp2.png" alt="">
            <img src="../assets/img/sp3.png" alt="">
          </p>
          <div class="goback">
            <router-link :to="{path:'media',query:{name:'媒体聚焦',id:'37a17e18-c055-43e6-80be-147a81e78350'}}" class="link_a">返回列表</router-link>
          </div>
        </div>
        <div class="content-right">
          <img src="../assets/img/bg2.png" alt="">
          <!--<p>{{list_a}}</p>-->
          <img src="../assets/img/bg2.png" alt="">
          <!--<p>{{list_a}}</p>-->
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
      msg: "Welcome to Your Vue.js App",
      list: [],
      list_a:[]
       }
    },
    mounted() {
      this.$axios
      .post('http://hlzy.api.milisx.xyz/api/content/getcategoryarticlelist', {
        "categoryid": "37a17e18-c055-43e6-80be-147a81e78350",
        "PageIndex": 1,
        "PageSize":20
      })
      .then((res) => {
        this.list = res.data.data.lst_categoryarticlelist;
        console.log(this.list)
        this.$axios
          .post('http://hlzy.api.milisx.xyz/api/content/getarticledetail', {
            "ArticleId": this.list.Id
          })
          .then((res_a) => {
            this.list_a = res_a.data.data.Title;
            console.log(this.list_a)
          })    
      })
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
 .link_a {
    color:black;
  }
 .link_a:hover {
    color:red;
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
