<template>
  <div class="container footer margin" >
      <ul class="code" >
        <li>
          <img src="../assets/img/code.png" >
          <p>官方公众号</p>
        </li>
        <li>
          <img src="../assets/img/code.png">
          <p>官方淘宝店</p>
        </li>
      </ul>
      <div class="description">@2019 山西韩梨果业有限公司   晋ICP备19007463号-1        晋公网安备 4201120201521号</div>
      <div class="back" @click="backTop()" style="cursor:pointer ">返回顶部</div>
    </div>
</template>

<script>
export default {
  name: "commonFooter",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
    },
    methods: {
      backTop() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      }
    }
};
</script>

<style scoped>
.footer {
  max-width: 1485px;
  height: 159px;
  padding-top: 10px;
  display: -webkit-flex;
  display: flex;
  justify-content: space-between;
  align-content: center;
   -webkit-user-select: text;
}
.code {
  width: auto;
  height: auto;
  overflow: hidden;
}
.code li {
  float: left;
  width: 79px;
  height: auto;
  overflow: hidden;
  margin-right: 18px;
}
.code li img {
  display: block;
  width: 79px;
  height: 79px;
  background: #ccc;
}
.code li p {
  font-size: 14px;
  color: #000;
  line-height: 14px;
  letter-spacing: 1.1px;
  text-align: center;
  margin-top: 7px;
   -webkit-user-select: text;
}
.description {
  width: auto;
  font-size: 12px;
  line-height: 28px;
  letter-spacing: 0.9px;
  color: #000000;
  margin-top: 78px;
  -webkit-user-select: text;
}
.back {
  width: 69px;
  height: 20px;
  font-size: 10px;
  line-height: 20px;
  text-align: center;
  color: #727171;
  background-color: #ffffff;
  border-radius: 10px;
  border: solid 1px #727171;
  margin-top: 78px;
}
@media screen and (max-width: 1100px) {
  .description{
    text-align: center;
  }
  .back{
    display: none;
  }
}
@media screen and (max-width: 768px) {
  .footer{
    width: 100%;
    height:auto;
    flex-direction:column;
    padding-bottom: 10px;
  }
  .code{
    float:initial;
    width: 100%;
    display: flex;
    justify-content: center;
  }
  .description{
    margin-top: 15px;
  }
  .back{
    display: none;
  }
}
</style>
