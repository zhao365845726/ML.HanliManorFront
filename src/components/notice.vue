<template>
  <div class="container notice margin">
    <img src="../assets/img/bg3.png" alt="" class="img"> 
    <div class="container main margin">
      <div class="container  list">
        <div class="intro-header">
          <h2>MEDIA FOCUS</h2>
          <p>庄园理念</p>
        </div>
        <ul class="container notice-list1">
          <li>
            <img :src="sm_cp" class="bg">
            <router-link :to="{path:'mediaDetail',query:{id:'67bc35b4-1097-4a58-acac-28d18f082ca4'}}" class="news-item">
              <div class="notice-list1-con">
                <div class="icon"></div>
                <span class="tag">MEDIA FOCUS <br>DMKNI</span>
                <p class="title ellipsis">{{sm_title}}</p>
                <p class="content ellipsis2" v-html="sm_body"></p>
              </div>
            </router-link>
          </li>
          <li>
            <img :src=" yj_cp" class="bg">
            <router-link  :to="{path:'mediaDetail',query:{id:'88f84c01-2c5e-456d-89ff-d9b9b7a151ce'}}" class="news-item">
              <div class="notice-list1-con">
                <div class="icon"></div>
                <span class="tag">MEDIA FOCUS <br>DMKNI</span>
                <p class="title ellipsis">{{yj_title}}</p>
                <p class="content ellipsis2" v-html="yj_body"></p>
              </div>
            </router-link>
          </li>

        </ul>
      </div>
      <div class="container list">
        <div class="intro-header">
          <h2>MEDIA FOCUS</h2>
          <p>企业公告</p>
        </div>
        <ul class="container notice-news">
          <li v-for="(item,index) in page_a">
            <router-link :to="{path:'mediaDetail',query:{id:item.Id}}" class="news-item">
              <img :src="item.CoverPhoto" class="notice-left float_left">
              <div class="notice-right float_left">
                <p class="notice-title ellipsis"> {{item.Title}}</p>
                <!--<div style="height: 75px;overflow: hidden;padding-top:10px;margin-top:-15px;" class="div">
      <p class="notice-con ellipsis3" v-if="item.Title==='公司党总支组织开展讲党课活动'" v-html="media_b"></p>
      <p class="notice-con ellipsis3" v-if="item.Title==='高平市干部入企服务第15小组莅临公司调研指导工作'" v-html="media_c"></p>
      <p class="notice-con ellipsis3" v-if="item.Title==='公司党总支召开“改革创新、奋发有为”大讨论 动员部署会议'" v-html="media_d"></p>
      <p class="notice-con ellipsis3" v-if="item.Title==='公司党总支组织召开2018年度领导班子 专题民主生活会'" v-html="media_e"></p>
      <p class="notice-con ellipsis3" v-if="item.Title==='公司党总支组织集中观看《榜样3》'" v-html="media_f"></p>
    </div>-->
                <p class="notice-time">{{item.CreateTime}}</p>
              </div>
            </router-link>
          </li>

        </ul>
        <pagination v-model="page"  :records="records" :per-page="perPage"  @paginate="recallBack" :options="options" class="page_a"></pagination>
      </div>
    </div>
  </div>
</template>
<!--<script src=".\assets\js\jqPaginator.js"></script>-->
<script>
  import 'bootstrap/dist/css/bootstrap.min.css'
  export default {
    name: "notice",
    name:'Pager',
    data() {
      return {
        page_a:[],
        sm_cp: '',
        sm_title: '',
        sm_body: '',
        yj_cp: '',
        yj_title: '',
        yj_body: '',
        page: 1,   //默认页数
        perPage: 0,  //每页显示多少项
        records: 0, //数据总数
        pageNo: 1,  //当前页码
        options: {
          chunk: 5,    //最多显示多少页
          edgeNavigation: true,   //显示第一页和最后一页链接
        }
      }
     },
    methods: {
      recallBack(index) {
        //console.log(index)
        this.pageNo = index;
        //console.log(this.pageNo)
        this.pagination()
      },
      pagination() {
        var param = window.location.href.split('=')[2];
        //console.log(param)
        this.$axios
          .post('http://hlzy.api.gpscxqyw.com/api/content/getcategoryarticlelist', {
            "categoryid": "cd5c323e-5d09-41f6-82b7-9a98b2431370",
            "PageIndex": 1,
            "PageSize": 100
          })
          .then((res) => {
            //console.log(res)
            this.Pagesize = res.data.data.articlecount;
            this.records = this.Pagesize;
            this.perPage = parseInt(5);
            //console.log(this.perPage)
            //console.log(this.records)
            this.$axios
              .post('http://hlzy.api.gpscxqyw.com/api/content/getcategoryarticlelist', {
                "categoryid": param,
                "PageIndex": this.pageNo,
                "PageSize": this.perPage
              })
              .then((page) => {
                console.log(this.pageNo)
                console.log(page)
                this.page_a = page.data.data.lst_categoryarticlelist;
              })
            this.$axios
              .post('http://hlzy.api.gpscxqyw.com/api/content/getarticledetail', {
                "ArticleId": '67bc35b4-1097-4a58-acac-28d18f082ca4'
              })
              .then((res_sm) => {
                this.sm = res_sm.data.data;
                this.sm_cp = res_sm.data.data.CoverPhoto;
                this.sm_title = res_sm.data.data.Title;
                this.sm_body = res_sm.data.data.Body;
                //console.log(this.sm);
              })
            this.$axios
              .post('http://hlzy.api.gpscxqyw.com/api/content/getarticledetail', {
                "ArticleId": '88f84c01-2c5e-456d-89ff-d9b9b7a151ce'
              })
              .then((res_yj) => {
                this.yj = res_yj.data.data;
                this.yj_cp = res_yj.data.data.CoverPhoto;
                this.yj_title = res_yj.data.data.Title;
                this.yj_body = res_yj.data.data.Body;
                //console.log(this.yj);
              })
          })
      }
    },
    mounted() {
      this.pagination();
    }
};
</script>




<style scoped>
  /*分页*/
  .pager>span,.pager>a,.pager>select,.pager>div{
    float: left;
    margin-left: 10px;
}
.pager{
    width: 600px;
    margin: 0 auto;
    margin-top: 10px;
    height: 48px;
    line-height: 48px;
    margin-bottom: 40px;
}

.pager input,.pager select{
    height:40px; 
    line-height:40px;
    outline:none; 
    border:1px solid #888; 
    padding:10px; 
    box-sizing:border-box;
}
.pager input{
    width: 50px;
}
.pager .goto{
    margin-left: 20px;
}
.pager a{
    color: black;
    font-weight: bold;
    text-decoration: none;
}
.pager a:hover{
    color: green;
}

/*内容*/
  .page_a{
    margin-top:2%;
  }
.container{
  overflow: hidden;
}
.notice {
  margin-bottom: 5%;
}
.img {
  width: 100%;
  height: auto;
  overflow: hidden;
}
.main {
  max-width: 1400px;
}
.intro-header {
  color: #00873c;
  margin-top: 72px;
}
.intro-header h2 {
  font-size: 36px;
  width: 100%;
  line-height: 27px;
}
.intro-header p {
  font-size: 33px;
  margin-top: 36px;
}
.notice-list1 {
  margin-top: 50px;
}
.notice-list1 li {
  float: left;
  width: calc((100% - 33px) / 2);
  height: 687px;
  position: relative;
  margin-left: 33px;
}
.notice-list1 li:first-child {
  margin-left: 0;
}
.notice-list1 li .bg {
  width: 100%;
  height: 100%;
}
.notice-list1-con {
  width: 333px;
  height: 353px;
  background-color: rgba(255, 255, 255, 0.6);
  opacity: 0.6;
  padding: 43px 29px;
  position: absolute;
  top: 40px;
  left: 50px;
}
.notice-list1-con .icon {
  width: 55px;
  height: 55px;
  background: url(../assets/img/jiantou.png) no-repeat;
  background-size: 100% 100%;
  margin-bottom: 55px;
}
.notice-list1-con .tag {
  font-size: 32px;
  color: #595757;
  line-height: 32px;
}
.notice-list1-con .title {
  font-size: 24px;
  color: #595757;
  margin: 16px 0;
}
.notice-list1-con .content {
  font-size: 14px;
  color: #595757;
}
.notice-list1-con:hover {
  background: #00873c;
  opacity: 1;
}
.notice-list1-con:hover .icon {
  background: url(../assets/img/jiang.png) no-repeat;
  background-size: 100% 100%;
}
.notice-list1-con:hover .tag,
.notice-list1-con:hover .title,
.notice-list1-con:hover .content {
  color: #fff;
}
.notice-news{
  margin-top: 48px;
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
}
.notice-con{
 font-size: 14px;
 line-height: 28px;
 color: #9fa0a0;
 height:91px;
}
.notice-time{
  font-size: 14px;
  color: #00873c;
  margin-top: 22px;
}
.notice-news li:hover{
  background: #00873c;
}
.notice-news li:hover .notice-title,
.notice-news li:hover .notice-con,
.notice-news li:hover .notice-time{
  color: #fff;
}
  .notice-con ellipsis3 span {
    background-color:none;
  }
@media (max-width: 1100px) {
  .notice-list1 li{
    height: 500px;
  }
}
@media (max-width: 768px) {
  .main{
    padding: 0 20px;
  }
  .notice{
    margin-bottom: 50px;
  }
  .notice-list1 li{
    float: initial;
    width: 100%;
    height: auto;
    overflow: hidden;
    margin-left:0;
    margin-bottom: 10px;
  }
  .notice-news li{
    height: auto;
  }
  .notice-news li .notice-left{
    float: initial;
    width: 100%;
  }
   .notice-news li .notice-right{
    float: initial;
    width: 100%;
    padding: 10px;
  }
  .intro-header{
    margin-top: 30px;
  }
  .intro-header h2 {
    font-size: 27px;
  }
  .intro-header p {
    font-size: 25px;
    margin-top: 20px;
  }
  .notice-list1,.notice-news{
    margin-top: 20px;
  }  
  .notice-list1-con {
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.6);
    opacity: 0.6;
    padding: 20px 10px;
    position: absolute;
    top: 0;
    left: 0;
  }
  .notice-list1-con .icon{
    width: 30px;
    height: 30px;
    margin-bottom: 10px;
  }
  .notice-list1-con .tag{
    font-size: 25px;
  }
  .notice-list1-con .title{
    font-size: 20px;
    margin:10px 0;
  }
  .notice-title{
    font-size: 20px;
  }
}
</style>
