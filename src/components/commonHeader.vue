<template>
  <div class="header">
    <div class="headerTitle margin">
      <!--<img src="http://image.hanjiazhuang.cn/logo1.png" class="icon float_left">-->
      <img v-for="img in imga" v-lazy="img" class="icon float_left">
      <div class="container other float_right">
        <a href="https://shop238833399.taobao.com/" class="taobao float_left"></a>
        <a  class="jingdong float_left"></a>

        <div class="container sreach float_left">
          <input id="sreach" class="float_left" placeholder="搜寻韩梨庄园" type="text" v-model="sreach" @keyup.enter="searchEnterFun" v-on:keyup="inputValue" value="" @click="mounsen()" />
          <button class="sreachBtn pointer float_left" @click="btn"></button>
          <ul class="sousuo" v-show="seen">
            <li v-for="(item,index) in list_b" @click="router(index)">
              <span>{{item.Title}}</span>
            </li>
          </ul>
        </div>
        <div class="language float_right"><span @click="changeen()">EN</span> / <span @click="changcn()">中文</span></div>
        <!--<p>{{ $t('language.name') }}</p>
        <p>{{ $t('navbar.home') }}</p>-->
      </div>
    </div>
    <div class="container header-menu">
      <ul class="margin t-c">
        <li class="menu-item pointer" v-for="(item,index) in forklifts">
          <!--<router-link :to="{path:'home',query:{name:item.Name,id:item.Id}}" class="menu-link">{{item.Name}}</router-link>-->
          <!--<router-link :to="{path:'home'}" class="menu-link">{{item.Name}}</router-link>-->
          <a class="menu-link" @click="link(index)">{{item.Name}}</a>
          <div class="subMenu">
            <div class="subMenu-bg"><span></span></div>
            <ul class="subMenu-ul">
              <li class="subMenu-item" v-for="(subitem,index) in sub" v-if="item.Name==='首页'">
                <router-link :to="{path:'supplier',query:{name:subitem.Name,id:subitem.Id}}" class="subMenu-link">{{subitem.Name}}</router-link>
              </li>
              <li class="subMenu-item" v-for="(subitem,index) in sub_a" v-if="item.Name==='关于我们'">
                <router-link :to="{path:'description',query:{name:subitem.Name,id:subitem.Id}}" class="subMenu-link" v-if="subitem.Name==='韩梨庄园介绍'">{{subitem.Name}}</router-link>
                <router-link :to="{path:'brandStory',query:{name:subitem.Name,id:subitem.Id}}" class="subMenu-link" v-if="subitem.Name==='好山好水好人家'">{{subitem.Name}}</router-link>
              </li>
              <li class="subMenu-item" v-for="(subitem,index) in sub_b" v-if="item.Name==='产品世界'">
                <router-link :to="{path:'product_chanpin',query:{name:subitem.Name,id:subitem.Id}}"  class="subMenu-link" v-if="subitem.Name==='所有品类'" >{{subitem.Name}}</router-link>
                <router-link :to="{path:'verification',query:{name:subitem.Name,id:subitem.Id}}" class="subMenu-link" v-if="subitem.Name==='产品验证'">{{subitem.Name}}</router-link>
                <router-link :to="{path:'store',query:{name:subitem.Name,id:subitem.Id}}" class="subMenu-link" v-if="subitem.Name==='线上商城'">{{subitem.Name}}</router-link>
              </li>
              <li class="subMenu-item" v-for="(subitem,index) in sub_c" v-if="item.Name==='品牌故事'">
                <router-link :to="{path:'rule',query:{name:subitem.Name,id:subitem.Id}}" class="subMenu-link" v-if="subitem.Name==='村规民约'">{{subitem.Name}}</router-link>
                <router-link :to="{path:'technology',query:{name:subitem.Name,id:subitem.Id}}" class="subMenu-link" v-if="subitem.Name==='种植技术'">{{subitem.Name}}</router-link>
              </li>
              <li class="subMenu-item" v-for="(subitem,index) in sub_d" v-if="item.Name==='新闻中心'">
                <router-link :to="{path:'notice',query:{name:subitem.Name,id:subitem.Id}}" class="subMenu-link" v-if="subitem.Name==='企业公告'">{{subitem.Name}}</router-link>
                <router-link :to="{path:'media',query:{name:subitem.Name,id:subitem.Id}}" class="subMenu-link" v-if="subitem.Name==='媒体聚焦'">{{subitem.Name}}</router-link>
                <router-link :to="{path:'video',query:{name:subitem.Name,id:subitem.Id}}" class="subMenu-link" v-if="subitem.Name==='品牌视频'">{{subitem.Name}}</router-link>
              </li>
              <li class="subMenu-item" v-for="(subitem,index) in sub_e" v-if="item.Name==='联系我们'">
                <router-link :to="{path:'supplier',query:{name:subitem.Name,id:subitem.Id}}" class="subMenu-link" v-if="subitem.Name==='诚招供应商'">{{subitem.Name}}</router-link>
                <router-link :to="{path:'contact',query:{name:subitem.Name,id:subitem.Id}}" class="subMenu-link" v-if="subitem.Name==='联系我们'">{{subitem.Name}}</router-link>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
    <footer style="display:none;" v-show="isShow">
      <ul class="nav nav-tabs">
        <li role="presentation" v-for="(item,index) in forklifts" class="li">
          <a class="a1" @click="rou(index)">{{item.Name}}</a>
          <div class="div2">
            <ul >
              <li  v-for="(subitem,index) in sub" v-if="item.Name==='首页'">
                <router-link :to="{path:'supplier',query:{name:subitem.Name,id:subitem.Id}}">{{subitem.Name}}</router-link>
              </li>
              <li  v-for="(subitem,index) in sub_a" v-if="item.Name==='关于我们'">
                <router-link :to="{path:'description',query:{name:subitem.Name,id:subitem.Id}}"  v-if="subitem.Name==='韩梨庄园介绍'">{{subitem.Name}}</router-link>
                <router-link :to="{path:'brandStory',query:{name:subitem.Name,id:subitem.Id}}"  v-if="subitem.Name==='好山好水好人家'">{{subitem.Name}}</router-link>
              </li>
              <li  v-for="(subitem,index) in sub_b" v-if="item.Name==='产品世界'">
                <router-link :to="{path:'verification',query:{name:subitem.Name,id:subitem.Id}}"  v-if="subitem.Name==='产品验证'">{{subitem.Name}}</router-link>
                <router-link :to="{path:'product_chanpin',query:{name:subitem.Name,id:subitem.Id}}"  v-if="subitem.Name==='所有品类'">{{subitem.Name}}</router-link>
                <router-link :to="{path:'store',query:{name:subitem.Name,id:subitem.Id}}" v-if="subitem.Name==='线上商城'">{{subitem.Name}}</router-link>
              </li>
              <li v-for="(subitem,index) in sub_c" v-if="item.Name==='品牌故事'">
                <router-link :to="{path:'rule',query:{name:subitem.Name,id:subitem.Id}}"  v-if="subitem.Name==='村规民约'">{{subitem.Name}}</router-link>
                <router-link :to="{path:'technology',query:{name:subitem.Name,id:subitem.Id}}"  v-if="subitem.Name==='种植技术'">{{subitem.Name}}</router-link>
              </li>
              <li  v-for="(subitem,index) in sub_d" v-if="item.Name==='新闻中心'">
                <router-link :to="{path:'notice',query:{name:subitem.Name,id:subitem.Id}}"  v-if="subitem.Name==='企业公告'">{{subitem.Name}}</router-link>
                <router-link :to="{path:'media',query:{name:subitem.Name,id:subitem.Id}}"  v-if="subitem.Name==='媒体聚焦'">{{subitem.Name}}</router-link>
                <router-link :to="{path:'video',query:{name:subitem.Name,id:subitem.Id}}"  v-if="subitem.Name==='品牌视频'">{{subitem.Name}}</router-link>
              </li>
              <li  v-for="(subitem,index) in sub_e" v-if="item.Name==='联系我们'">
                <router-link :to="{path:'supplier',query:{name:subitem.Name,id:subitem.Id}}"  v-if="subitem.Name==='诚招供应商'">{{subitem.Name}}</router-link>
                <router-link :to="{path:'contact',query:{name:subitem.Name,id:subitem.Id}}"  v-if="subitem.Name==='联系我们'">{{subitem.Name}}</router-link>
              </li>
            </ul>
            <!--<ul v-for="(itemsub,index) in item.list2">
              <li>
                <a @click="rou_a()">{{itemsub.title}}</a>
              </li>
            </ul>-->
          </div>
        </li>
      </ul>
    </footer>
    <div class="btn-manu" @click="fnClickNav">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
</template>
<script>
  import 'bootstrap/dist/css/bootstrap.min.css'
  export default {
    name: "commonFooter",
    data() {
      return {
        imga: [
          'http://image.hanjiazhuang.cn/logo1.png'
        ],
        index_: 0,
        clickIndex_: 0,
        isShow: false,
        isMouseover: false,
        forklifts: [],
        sub: [],
        sub_a: [],
        sub_b: [],
        sub_c: [],
        sub_d: [],
        sub_e: [],
        sreach: '',
        list_b: [],
        seen: false,
      }
    },
    methods: {
      fnClickNav() {
        this.isShow = !this.isShow;
      },
      rou(index) {
        //console.log(index)
        this.$router.push({  query: { name: this.forklifts[index].Name, id: this.forklifts[index].Id } })
      },
      btn() {
        var a = this.sreach;
        //console.log(this.sreach)
        if (a.length > 0) {
          this.$router.push({ path: 'sreach', query: { name: this.sreach } })
          this.$router.go(0)
        } else {
          alert('输入为空，请重新输入');
        }
      },
      searchEnterFun: function (e) {
        var keyCode = window.event ? e.keyCode : e.which;
        //console.log(keyCode)
        //console.log(e)
        if (keyCode == 13 && this.sreach) {
          this.$router.push({ path: 'sreach', query: { name: this.sreach } })
          this.$router.go(0)
        } else {
          alert('输入为空，请重新输入');
        }
      },
      changeen() {
        let locale = localStorage.getItem('language') || 'cn';
        //    console.log(locale)
        //    let temp=locale === 'cn' ? 'en' : 'cn';
        //    this.$i18n.locale = temp;//改变当前语言
        //    console.log(temp) 
        //localStorage.language=temp;
      },
      changcn() {
        let locale = localStorage.getItem('language') || 'en';
        //    console.log(locale)
        //    let temp=locale === 'en' ? 'cn' : 'en';
        //    this.$i18n.locale = temp;//改变当前语言
        //    console.log(temp)
        //localStorage.language=temp;
      },
      inputValue: function (e) {
        //console.log(e.target.value)
        this.sreach = e.target.value;
        //console.log(this.sreach)
        this.$axios
          .post('http://api.hanjiazhuang.cn/api/content/getarticlesearchlist', {
            "Title": this.sreach,
            "PageIndex": 1,
            "PageSize": 50
          })
          .then((name) => {
            //console.log(name)
            this.list_b = name.data.data.lst_articlesearchlist;
          })
      },
      mounsen() {
        this.seen = true
      },
      router(index) {
        //console.log(index)
        this.$router.push({ path: 'mediaDetail', query: { id: this.list_b[index].Id } })
        this.$router.go(0)
      },
      link(index) {
        if (index ===0) {
          this.$router.push({ path: 'home'})
        }
      }
    },
    mounted() {
      this.$axios
        .post('http://api.hanjiazhuang.cn/api/content/homenavigation', {
        })
        .then((res) => {
          //console.log(res)
          this.forklifts = res.data.data;
          //console.log(this.forklifts)
          //for (var i = 0; i < res.data.data.length; i++) {
          this.$axios.post('http://api.hanjiazhuang.cn/api/content/getnavcategorylist', {
            "navid": this.forklifts[0].Id,
            "PageIndex": 1,
            "PageSize": 10
          })
            .then((res_sub) => {
              this.sub = res_sub.data.data.lst_viewnavcategory;
              //console.log(this.sub)
            })
          //}
          this.$axios.post('http://api.hanjiazhuang.cn/api/content/getnavcategorylist', {
            "navid": this.forklifts[1].Id,
            "PageIndex": 1,
            "PageSize": 10
          })
            .then((res_sub) => {
              this.sub_a = res_sub.data.data.lst_viewnavcategory;
              //console.log(this.sub_a)
            })
          this.$axios.post('http://api.hanjiazhuang.cn/api/content/getnavcategorylist', {
            "navid": this.forklifts[2].Id,
            "PageIndex": 1,
            "PageSize": 10
          })
            .then((res_sub) => {
              this.sub_b = res_sub.data.data.lst_viewnavcategory;
              //console.log(this.sub_b)
            })
          this.$axios.post('http://api.hanjiazhuang.cn/api/content/getnavcategorylist', {
            "navid": this.forklifts[3].Id,
            "PageIndex": 1,
            "PageSize": 10
          })
            .then((res_sub) => {
              this.sub_c = res_sub.data.data.lst_viewnavcategory;
              //console.log(this.sub_c)
            })
          this.$axios.post('http://api.hanjiazhuang.cn/api/content/getnavcategorylist', {
            "navid": this.forklifts[4].Id,
            "PageIndex": 1,
            "PageSize": 10
          })
            .then((res_sub) => {
              this.sub_d = res_sub.data.data.lst_viewnavcategory;
              //console.log(this.sub_d)
            })
          this.$axios.post('http://api.hanjiazhuang.cn/api/content/getnavcategorylist', {
            "navid": this.forklifts[5].Id,
            "PageIndex": 1,
            "PageSize": 10
          })
            .then((res_sub) => {
              this.sub_e = res_sub.data.data.lst_viewnavcategory;
              //console.log(this.sub_e)
            })
          //console.log(this.forklifts)
        })
      document.addEventListener('click', (e) => {
        //console.log(e.target.className)
        if (e.target.className != 'float_left') {
          this.seen = false
        }
      })
    },

  }
</script>
<style scoped>
  .sousuo {
    margin-top: 31px;
    background-color: white;
    opacity: 0.8;
    border-top: 0;
    position: relative;
    z-index: 1;
    overflow: auto;
    height: 200px;
  }

    .sousuo li {
      font-size: 14px;
      line-height: 30px;
      height: 33px;
      text-indent: 16px;
      width: auto;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .sousuo :hover {
      background-color: #00873C;
      color: white;
      text-decoration: none;
    }

  .a1 {
    color: white;
    background-color: #009944;
  }

    .a1:hover {
      color: #009944;
      background-color: white;
    }

  .div2 {
    /*border:1px solid;*/
    margin-top: 2%;
    border-top: 2px solid #009944;
    margin-right: 2px;
  }

  .div2 {
    position: absolute;
    display: none;
  }

    .div2 ul li {
      text-align: center;
      display: block;
    }

      .div2 ul li a {
        color: #009944;
      }

  .nav li:hover .div2 {
    display: block;
    width: 75px;
    background-color: white;
    line-height: 20px;
  }

  .nav {
    padding-left: 5px;
  }

  footer {
    margin-bottom: 10px;
    margin-top: -10px;
  }

  .header {
    position: relative;
  }

  .headerTitle {
    max-width: 1060px;
    height: 96px;
    padding: 20px 0 17px;
  }

  .div1 {
    border: 0px solid;
    width: 456px;
    height: 26px;
    margin-top: 51px;
  }

    .div1 ul li {
      height: 23px;
    }

  .icon {
    height: 61px;
  }

  .other {
    width: 480px;
    padding-top: 6px;
  }

  .taobao,
  .jingdong {
    display: block;
    width: 49px;
    height: 49px;
    background: url(http://image.hanjiazhuang.cn/taobao.png) no-repeat;
    background-size: 100% 100%;
    margin-right: 17px;
  }

  .jingdong {
    background: url(http://image.hanjiazhuang.cn/jingdong.png) no-repeat;
    background-size: 100% 100%;
  }

  .sreach {
    width: 234px;
    height: 31px;
    border-radius: 5px;
    margin: 9px 0 0 4px;
  }

  #sreach {
    width: 179px;
    height: 100%;
    font-size: 14px;
    color: #c9caca;
    padding-left: 16px;
    border: 1px solid #c9caca;
    border-right: 0;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }

  .sreachBtn {
    width: 12%;
    height: 100%;
    background: #fff url(http://image.hanjiazhuang.cn/sreach.png) center center no-repeat;
    background-size: auto 18px;
    border: 1px solid #c9caca;
    border-left: 0;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }

  .language {
    font-size: 14px;
    line-height: 49px;
    color: rgba(0, 0, 0, 0.5);
  }

  .header-menu {
    background-color: #00873c;
  }

  .menu-item {
    position: relative;
    display: inline-block;
    vertical-align: top;
  }

  .menu-link {
    font-size: 15px;
    line-height: 69px;
    color: #fff;
    margin: 0 35px;
    text-decoration: none;
  }

  .subMenu {
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -50px;
    width: 110px;
    background-color: #fff;
    z-index: 30;
  }

  .subMenu-bg {
    position: absolute;
    top: -7px;
    left: 0;
    height: 7px;
    width: 100%;
    overflow: hidden;
  }

    .subMenu-bg span {
      position: absolute;
      top: 0;
      right: 0;
      height: 2px;
      width: 110px;
      background-color: #fff;
    }

  .subMenu-link {
    display: block;
    text-align: center;
    margin: 0 6px;
    border-bottom: 1px solid #f2f2f2;
    font-size: 14px;
    line-height: 44px;
    color: gray;
    text-decoration: none;
  }

    .subMenu-link:last-child {
      border-bottom: 0;
    }

  .btn-manu {
    position: absolute;
    left: 20px;
    top: 20px;
    width: 30px;
    height: 30px;
    padding: 5px;
    display: none;
  }

    .btn-manu span {
      display: block;
      width: 20px;
      height: 2px;
      background: #00873c;
      margin-top: 3px;
    }

  .subMenu-link:hover {
    color: #00873c;
  }

  .menu-item:hover .subMenu {
    visibility: visible;
    opacity: 1;
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }

  @media(min-width: 769px) {
    .subMenu {
      visibility: hidden;
      opacity: 0;
      -moz-box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.05);
      -webkit-box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.05);
      box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.05);
      -webkit-transform: translateY(-10px);
      transform: translateY(-10px);
      -webkit-transition: all 0.3s ease;
      transition: all 0.3s ease;
    }
  }

  @media (max-width: 768px) {
    .headerTitle {
      height: auto;
      overflow: hidden;
    }

    .icon {
      float: initial;
      display: block;
      margin: 0 auto;
      height: 30px;
    }

    .other {
      float: initial;
      display: block;
      margin: 0 auto;
      height: auto;
      width: 100%;
      padding: 0 20px;
      overflow: hidden;
    }

    .taobao,
    .jingdong {
      width: 30px;
      height: 30px;
      margin-top: 9px;
    }

    .sreach {
      width: calc(100% - 170px);
    }

    #sreach {
      width: 75%;
    }

    .sreachBtn {
      width: 25%;
    }

    .btn-manu {
      z-index: 100;
      display: block;
    }

    .header-menu {
      position: fixed;
      top: 50px;
      right: 0;
      bottom: 0;
      left: 0;
      background-color: #fff;
      opacity: 0;
      overflow-y: auto;
      -webkit-transform: translate3d(0, -150%, 0);
      transform: translate3d(0, -150%, 0);
      -webkit-transition: all .3s ease;
      transition: all .3s ease;
    }

    .menu-item {
      position: relative;
      display: block;
      opacity: 1;
      -webkit-transform: translate3d(0, 20px, 0);
      transform: translate3d(0, 20px, 0);
      -webkit-transition: all .3s ease;
      transition: all .3s ease;
    }

      .menu-item a {
        display: block;
        border-bottom: 1px solid #ccc;
      }

    .header-menu.active {
      transform: translate3d(0, 0, 0);
      opacity: 1;
    }

    .menu-link {
      position: relative;
      font-size: 16px;
      line-height: 60px;
      color: gray;
    }

    .subMenu {
      position: relative;
      top: auto;
      width: 100%;
      height: 0;
      left: 0;
      margin-left: 0;
      margin-right: 0;
      opacity: 0;
      -webkit-transition: all .3s ease;
      transition: all .3s ease;
      padding: 0 35px;
    }

    .menu-item:hover .subMenu {
      height: auto;
      overflow: hidden;
      visibility: visible;
      opacity: 1;
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }

    .subMenu-item {
      border-bottom: 1px solid #eee;
    }

    .a1 {
      color: white;
      background-color: #009944;
      font-size: 16px;
    }

    .div2 ul li a {
      color: #009944;
      font-size: 16px;
      text-decoration:none;
    }
       .div2 ul:hover li  {
      background-color:#009944;
    }
    .div2 ul:hover li a {
      color:white;
    } 

    .nav li:hover .div2 {
      display: block;
      width: 91px;
      background-color: white;
      line-height: 27px;
      padding-top: 5px;
      z-index:100;
    }

    .li {
      margin-right: 34px;
      margin-bottom: 0px;
    }

    .nav {
      padding-left: 32px;
    }

    footer {
      margin-bottom: 15px;
      margin-top: -10px;
      background-color: #009944;
    }
  }

  @media (max-width: 375px) {
    .a1 {
      color: white;
      background-color: #009944;
      font-size: 12px;
    }

    .div2 ul li a {
      color: #009944;
      font-size: 12px;
    }

    .nav li:hover .div2 {
      display: block;
      width: 75px;
      background-color: white;
      line-height: 27px;
      padding-top: 5px;
    }

    .li {
      margin-right: 0px;
      margin-bottom: 0px;
    }

    .nav {
      padding-left: 5px;
    }

    footer {
      margin-bottom: 10px;
      margin-top: -10px;
      background-color: white;
    }
  }

  @media (max-width: 414px) {
    .a1 {
      color: white;
      background-color: #009944;
      font-size: 12px;
    }

    .div2 ul li a {
      color: #009944;
      font-size: 12px;
      text-decoration:none;
    }
    .div2 ul:hover li  {
      background-color:#009944;
    }
    .div2 ul:hover li a {
      color:white;
    } 
    .nav li:hover .div2 {
      display: block;
      width: 100px;
      background-color: white;
      line-height: 27px;
      padding-top: 5px;
      z-index:100;
      margin-left:-43%;
    }

    .li {
      margin-right: 0px;
      margin-bottom: 0px;
      width:16%;
      height:56px;
    }
    .a1:hover {
    color: #009944;
    background-color: white;
    height: 56px;
}
    .nav {
      padding-left: 2%;
    }

    footer {
      margin-bottom: 10px;
      margin-top: -10px;
      background-color: #009944;
    }
  }
</style>
