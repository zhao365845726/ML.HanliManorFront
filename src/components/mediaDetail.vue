<template>
  <div class="container mediaDetail margin">
    <img src="../assets/img/bg2.png" alt="" class="img">
    <div class="container main margin">
      <div class="title">媒体聚焦</div>
      <div class="container content" >
        <div class="content-left">
          <div class="time">{{CreateTime}}</div>
          <!--<div class="content-title"></div>-->
          <div class="content-title">{{title}}</div>
          <p class="share">
            <img src="../assets/img/sp1.png" alt="">
            <img src="../assets/img/sp2.png" alt="">
            <img src="../assets/img/sp3.png" alt="">
          </p>
          <div class="goback" @click="gotogoods">
            返回上一页
          </div>
        </div>
        <div class="content-right">
          <p v-html="Body"></p>
        </div>
        <div class="pageInfo">
          <router-link :to="{path:'mediaDetail',query:{id:id}}" style="text-decoration:none">
            <div class="Prevpage" @click="prev()"><b class="bb">上一篇: {{Title_b}}</b><span></span></div>
          </router-link>
          <router-link :to="{path:'mediaDetail',query:{id:id_a}}" style="text-decoration:none">
            <div class="Nextpage" @click="Next()"><b class="bb_a">下一篇: {{Title_a}}</b><span></span></div>
          </router-link>
          
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
      list_a: [],
      title: '',
      Body: '',
      CreateTime: '',
      Title_a: '',
      Title_b: '',
      Body_a: '',
      Body_a: '',
      id: '',
      id_a:''
       }
    },
    methods: {
      gotogoods() {
        this.$router.go(-1);
      },
      prev() {
        this.Body = this.Body_b;
        this.title = this.Title_b
      },
      Next(index) {
        this.Body = this.Body_a;
         this.title=this.Title_a
      }
    },
    mounted() {
      var param = window.location.href.split('=')[1];
      //console.log(param);
        this.$axios
          .post('http://hlzy.api.milisx.xyz/api/content/getarticledetail', {
            "ArticleId": param
          })
          .then((res_a) => {
            console.log(res_a);
            this.title = res_a.data.data.Title;
            this.Body = res_a.data.data.Body;
            this.CreateTime = res_a.data.data.CreateTime;
            //console.log(this.list_a)
            this.$axios
              .post('http://hlzy.api.milisx.xyz/api/content/getarticledetail', {
                "ArticleId": res_a.data.obj.NextArticleId   //下一页
              })
              .then((res) => {
                console.log(res)
                this.Title_a = res.data.data.Title;
                this.Body_a = res.data.data.Body;
                 this.id_a= res.data.data.Id;
                console.log(this.Body_a)
              })
            this.$axios
              .post('http://hlzy.api.milisx.xyz/api/content/getarticledetail', {
                "ArticleId": res_a.data.obj.PreviousArticleId   //上一页
              })
              .then((res_b) => {
                //console.log(res_b)
                this.Title_b = res_b.data.data.Title;
                this.Body_b = res_b.data.data.Body;
                this.id = res_b.data.data.Id;
                //console.log(this.Title_b)
              })
          })   
    }
};
</script>

<style scoped>
  .bb {
    font-size:16px;
    color:#595757;
    float:right;
  }
   .bb_a {
    font-size: 16px;
    color: #595757;
    float: right;
    margin-right: -9.1%;
    margin-top: 3%;
  }
    .bb:hover {
      color:red;
    }
     .bb_a:hover {
      color:red;
    }
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
