<template>
  <div class="container rule">
    <!--<img src="http://image.hanjiazhuang.cn/%E6%9D%91%E8%A7%84%E6%B0%91%E7%BA%A6.png" alt="" class="img">-->
    <img v-for="img in imga" v-lazy="img" alt="" class="img">
    <div class="chuancheng" id="demo">
      <!--<img src="http://image.hanjiazhuang.cn/bg11.png" alt="" class="img" />-->
      <img v-for="img in imgb" v-lazy="img" alt="" class="img" />
    </div>
    <div class="container main margin">
      <div class="hanli1">
        <div>
          <p class="p1">韩梨庄园<span class="span1">HANLIZHUANGYUAN</span></p>
          <p v-for="(item,index) in shuju_a">
            <router-link :to="{path:'mediaDetail',query:{name:'村规民约',id:item.Id}}" style="text-decoration:none">
              <div class="title">{{item.Title}}</div>
            </router-link>
            <span>{{item.CreateTime}}</span>
          </p>
          <!--<p v-html="this.body" style="cursor:pointer"></p>-->
        </div>
        <br /><br /><br />
        <div class="diva">
        </div>
      </div>
      <div class="hanli2">
        <div class="div1">
          <p class="p1">韩梨庄园<span class="span1">HANLIZHUANGYUAN</span></p>
          <p v-for="(item,index) in shuju_b">
            <router-link :to="{path:'mediaDetail',query:{name:'村规民约',id:item.Id}}" style="text-decoration:none">
              <div class="title1">{{item.Title}}</div>
            </router-link>
            <span>{{item.CreateTime}}</span>
          </p>
          <!--<p v-html="this.body_a" style="cursor:pointer"></p>-->
        </div>
        <div class="div2">
          <div class="img1"><img v-lazy="this.pop" style="width:100%;height:100%;" /></div>
          <div class="img2"><img v-lazy="this.pop_a" style="width:100%;height:100%;" /></div>
        </div>
      </div>
      <div class="hanli3">
        <div class="div3">
          <div class="img1">
            <!--<img src="http://image.hanjiazhuang.cn/Fv9UD94g7uwkDtjMMwbCrlv4dNbD" style="width:100%;height:100%;" />-->
            <img v-for="img in imgc" v-lazy="img" style="width:100%;height:100%;" />
          </div>
          <div class="img2">
            <!--<img src="http://image.hanjiazhuang.cn/FuIzB9BLtxS6ZpfoBzZ5n7H9IiIk" style="width:100%;height:100%;" />-->
            <img v-for="img in imgd" v-lazy="img" style="width:100%;height:100%;" />
          </div>
        </div>
        <div class="div4">
          <p class="p1">韩梨庄园<span class="span1">HANLIZHUANGYUAN</span></p>
          <p v-for="(item,index) in shuju_c">
            <router-link :to="{path:'mediaDetail',query:{name:'村规民约',id:item.Id}}" style="text-decoration:none">
              <div class="title2">{{item.Title}}</div>
            </router-link>
            <span>{{item.CreateTime}}</span>
          </p>
        </div>
      </div>
      <div class="hanli4">
        <div>
          <p class="p1">韩梨庄园<span class="span1">HANLIZHUANGYUAN</span></p>
          <p v-for="(item,index) in shuju_d">
            <router-link :to="{path:'mediaDetail',query:{name:'村规民约',id:item.Id}}" style="text-decoration:none">
              <div class="title3">{{item.Title}}</div>
            </router-link>
            <span>{{item.CreateTime}}</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "rule",
    data() {
      return {
        msg: "Welcome to Your Vue.js App",
        imga: ['http://image.hanjiazhuang.cn/%E6%9D%91%E8%A7%84%E6%B0%91%E7%BA%A6.png'],
        imgb: ['http://image.hanjiazhuang.cn/bg11.png'],
        imgc: ['http://image.hanjiazhuang.cn/Fv9UD94g7uwkDtjMMwbCrlv4dNbD'],
        imgd:['http://image.hanjiazhuang.cn/FuIzB9BLtxS6ZpfoBzZ5n7H9IiIk'],
        shuju: [],
        shuju_a: [],
        shuju_b: [],
        shuju_c: [],
        shuju_d:[],
        body: '',
        pop: '',
        body_a: '',
        pop_a:'',
      }
    },
    mounted() {
      this.$axios
        .post('http://api.hanjiazhuang.cn/api/content/getcategoryarticlelist', {
          "categoryid": "a5a566c1-0bc3-4bcb-a43d-aaf9644c13cd",
          "PageIndex": 1,
          "PageSize": 20
        })
        .then((res) => {
          console.log(res)
          this.shuju = res.data.data.lst_categoryarticlelist
          //console.log(this.shuju);
          this.$axios
            .post('http://api.hanjiazhuang.cn/api/content/getarticledetail', {
              "ArticleId": "c9eb96e7-903f-4e61-9add-86b71ad5cb13"
            })
            .then((body) => {
              //console.log(body)
              this.body = body.data.data.Body;
              this.pop = body.data.data.CoverPhoto;
            })
          this.$axios
            .post('http://api.hanjiazhuang.cn/api/content/getarticledetail', {
              "ArticleId": "78426a52-2bed-479f-b967-6a5329d7c3ec"
            })
            .then((body_a) => {
              //console.log(body_a)
              this.body_a = body_a.data.data.Body;
              this.pop_a = body_a.data.data.CoverPhoto;
            })
          var shuju = this.shuju;
          var shuju_a = shuju.slice(0, 9);
          this.shuju_a = shuju_a;
          //console.log(this.shuju_a);
          var shuju_b = shuju.slice(10, 15);
          this.shuju_b = shuju_b;
          //console.log(this.shuju_b)
          var shuju_c = shuju.slice(6, 12);
          this.shuju_c = shuju_c;
          //console.log(this.shuju_c)
          var shuju_d = shuju.slice(10, 15);
          this.shuju_d = shuju_d;
          //console.log(this.shuju_d)
        })
       document.querySelector('#demo').scrollIntoView(true);
    }
  }
</script>

<style scoped>
  .img1,.img2{
    transition:all 0.3s ease-out;
    -moz-transition:all 0.3s ease-out;
    -webkit-transition:all 0.3s ease-out;
    -o-transition:all 0.3s ease-out;
  }
    .img1:hover,.img2:hover {
      transform:scale(1.02,1.02);
    }
.container{
  overflow: hidden;
}
  a {
    color:black;
  }
    a:hover {
      color:#01873D;
      /*font-weight:bolder;*/
    }
  .hanli1 .title {
      border: 0px solid;
      height: auto;
      width: 622px;
      float: left;
  }
   .hanli2 .title1 {
      border: 0px solid;
      height: auto;
      width: 404px;
      float: left;
  }
    .hanli3 .title2 {
      border: 0px solid;
      height: auto;
      width: 400px;
      float: left;
  }
     .hanli4 div .title3 {
      border: 0px solid;
      height: auto;
      width: 400px;
      float: left;
      margin:0;
  }
 span{
  float:right;
  cursor:pointer
  }
  .span1 {
    float:none;
  }
.rule{
  height: auto;
  background: url(http://image.hanjiazhuang.cn/bg20.png) no-repeat;
  background-size: 100% auto;
}
.margin{
  max-width: 1400px;
  height: 2171px;
  overflow: hidden;
  background: url(http://image.hanjiazhuang.cn/line.png) no-repeat;
  background-size: 85% 100%;
  margin-bottom: 125px;
  border:0px solid;
}
  .chuancheng {
    width:30%;
    margin:auto;
  }
.img {
  width: 100%;
  height: auto;
  overflow: hidden;
  margin-bottom: 114px;
}
  .hanli1 {
   border: 0px solid;
    width: 100%;
    height: 400px;
    margin-top: 10.5%;
  }
    .hanli1 div {
      border:0px solid;
      width:70%;
      float:right;
      margin-right:15%;
    }
    .hanli1 div .p1{
    border:0px solid;
    color: red;
    font-size: 21px;
    font-weight: 800;
    }
      .hanli1 div .p1 span {
      font-weight: 300;
      margin-left: 10px;
      letter-spacing: 1px;
      font-size:19px;
      }
    .hanli1 div p {
      font-size:14px;
      line-height:40px;
    }
  .hanli2 {
    border:0px solid;
    width:100%;
    height:500px;
    margin-top:10%;
  }
  .div1 {
   border: 0px solid;
    width: 50%;
    float: left;
    height: 225px;
    margin-top: 7%;
    margin-left: 9%;
  }
  .hanli2 .div1 .p1 {
     border:0px solid;
    color: red;
    font-size: 21px;
    font-weight: 800;
  }
   .hanli2 .div1 .p1 span {
      font-weight: 300;
      margin-left: 10px;
      letter-spacing: 1px;
      font-size:19px;
      }
    .hanli2 .div1 p {
      font-size:14px;
      line-height:38px;
    }
  .div2 {
   border: 0px solid;
    width: 33%;
    float: left;
    height: 500px;
    margin-left: 8%;
  }
     .img1,.img2 {
    border: 0px solid;
    width: 80%;
    height: 222px;
    margin: auto;
    margin-top: 5%;
    background-color: darkgray;
    cursor: -webkit-zoom-in;
    }
  .hanli3 {
    border:0px solid;
    width:100%;
    height:533px;
    margin-top:5%;
  }
  .div3 { 
    border: 0px solid;
    width: 33%;
    float: left;
    height: 532px;
  }
   .img1,.img2 {
    border: 0px solid;
    width: 80%;
    height: 236px;
    margin-left:7%;
    margin-top: 5%;
    background-color: darkgray;
    cursor: -webkit-zoom-in;
    }
  .div4 {
     border: 0px solid;
    width: 50%;
    float: left;
    height: 225px;
    margin-top: 11%;
    margin-left: 5%;
  }
   .hanli3 .div4 .p1 {
     border:0px solid;
    color: red;
    font-size: 21px;
    font-weight: 800;
  }
   .hanli3 .div4 .p1 span {
      font-weight: 300;
      margin-left: 10px;
      letter-spacing: 1px;
      font-size:19px;
      }
    .hanli3 .div4 p {
      font-size:14px;
      line-height:38px;
    }
  .hanli4 {
    border :0px solid;
    width:100%;
    height:239px;
    margin-top:10%;
  }
    .hanli4 div {
    margin-top: 2%;
    border: 0px solid;
    width: 60%;
    height: 200px;
    margin-left: 10%;
    }
     .hanli4 div .p1{
    border:0px solid;
    color: red;
    font-size: 21px;
    font-weight: 800;
    }
      .hanli4 div .p1 span {
      font-weight: 300;
      margin-left: 10px;
      letter-spacing: 1px;
      font-size:19px;
      }
    .hanli4 div p {
      font-size:14px;
      line-height:40px;
    }
     @media(max-width:1200px) {
    .hanli1 {
          border: 0px solid;
          width: 100%;
          height: 490px;
          margin-top: 12.5%;
      }
      .hanli1 div {
          border: 0px solid;
          width: 80%;
          float: right;
          margin-right: 11%;
          margin-top: 40px;
      }
       .hanli1 .title {
          border: 0px solid;
          height: auto;
          width: 424px;
          float: left;
          margin: 0;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          font-size:16px;
          }
       .div1{
          border: 0px solid;
          width: 50%;
          float: left;
          height: auto;
          margin-top: 8%;
          margin-left: 9%;
      }
     .hanli2 .title1 {
        border: 0px solid;
        height: auto;
        width: 254px;
        float: left;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        font-size:16px;
    }
     .img1,.img2 {
        border: 0px solid;
        width: 80%;
        height: 200px;
        margin: auto;
        margin-top: 10%;
        background-color: darkgray;
        cursor: -webkit-zoom-in;
    }
     .div4 {
        border: 0px solid;
        width: 50%;
        float: left;
        height: auto;
        margin-top: 14%;
        margin-left: 8%;
    }
     .hanli3 .title2 {
        border: 0px solid;
        height: auto;
        width: 249px;
        float: left;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        font-size:16px;
    }
     .img1,.img2{
        border: 0px solid;
        width: 80%;
        height: 200px;
        margin-left: 7%;
        margin-top: 15%;
        background-color: darkgray;
        cursor: -webkit-zoom-in;
    }
       .hanli4 div .title3 {
        border: 0px solid;
        height: auto;
        width: 300px;
        float: left;
        margin:0;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        font-size:16px;
    }
       .hanli4 {
          margin-top: 9%;
      }
        .margin{
          margin-bottom: 90px;
      }
  }
    @media(max-width:1024px) {
      .hanli1 {
          border: 0px solid;
          width: 100%;
          height: 490px;
          margin-top: 12.5%;
      }
      .hanli1 div {
          border: 0px solid;
          width: 80%;
          float: right;
          margin-right: 11%;
          margin-top: 40px;
      }
       .hanli1 .title {
          border: 0px solid;
          height: auto;
          width: 393px;
          float: left;
          margin: 0;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          font-size:16px;
          }
       .div1{
          border: 0px solid;
          width: 50%;
          float: left;
          height: auto;
          margin-top: 8%;
          margin-left: 9%;
      }
     .hanli2 .title1 {
        border: 0px solid;
        height: auto;
        width: 254px;
        float: left;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        font-size:16px;
    }
     .img1,.img2 {
        border: 0px solid;
        width: 80%;
        height: 200px;
        margin: auto;
        margin-top: 10%;
        background-color: darkgray;
        cursor: -webkit-zoom-in;
    }
     .div4 {
        border: 0px solid;
        width: 50%;
        float: left;
        height: auto;
        margin-top: 14%;
        margin-left: 8%;
    }
     .hanli3 .title2 {
        border: 0px solid;
        height: auto;
        width: 235px;
        float: left;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        font-size:16px;
    }
     .img1,.img2{
        border: 0px solid;
        width: 80%;
        height: 200px;
        margin-left: 7%;
        margin-top: 15%;
        background-color: darkgray;
        cursor: -webkit-zoom-in;
    }
       .hanli4 div .title3 {
        border: 0px solid;
        height: auto;
        width: 275px;
        float: left;
        margin:0;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        font-size:16px;
    }
       .hanli4 {
          margin-top: 10%;
      }
        .margin{
          margin-bottom: 90px;
      }
  }
    @media(max-width:768px) {
      .hanli1 {
          border: 0px solid;
          width: 100%;
          height: 490px;
          margin-top: 12.5%;
      }
      .hanli1 div {
          border: 0px solid;
          width: 80%;
          float: right;
          margin-right: 11%;
          margin-top: 40px;
      }
       .hanli1 .title {
          border: 0px solid;
          height: auto;
          width: 393px;
          float: left;
          margin: 0;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          font-size:16px;
          }
       .div1{
          border: 0px solid;
          width: 50%;
          float: left;
          height: auto;
          margin-top: 16%;
          margin-left: 9%;
      }
     .hanli2 .title1 {
        border: 0px solid;
        height: auto;
        width: 254px;
        float: left;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        font-size:16px;
    }
     ..img1,.img2 {
        border: 0px solid;
        width: 80%;
        height: 200px;
        margin: auto;
        margin-top: 10%;
        background-color: darkgray;
        cursor: -webkit-zoom-in;
    }
     .div4 {
        border: 0px solid;
        width: 50%;
        float: left;
        height: auto;
        margin-top: 20%;
        margin-left: 8%;
    }
     .hanli3 .title2 {
        border: 0px solid;
        height: auto;
        width: 235px;
        float: left;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        font-size:16px;
    }
     ..img1,.img2{
        border: 0px solid;
        width: 80%;
        height: 200px;
        margin-left: 7%;
        margin-top: 15%;
        background-color: darkgray;
        cursor: -webkit-zoom-in;
    }
       .hanli4 div .title3 {
        border: 0px solid;
        height: auto;
        width: 275px;
        float: left;
        margin:0;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        font-size:16px;
    }
       .hanli4 {
          margin-top: 28%;
      }
       .hanli3{
            border: 0px solid;
            width: 100%;
            height: 533px;
            margin-top: 5%;
            margin-bottom: 22%;
        }
         .margin{
          margin-bottom: 90px;
      }
  }
    @media(max-width:414px) {
      .img {
    margin-bottom: 36px;
}
      span{
          font-size: 12px;
      }
       .margin{
          margin-bottom: 90px;
      }
       .margin {
     background: none;
     border:0px solid;
     height:auto;
      }
       .hanli1 {
        border: 0px solid;
        width: 100%;
        height: 375px;
        margin-top: 0;
    }
       .hanli1 div {
        border: 0px solid;
        width: 90%;
        height:100%;
        float: none;
        margin:auto;
        margin-right: none;
        margin-top: 0;
    }
       .hanli1 div p{
        line-height: 34px;
    }
       .hanli1 .title{
        border: 0px solid;
        height: auto;
        width: 250px;
        float: left;
        margin: 0;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        font-size: 14px;
    }
       .hanli2 {
          border: 0px solid;
          width: 100%;
          height: 382px;
          margin-top: 10%;
      }
       .div1{
        border: 0px solid;
        width: 90%;
        float: none;
        height: auto;
        margin-top: 0;
        /* margin-left: 9%; */
        margin: auto;
      }
       .hanli2 .div1 p {
          font-size: 14px;
          line-height: 36px;
      }
       .hanli2 .title1 {
          border: 0px solid;
          height: auto;
          width: 254px;
          float: left;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          font-size: 14px;
      }
       .div2{
        border: 0px solid;
        width: 100%;
        float: none;
        height: auto;
        margin-left: 0;
        margin-top: 50%;
    }
      .img1 {
        border: 0px solid;
        width: 40%;
        float: left;
        height: auto;
        margin-left: 5%;
        margin-top:5%;
      }
      .img2 {
        border: 0px solid;
        width: 40%;
        float: left;
        margin-left: 10%;
        height: auto;
        margin-top: 2.5%;
      }
      .hanli3 {
        border: 0px solid;
        width: 100%;
        height: 375px;
        margin-top: 5%;
        margin-bottom: 22%;
    }
      .div3 {
    border: 0px solid;
    width: 100%;
    float: none;
    height: 127px;
    }
      .div4 {
    border: 0px solid;
    width: 90%;
    float: none;
    height: auto;
    margin: auto;
    margin-top: 5%;
    margin-left: none;
    }
      .hanli3 .div4 p {
    font-size: 14px;
    line-height: 29px;
    }
      .hanli3 .title2{
    border: 0px solid;
    height: auto;
    width: 235px;
    float: left;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 14px;
}
      .hanli4 div{
    margin-top: 0;
    border: 0px solid;
    width: 90%;
    height: auto;
    margin-left: 0;
    margin: auto;
}
      .hanli4 div p {
    font-size: 14px;
    line-height: 35px;
}
      .hanli4 div .title3{
    border: 0px solid;
    height: auto;
    width: 275px;
    float: left;
    margin: 0;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 14px;
}
  }
 
</style>
