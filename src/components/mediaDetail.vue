<template>
  <div class="container mediaDetail margin">
    <!--<img src="http://image.hanjiazhuang.cn/%E8%81%94%E7%B3%BB%E6%88%91%E4%BB%AC.png" alt="" class="img">-->
    <img  v-for="img in imgd" v-lazy="img" alt="" class="img">
    <div class="container main margin">
      <div class="title" id="demo">{{this.str}}</div>
      <div class="container content">
        <div class="content-left">
          <div class="time">
            {{this.yue}}.{{this.ri}}
            <span class="nian">{{this.nian}}</span>
          </div>
          <!--<div class="content-title"></div>-->
          <div class="content-title">{{title}}</div>
          <p class="share">
            <!--<img src="http://image.hanjiazhuang.cn/sp1.png" alt="">
          <img src="http://image.hanjiazhuang.cn/sp2.png" alt="">
          <img src="http://image.hanjiazhuang.cn/sp3.png" alt="">-->
            <img v-for="img in imga" v-lazy="img" alt="">
            <img v-for="img in imgb" v-lazy="img" alt="">
            <img v-for="img in imgc" v-lazy="img" alt="">
          </p>
          <div class="goback" @click="gotogoods">
            返回上一页
          </div>
        </div>
        <div class="content-right">
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
      imgd: [
        'http://image.hanjiazhuang.cn/%E8%81%94%E7%B3%BB%E6%88%91%E4%BB%AC.png'
      ],
      imga: [
        'http://image.hanjiazhuang.cn/sp1.png',     
      ],
      imgb: [
         'http://image.hanjiazhuang.cn/sp2.png',
      ],
      imgc: [
         'http://image.hanjiazhuang.cn/sp3.png'
      ],   
      list: [],
      list_a: [],
      title: '',
      Body: '',
      //CreateTime: '',
      CoverPhoto:'',
      Title_a: '',
      Title_b: '',
      Body_a: '',
      Body_b: '',
      id: '',
      id_a: '',
      str: '',
      nian: '',
      yue: '',
      ri:''
       }
    },
    methods: {
      gotogoods() {
        this.$router.go(-1);
      },
      pageInfo() {
        var param = window.location.href.split('=')[2];
        //console.log(param);
        var param_a = window.location.href.split('=')[1];
        var str = param_a.split('&')[0];
        var s = decodeURI(str);
        //console.log(s)
        this.str = s;
        this.$axios
          .post('http://api.hanjiazhuang.cn/api/content/getarticledetail', {
            "ArticleId": param
          })
          .then((res_a) => {
            //console.log(res_a);
            this.title = res_a.data.data.Title;
            this.Body = res_a.data.data.Body;
            //this.CreateTime = res_a.data.data.CreateTime;
            this.CoverPhoto = res_a.data.data.CoverPhoto;
            var time = res_a.data.data.CreateTime.split('-');
            var nian = time[0];
            var yue = time[1];
            var ri = time[2];
            //console.log(ri)
            //console.log(this.res_a)
            this.nian = nian;
            this.yue = yue;
            this.ri = ri;
            this.$axios
              .post('http://api.hanjiazhuang.cn/api/content/getarticledetail', {
                "ArticleId": res_a.data.obj.NextArticleId   //下一页
              })
              .then((res) => {
                //console.log(res)
                this.Title_a = res.data.data.Title;
                this.Body_a = res.data.data.Body;
                 this.id_a= res.data.data.Id;
                //console.log(this.Body_a)
              })
            this.$axios
              .post('http://api.hanjiazhuang.cn/api/content/getarticledetail', {
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
      },
      //上一篇
      prev() {
        this.$router.push({
            path:'mediaDetail',query:{name:'上一篇',id:this.id}
        })
        this.pageInfo()
        document.querySelector('#demo').scrollIntoView(true);
      },
      //下一篇
      Next() {
         this.$router.push({
            path:'mediaDetail',query:{name:'下一篇',id:this.id_a}
        })
        this.pageInfo()
        document.querySelector('#demo').scrollIntoView(true);
      }
    },
    mounted() {
      this.pageInfo()
      //this.$router.go(0)
      document.querySelector('#demo').scrollIntoView(true);
    }
};
</script>

<style scoped>
  .bb {
    font-size:16px;
    color:#595757;
    float:left;
    /*margin-left:1%;*/
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
      color:#00873C;
    }
     .bb_a:hover {
      color:#00873C;
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
  margin-bottom: 114px;
}
.main {
  max-width: 1400px;
}
.title{
  font-size: 14px;
  color: #000000;
  line-height: 56px;
  /*margin-left:18px;*/
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
  font-size: 13px;
    position: absolute;
    right: 0%;
    bottom: 0px;
    /* border: 1px solid; */
    /* margin-top: 0px; */
    /* top: -22px; */
    line-height: 41px;
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
