<template>
  <div class="container video margin">
     <img src="../assets/img/bg3.png" alt="" class="img">
     <div class="container main margin">
        <div class="intro-header">
          <h2 class="t-c">MEDIA FOCUS</h2>
          <p class="t-c">品牌视频</p>
        </div>
        <div class="video1">
          <video src="https://img.51miz.com/Video/10/65/106540_a59efe61e8b775d91e5a5f03413d90b8.mp4" controls></video>
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
        [{ src: "https://img.51miz.com/Video/10/68/106810_32251f512b485e2ad607e2a8b96dbca6.mp4" }],
        [
          { src: "https://img.51miz.com/Video/2018/12/12/12/20181212127936_V108776_water_bb5c9aaa.mp4" },
          { src: "https://img.51miz.com/Video/2017/08/17/10/20170817109422_V106989_water_09774bd5.mp4" }
        ],
        [
          { src: "https://img.51miz.com/Video/2017/11/16/15/20171116157857_V108137_water_9cea1023.mp4" },
          { src: "https://img.51miz.com/Video/10/67/106757_62301c728c841eb8c7e468414be38a69.mp4" },
          { src: "https://img.51miz.com/Video/10/60/106010_8f79dade40d324f299cfd8134b520f17.mp4" }
        ],
        [
          { src: "https://img.51miz.com/Video/10/66/106656_820eb46f25152b5dcbf34024c6b07d53.mp4" },
          { src: "https://img.51miz.com/Video/2017/10/24/17/20171024171723_V107723_water_432fba5f.mp4" },
          { src: "https://img.51miz.com/Video/2017/09/12/10/20170912104750_V107224_water_037ef257.mp4" },
          { src: "https://img.51miz.com/Video/10/65/106573_12e534198ae17c3be5d30cdca0648d34.mp4" }
        ],
        [
          { src: "https://img.51miz.com/Video/2017/10/19/19/20171019199454_V107668_water_1ae6ae21.mp4" },
          { src: "https://img.51miz.com/Video/10/64/106400_1bbde15a18ec3ca3aedd27d94cba742f.mp4" },
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
  font-weight:600;
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
  padding:0;
}
.list-video li {
  display: inline-block;
  vertical-align: top;
  width: 50%;
  height: 420px;
  padding: 20px 0px;
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
