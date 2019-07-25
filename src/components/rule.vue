<template>
  <div class="container rule">
    <img src="../assets/img/bg2.png" alt="" class="img">
    <div class="chuancheng">
      <img  src="../assets/img/bg11.png" alt="" class="img"/>
    </div>
    <div class="container main margin">
      <div class="hanli1">
        <div>
          <p class="p1">韩梨庄园<span class="span1">HANLIZHUANGYUAN</span></p>
          <p v-for="(item,index) in shuju_a">
            <router-link :to="{path:'mediaDetail',query:{id:item.Id}}" style="text-decoration:none">
              {{item.Title}}
            </router-link>
           <span>{{item.CreateTime}}</span>
          </p>
        </div>
        <br /><br /><br />
        <div>
                
        </div>
      </div>
      <div class="hanli2">
        <div class="div1">
          <p class="p1">韩梨庄园<span class="span1">HANLIZHUANGYUAN</span></p>
          <p v-for="(item,index) in shuju_b">
            <router-link :to="{path:'mediaDetail',query:{id:item.Id}}" style="text-decoration:none">
              {{item.Title}}
            </router-link>
            <span>{{item.CreateTime}}</span>
          </p>
        </div>
        <div class="div2">
          <div><img src="../assets/img/赵晋云 组照《梨乡春早》 (8).jpg" style="width:100%;height:100%;"/></div>
          <div><img src="../assets/img/骑行1.jpg" style="width:100%;height:100%;" /></div>
        </div>
      </div>
      <div class="hanli3">
        <div class="div3">
          <div><img src="../assets/img/韩家庄风光.jpg" style="width:100%;height:100%;" /></div>
          <div><img src="../assets/img/郭国伟 组照《梨花迎春》 (5).jpg" style="width:100%;height:100%;" /></div>
        </div>
        <div class="div4">
          <p class="p1">韩梨庄园<span class="span1">HANLIZHUANGYUAN</span></p>
          <p v-for="(item,index) in shuju_c">
            <router-link :to="{path:'mediaDetail',query:{id:item.Id}}" style="text-decoration:none">
              {{item.Title}}
            </router-link>
            <span>{{item.CreateTime}}</span>
          </p>
        </div>
      </div>
      <div class="hanli4">
        <div>
          <p class="p1">韩梨庄园<span class="span1">HANLIZHUANGYUAN</span></p>
          <p v-for="(item,index) in shuju_d">
            <router-link :to="{path:'mediaDetail',query:{id:item.Id}}" style="text-decoration:none">
              {{item.Title}}
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
        shuju: [],
        shuju_a: [],
        shuju_b: [],
        shuju_c: [],
        shuju_d:[]
      }
    },
    mounted() {
      this.$axios
        .post('http://hlzy.api.milisx.xyz/api/content/getcategoryarticlelist', {
          "categoryid": "a5a566c1-0bc3-4bcb-a43d-aaf9644c13cd",
          "PageIndex": 1,
          "PageSize": 20
        })
        .then((res) => {
          this.shuju = res.data.data.lst_categoryarticlelist
          console.log(this.shuju);
          var shuju = this.shuju;
          var shuju_a = shuju.slice(0, 8);
          this.shuju_a = shuju_a;
          console.log(this.shuju_a);
          var shuju_b = shuju.slice(4, 10);
          this.shuju_b = shuju_b;
          console.log(this.shuju_b)
          var shuju_c = shuju.slice(6, 12);
          this.shuju_c = shuju_c;
          console.log(this.shuju_c)
          var shuju_d = shuju.slice(10, 15);
          this.shuju_d = shuju_d;
          console.log(this.shuju_d)
        })

    }
  }
</script>

<style scoped>
.container{
  overflow: hidden;
}
  a {
    color:black;
  }
    a:hover {
      color:red;
      font-weight:bolder;
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
  background: url(../assets/img/bg10.png) no-repeat;
  background-size: 100% auto;
}
.margin{
  max-width: 1400px;
  height: 2171px;
  overflow: hidden;
  background: url(../assets/img/line.png) no-repeat;
  background-size: 85% 100%;
  margin-bottom: 209px;
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
  margin-bottom: 20px;
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
    margin-top: 10%;
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
    .div2 div {
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
   .div3 div {
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
    margin-top: 14%;
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
</style>
