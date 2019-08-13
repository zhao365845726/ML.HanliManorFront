<template>
  <div class="container mediaDetail margin">
    <img src="../assets/img/bg2.png" alt="" class="img">
    <div class="container main margin">
      <div class="title">媒体聚焦</div>
      <div class="container content">
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
        <div class="content-right" >
          <div style="width:100%;height:300px;"> <img :src="CoverPhoto" /></div>
          <p v-html="Body"></p>
        </div>
      </div>
      <div class="pageInfo">
        <!--<router-link :to="{path:'mediaDetail',query:{id:this.id}}" style="text-decoration:none">-->
          <div class="Prevpage" @click="prev()"><b class="bb">上一篇: {{Title_b}}</b><span></span></div>
        <!--</router-link>-->
        <!--<router-link :to="{path:'mediaDetail',query:{id:this.id_a}}" style="text-decoration:none">-->
          <div class="Nextpage" @click="Next()"><b class="bb_a">下一篇: {{Title_a}}</b><span></span></div>
        <!--</router-link>-->

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
      CoverPhoto:'',
      Title_a: '',
      Title_b: '',
      Body_a: '',
      Body_b: '',
      id: '',
      id_a:''
       }
    },
    methods: {
      gotogoods() {
        this.$router.go(-1);
      },
      pageInfo() {
        var param = window.location.href.split('=')[2];
        console.log(param);
        var param_a = window.location.href.split('=')[1];
        var str = decodeURI(param_a);
        console.log(str)
        this.$axios
          .post('http://hlzy.api.gpscxqyw.com/api/content/getarticledetail', {
            "ArticleId": param
          })
          .then((res_a) => {
            console.log(res_a);
            this.title = res_a.data.data.Title;
            this.Body = res_a.data.data.Body;
            this.CreateTime = res_a.data.data.CreateTime;
            this.CoverPhoto = res_a.data.data.CoverPhoto;
            //console.log(this.res_a)
            this.$axios
              .post('http://hlzy.api.gpscxqyw.com/api/content/getarticledetail', {
                "ArticleId": res_a.data.obj.NextArticleId   //下一页
              })
              .then((res) => {
                console.log(res)
                this.Title_a = res.data.data.Title;
                this.Body_a = res.data.data.Body;
                 this.id_a= res.data.data.Id;
                //console.log(this.Body_a)
              })
            this.$axios
              .post('http://hlzy.api.gpscxqyw.com/api/content/getarticledetail', {
                "ArticleId": res_a.data.obj.PreviousArticleId   //上一页
              })
              .then((res_b) => {
                console.log(res_b)
                this.Title_b = res_b.data.data.Title;
                this.Body_b = res_b.data.data.Body;
                this.id = res_b.data.data.Id;
                //console.log(this.Title_b)
              })
          })   
      },
      //上一篇
      prev() {
        this.$router.push({
            path:'mediaDetail',query:{id:this.id}
        })
        this.pageInfo()
      },
      //下一篇
      Next() {
         this.$router.push({
            path:'mediaDetail',query:{id:this.id_a}
        })
        this.pageInfo()
      }
    },
    mounted() {
      this.pageInfo()
      //this.$router.go(0)
    }
};
</script>

<style scoped>
  .bb {
    font-size:16px;
    color:#595757;
    float:left;
    margin-left:1%;
     cursor:pointer;
  }
   .bb_a {
    font-size: 16px;
    color: #595757;
    float:right;
    /*margin-left:8%;*/
    cursor:pointer;
  }
    .bb:hover {
      color:red;
    }
     .bb_a:hover {
      color:red;
    }
.mediaDetail {
  margin-bottom: 5%;
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
  margin-left:18px;
}
.content{
  margin-top: 84px;
  margin-bottom:3%;
}
.content-left{
  float: left;
  width: 40%;
  height: auto;
  overflow: hidden;
}
.content-right{
  float: left;
  width: 50%;
  height: auto;
  overflow: hidden;
  margin-left:10%;
}
.content-right img{
  width: 100%;
  margin-bottom: 20px;
  height:-webkit-fill-available;
  cursor:pointer;
}
.content-right p{
  font-size: 14px;
  line-height: 22px;
  color: #595757;
  margin-bottom: 20px;
  margin-top:17px;
}
.time{
  font-size: 31px;
  color: #000000;
  position: relative;
  font-weight:600;
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
  cursor: pointer;
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
