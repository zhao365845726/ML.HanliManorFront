<template>
  <div class="container video margin">
     <img src="../assets/img/bg3.png" alt="" class="img">
     <div class="container main margin">
        <div class="intro-header">
          <h2 class="t-c">MEDIA FOCUS</h2>
          <p class="t-c">品牌视频</p>
        </div>
        <div class="video1">
          <video src="https://www.runoob.com/try/demo_source/movie.mp4" controls></video>
        </div>
        <ul class="btns">
          <li class="list-btn" :class="{'active':index == index_}" v-for="(item, index) in list" :key="item.id"  @click="fnIndex(index)">
            {{item.title}}
          </li>
        </ul>
        <ul class="container list-video">
          <li v-for="(item1, index1) in listVideo[index_]">
            <video :src="item1.src" controls></video>
          </li>
        </ul>
      </div>
  </div>
</template>

<script>
export default {
  name: "video",
  data() {
    return {
      index_: 0,
      list: [
        { id: 0, title: "品牌视频" },
        { id: 1, title: "品牌视频" },
        { id: 2, title: "品牌视频" },
        { id: 3, title: "品牌视频" },
        { id: 4, title: "品牌视频" }
      ],
      listVideo: [
        [{ src: "https://www.runoob.com/try/demo_source/movie.mp4" }],
        [
          { src: "https://www.runoob.com/try/demo_source/movie.mp4" },
          { src: "https://www.runoob.com/try/demo_source/movie.mp4" }
        ],
        [
          { src: "https://www.runoob.com/try/demo_source/movie.mp4" },
          { src: "https://www.runoob.com/try/demo_source/movie.mp4" },
          { src: "https://www.runoob.com/try/demo_source/movie.mp4" }
        ],
        [
          { src: "https://www.runoob.com/try/demo_source/movie.mp4" },
          { src: "https://www.runoob.com/try/demo_source/movie.mp4" },
          { src: "https://www.runoob.com/try/demo_source/movie.mp4" },
          { src: "https://www.runoob.com/try/demo_source/movie.mp4" }
        ],
        [
          { src: "https://www.runoob.com/try/demo_source/movie.mp4" },
          { src: "https://www.runoob.com/try/demo_source/movie.mp4" },
          { src: "https://www.runoob.com/try/demo_source/movie.mp4" },
          { src: "https://www.runoob.com/try/demo_source/movie.mp4" },
          { src: "https://www.runoob.com/try/demo_source/movie.mp4" }
        ]
      ]
    };
  },
  methods: {
    fnIndex(index) {
      this.index_ = index;
    }
  },
  mounted() {}
};
</script>

<style scoped>
.video {
  margin-bottom: 200px;
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
}
.intro-header p {
  font-size: 33px;
  margin-top: 36px;
}
.video1 {
  width: 100%;
  height: 646px;
  position: relative;
  margin-top: 110px;
}
.video1 video {
  width: 100%;
  height: 100%;
}
.btns {
  width: 100%;
  height: 84px;
  margin: 30px 0;
}
.btns li {
  float: left;
  width: 20%;
  height: 100%;
  font-size: 16px;
  color: #000000;
  text-align: center;
  line-height: 84px;
}
.btns li:hover {
  cursor: pointer;
}
.btns li.active {
  color: #00873c;
  font-weight: 700px;
}
.list-video {
  position: relative;
  font-size: 0;
}
.list-video li {
  display: inline-block;
  vertical-align: top;
  width: 50%;
  height: 420px;
  padding: 20px 10px;
}
.list-video li video {
  width: 100%;
  height: 100%;
}
@media (max-width: 768px) {
  .video {
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
  .btns{
    padding:0;
  }
  .btns li {
    width: 33.33%;
    height: 40px;
    line-height: 40px;
  }
  .list-video li{
    width: 100%;
    height: 200px;
    padding: 10px 10px 20px 10px;
  }
}
</style>
