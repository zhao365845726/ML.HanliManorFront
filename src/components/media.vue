<template>
  <div class="container media margin">
     <img src="../assets/img/bg3.png" alt="" class="img">
      <div class="container main margin">
          <div class="intro-header">
            <h2 class="t-c">MEDIA FOCUS</h2>
            <p class="t-c">媒体聚焦</p>
          </div>
          <ul class="container list-news">
            <li v-for="(item, index) in list">
              <router-link :to="{path:'mediaDetail',query:{name:'媒体聚焦',id:item.Id}}" class="news-item">
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
                      <img :src="item.CoverPhoto">
                  </div>
              </router-link>
            </li>
          </ul>
      </div>

  </div>
</template>

<script>
export default {
  name: "media",
  data() {
    return {
      list: [],
      
    }
  },
    mounted() {
      var param = window.location.href.split('=')[2];
      console.log(param)
    this.$axios
      .post('http://hlzy.api.gpscxqyw.com/api/content/getcategoryarticlelist', {
        "categoryid": param,
        "PageIndex": 1,
        "PageSize":20
      })
      .then((res) => {
        this.list = res.data.data.lst_categoryarticlelist;
        console.log(this.list)
      })
  }
};
</script>

<style scoped>
.media {
  margin-bottom: 5%;
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
  font-size: 36px;
  width: 100%;
  line-height: 27px;
  font-weight:600;
}
.intro-header p {
  font-size: 33px;
  margin-top: 36px;
}
.list-news {
  position: relative;
  font-size: 0;
  margin-top: 110px;
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
  margin-bottom: 25px;
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
   transition:all 0.3s ease-out;
    -moz-transition:all 0.3s ease-out;
    -webkit-transition:all 0.3s ease-out;
    -o-transition:all 0.3s ease-out;
}
.news-item:hover {
  background: #00873c;
  color: #fff !important;
  text-decoration:none;
      transform:scale(1.05,1.05);
}
.news-item:hover .news-item__date,
.news-item:hover .news-item__date p,
.news-item:hover .news-item__date span,
.news-item:hover .news-item__title {
  color: #fff;
 
}
@media (max-width: 1100px) {
  .list-news li {
    width: 33.33%;
  }
}
@media (max-width: 768px) {
  .media {
    margin-bottom: 55px;
  }
  .img {
    margin-bottom: 55px;
  }
  .intro-header h2{
    font-size: 27px;
  }
  .intro-header p{
    font-size: 25px;
    margin-top: 20px;
  }
  .list-news{
    margin-top: 50px;
  }
  .list-news li {
    width: 50%;
  }
}
@media (max-width: 480px) {
  .list-news li {
    width: 100%;
  }
  .news-item {
    padding-top: 30px;
  }
  .news-item__title {
    margin-bottom: 30px;
    height: auto;
  }
  .news-item .news-item__date,
  .news-item .news-item__title {
    margin-right: 30px;
    margin-left: 30px;
  }
}
</style>
