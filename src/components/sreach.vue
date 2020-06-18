<template >
  <div class="container sreach margin">
   <img src="http://image.hanjiazhuang.cn/bg3.png" alt="" class="img"> 
   <div class="container main margin">
     <div class="intro-header">
       <h2 class="t-c">MEDIA FOCUS</h2>
       <p class="t-c">搜寻结果</p>
     </div>
     <div class="container category">
       <p class="title">企业公告</p>
       <ul class="container notice-news" v-for="(item,index) in page_a">
         <router-link :to="{path:'mediaDetail',query:{name:'搜索',id:item.Id}}">
           <li>
             <img src="http://image.hanjiazhuang.cn/bg3.png" alt="" class="notice-left float_left">
             <div class="notice-right float_left">
               <p class="notice-title">{{item.Title}}</p>
               <div style="height:75px;overflow:hidden;">
                 <p class="notice-con" v-html="item.body"></p>
               </div>
               <p class="notice-time">{{item.CreateTime}}</p>
             </div>
           </li>
         </router-link>
       </ul>
       <!--<pagination v-model="page" :records="records" :per-page="perPage" @paginate="recallBack" :options="options" class="page_a"></pagination>-->
     </div>

     <div class="container category">
       <p class="title">媒体聚焦</p>
       <ul class="container list-news"  >
         <li v-for="(item,index) in page_a">
           <a href="" class="news-item">
             <div class="news-item__bg">
             </div>
             <div class="news-item__date">
               <p>{{item.CreateTime}}</p>
               <!--<span>2019</span>-->
             </div>
             <h3 class="news-item__title">
               {{item.Title}}
             </h3>
             <div class="news-item__img img-box">
               <img src="http://image.hanjiazhuang.cn/bg3.png" alt="">
             </div>
           </a>
         </li>
       </ul>
     </div>
     <div class="container category">
       <p class="title">品牌视频</p>
       <ul class="container video-news">
         <li>
           <video src=""></video>
         </li>
         <li>
           <video src=""></video>
         </li>
         <li>
           <video src=""></video>
         </li>
       </ul>
     </div>
     <pagination v-model="page" :records="records" :per-page="perPage" @paginate="recallBack" :options="options" class="page_a"></pagination>
   </div>
  </div>
</template>

<script>
  import 'bootstrap/dist/css/bootstrap.min.css'
export default {
  name: "sreach",
  name:'Pager',
  data() {
    return {
      //msg: "Welcome to Your Vue.js App",
      page_a:[],
        page: 1,   //默认页数
        perPage: 1,  //每页显示多少项
        records: 1, //数据总数
        pageNo: 1,  //当前页码
        options: {
          chunk: 5,    //最多显示多少页
          edgeNavigation: true,   //显示第一页和最后一页链接
        }
    };
    },
    methods: {
        recallBack(index) {
        //console.log(index)
        this.pageNo = index;
        //console.log(this.pageNo)
        this.pagination()
        },
      pagination() {
      var param = window.location.href.split('=')[1];
      var str = decodeURI(param);
      //console.log(str)  
      this.$axios
        .post('http://api.hanjiazhuang.cn/api/content/getarticlesearchlist', {
            "Title": str,
            "PageIndex": 1,
            "PageSize": 5
        })
        .then((res) => {
          //console.log(res)
          this.Pagesize = res.data.data.articlecount;
          this.records = this.Pagesize;
          //console.log( this.records)
          this.perPage = parseInt(3);
          //console.log(this.perPage)
          this.$axios
            .post('http://api.hanjiazhuang.cn/api/content/getarticlesearchlist', {
                "Title": str,
                "PageIndex": this.pageNo,
                "PageSize":  this.perPage
            })
           .then((page) => {
             //console.log(page.data.data.lst_articlesearchlist)
             this.page_a = page.data.data.lst_articlesearchlist;
              })
        })
       
      }
    },
    mounted() {
       this.pagination()
    }
};
</script>

<style scoped>
.sreach {
  margin-bottom: 1%;
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
.intro-header {
  color: #00873c;
}
.intro-header h2 {
  font-size: 34px;
  width: 100%;
}
.intro-header p {
  margin-top: 1em;
  font-size: 30px;
  letter-spacing: 0.06em;
}
.category{
  margin-bottom: 50px;
}
.category .title{
  font-size: 18px;
  color: #000;
  line-height: 26px;
  position: relative;
  margin-bottom: 27px;
}
.category .title::after{
  display: block;
  content: '';
  width: 75px;
	height: 2px;
  background: #00873c;
  position: absolute;
  left:0;
  bottom:-5px;
}
.list-news {
  position: relative;
  font-size: 0;
  margin-right: -12px;
  margin-left: -12px;
}
.list-news li {
  display: inline-block;
  vertical-align: top;
  width: 25%;
}
.news-item {
  position: relative;
  z-index: 1;
  display: block;
  margin: 0 12px 50px;
  padding-top: 50px;
  background-color: #f2f2f2;
}
.news-item__bg {
  position: absolute;
  z-index: -1;
  top: -15px;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
  visibility: hidden;
  opacity: 0;
}
.news-item__bg img {
  display: block;
  width: 100%;
}
.news-item__date {
  position: relative;
  color: gray;
  margin-bottom: 15px;
}
.news-item__date p {
  font: 700 30px/1 "AvenirLTStd";
}
.news-item__date span {
  position: absolute;
  right: 0;
  bottom: 6px;
  font-size: 14px;
}
.news-item__title {
  margin-bottom: 50px;
  font-size: 14px;
  line-height: 30px;
  height: 60px;
  color: gray;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.news-item .news-item__date,
.news-item .news-item__title {
  margin-right: 50px;
  margin-left: 50px;
}
.news-item__img {
  position: relative;
  z-index: 3;
  overflow: hidden;
}
.news-item__img::before {
  content: "";
  display: block;
  padding-top: 60.60606%;
}
.img-box img {
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
}
.news-item:hover {
  background: #00873c;
  color: #fff !important;
}
.news-item:hover .news-item__date,
.news-item:hover .news-item__date p,
.news-item:hover .news-item__date span,
.news-item:hover .news-item__title {
  color: #fff;
}
.notice-news li{
  width: 100%;
  height: 195px;
  background: #efefef;
  margin-bottom: 40px;
}
.notice-news li .notice-left{
  width: 345px;
  height: 100%;
}
.notice-right{
  width: calc(100% - 345px);
  padding: 20px 76px 0 76px;
}
.notice-title{
  font-size: 25px;
  color: #595757;
  line-height: 48px;
  height:50px;
  overflow:hidden;
}
.notice-con{
 font-size: 14px;
 line-height: 28px;
 color: #9fa0a0;
}
.notice-time{
  font-size: 14px;
  color: #00873c;
  margin-top: 10px;
}
.notice-news li:hover{
  background: #00873c;
}
.notice-news li:hover .notice-title,.notice-news li:hover .notice-con,.notice-news li:hover .notice-time{
  color: #fff;
}
.video-news li{
  float: left;
  width: 50%;
  height: 420px;
  padding: 10px;
  margin-bottom: 38px;
}
.video-news li video{
   width: 100%;
   height: 100%;
   background: green;
   -webkit-border-radius: 10px;
   border-radius: 10px;
   -moz-border-radius: 10px;
   -ms-border-radius: 10px;
   -o-border-radius: 10px;
}

  @media(max-width: 375px) {
    .img{
      width: 100%;
      height: auto;
      overflow: hidden;
      margin-bottom: 25px;
    }
    .notice-news li{
        width: 100%;
        height: 88px;
        background: #efefef;
        margin-bottom: 40px;
    }
    .notice-news li .notice-left{
      width: 30%;
      height: 100%;
    }
    .notice-right {
      /* width: calc(100% - 345px); */
      /* padding: 0px 77px 0 0px; */
      border: 0px solid;
      width: 70%;
      height: 100%;
      float: right;
      margin-top: 0%;
      padding: 0px;
      padding-left: 15px;
    }
    .notice-title {
        font-size: 14px;
        color: #595757;
        line-height: 32px;
        height: 33px;
        overflow: hidden;
    }
    .notice-time{
        font-size: 14px;
        color: #00873c;
        margin-top: -53px;
    }
  }

  @media(max-width: 414px) {
     .img{
      width: 100%;
      height: auto;
      overflow: hidden;
      margin-bottom: 25px;
    }
    .notice-news li{
        width: 100%;
        height: 88px;
        background: #efefef;
        margin-bottom: 40px;
    }
    .notice-news li .notice-left{
      width: 30%;
      height: 100%;
    }
    .notice-right {
      /* width: calc(100% - 345px); */
      /* padding: 0px 77px 0 0px; */
      border: 0px solid;
      width: 70%;
      height: 100%;
      float: right;
      margin-top: 0%;
      padding: 0px;
      padding-left: 15px;
    }
    .notice-title{
        font-size: 14px;
        color: #595757;
        line-height: 32px;
        height: 33px;
        overflow: hidden;
    }
    .notice-time{
        font-size: 14px;
        color: #00873c;
        margin-top: -53px;
    }
    .list-news li{
    display: inline-block;
    vertical-align: top;
    width: 50%;
    }
    .news-item .news-item__date, .news-item .news-item__title{
     margin-right: 0px; 
     margin-left: 0px; 
    }
    .news-item__date p {
    font: 700 6px/1 "AvenirLTStd";
    }
    .news-item__title{
    margin-bottom: 24px;
    font-size: 10px;
    }
    .list-news{
    position: relative;
    font-size: 0;
     margin-right: 0px; 
     margin-left: 0px; 
    }
    .news-item{
    margin: 0 12px 22px;
    padding-top: 18px;
    }
    .video-news li {
    height: 200px;
    padding: 10px;
    }
    .category{
    margin-bottom: 13px;
      }
}
  @media(max-width: 768px) {
    .list-news li{
    width: 33.2%;
}
    .list-news{
    margin-right: 0px;
    margin-left: 0px;
}
    .news-item__date p {
    font: 700 21px/1 "AvenirLTStd";
}
    .video-news li{
    height: 300px;
}
  }
  @media(max-width:1024px) {
    .news-item__date p {
    font: 700 22px/1 "AvenirLTStd";
}
    }
</style>
