<template>
  <div class="container supplier margin">
    <img src="../assets/img/供应商.png" alt="" class="img">
    <div class="container main margin">
      <div class="intro-header">
        <h2>MEDIA FOCUS SDFDFGCXTHGF</h2>
        <p>诚招供应商</p>
      </div>
      <ul class="container list list-guide mt-120">
        <li>
          <div class="guide-item">
            <div class="guide-item__bg"></div>
            <dl class="guide-intro">
              <dt>简介</dt>
              <dd style="width:100%;">
                <p v-html="jianjie"></p>
              </dd>
            </dl>
          </div>
        </li>
        <li>
          <div class="guide-item">
            <div class="guide-item__bg"></div>
            <dl class="guide-intro guide-intro2 col-1">
              <dt>理念</dt>
              <dd>
                <p v-html="jianjie_a"></p>
              </dd>
            </dl>
          </div>
        </li>
      </ul>
      <ul class="container place">
        <!--<li v-for="(item,index) in shuju_a">
          <span class="icon-img"></span>
          <router-link :to="{path:'mediaDetail',query:{name:'诚招供应商',id:item.Id}}" class="news-item">
            <div class="con">
              <b>{{item.Title}}</b>
            </div>
          </router-link>
        </li>-->
        <li v-for="(item,index) in shuju_a">
          <img class="icon-img" :src="item.CoverPhoto">
          <div class="con">
            <b style="cursor:text">{{item.Title}}</b>
            <p style="cursor:text">{{item.Abstract}}</p>
          </div>
        </li>
      </ul>
    </div>

    <div class="join-conditions">
      <div class="container main margin">
        <div class="intro-header center white">
          <h2>MEDIA FOCUS SDFDFGCXTHGF</h2>
          <p>加盟政策</p>
        </div>
        <div class="member-rule-title member-rule-title1">合作条件</div>
        <ul class="list list-6 list-jc mt-80">
          <li>
            <div class="jc-item">
              <span class="jc-item__ico icon-jc01">
                <img src="../assets/img/p1.jpg" class="img_a" />
              </span>
              <h3 class="jc-item__title">认同文化理念</h3>
              <p class="jc-item__desc"></p>
              <!--<h3 class="jc-item__title">{{this.jianjie_b}}</h3>
  <p class="jc-item__desc" v-html="this.jianjie_c"></p>-->
            </div>
          </li>
          <li>
            <div class="jc-item">
              <span class="jc-item__ico icon-jc01">
                <img src="../assets/img/p2.jpg" class="img_a" />
              </span>
              <h3 class="jc-item__title">风险意识</h3>
              <p class="jc-item__desc">经营预测、抗风险能力</p>
              <!--<h3 class="jc-item__title">{{this.jianjie_b}}</h3>
  <p class="jc-item__desc" v-html="this.jianjie_c"></p>-->
            </div>
          </li>
          <li>
            <div class="jc-item">
              <span class="jc-item__ico icon-jc01">
                <img src="../assets/img/p3.jpg" class="img_a" />
              </span>
              <h3 class="jc-item__title">合作</h3>
              <p class="jc-item__desc">有激情、有商誉、有梦想</p>
              <!--<h3 class="jc-item__title">{{this.jianjie_b}}</h3>
  <p class="jc-item__desc" v-html="this.jianjie_c"></p>-->
            </div>
          </li>
          <li>
            <div class="jc-item">
              <span class="jc-item__ico icon-jc01">
                <img src="../assets/img/p4.jpg" class="img_a" />
              </span>
              <h3 class="jc-item__title">了解行业</h3>
              <p class="jc-item__desc">关注、热衷</p>
              <!--<h3 class="jc-item__title">{{this.jianjie_b}}</h3>
  <p class="jc-item__desc" v-html="this.jianjie_c"></p>-->
              <p class="jc-item__desc"></p>
            </div>
          </li>
          <li>
            <div class="jc-item">
              <span class="jc-item__ico icon-jc01">
                <img src="../assets/img/p5.jpg" class="img_a" />
              </span>
              <h3 class="jc-item__title">模式</h3>
              <p class="jc-item__desc">有较成熟的经营模式、理念</p>
              <!--<h3 class="jc-item__title">{{this.jianjie_b}}</h3>
  <p class="jc-item__desc" v-html="this.jianjie_c"></p>-->
            </div>
          </li>
          <li>
            <div class="jc-item">
              <span class="jc-item__ico icon-jc01">
                <img src="../assets/img/p6.jpg" class="img_a" />
              </span>
              <h3 class="jc-item__title">认同管理</h3>
              <p class="jc-item__desc">懂经营</p>
              <!--<h3 class="jc-item__title">{{this.jianjie_b}}</h3>
  <p class="jc-item__desc" v-html="this.jianjie_c"></p>-->
            </div>
          </li>
        </ul>
      </div>
    </div>

    <div class="container main margin">
      <div class="member-rule-title mt-60">合作流程</div>
      <ul class="container list list-6 list-jp mt-30">
        <li>
          <div class="jp-item">
            <span class="jp-item__num">01</span>
            <p class="jp-item__desc">报名申请</p>
          </div>
        </li>
        <li>
          <div class="jp-item">
            <span class="jp-item__num">02</span>
            <p class="jp-item__desc">资格审核</p>
          </div>
        </li>
        <li>
          <div class="jp-item">
            <span class="jp-item__num">03</span>
            <p class="jp-item__desc">考察洽谈</p>
          </div>
        </li>
        <li>
          <div class="jp-item">
            <span class="jp-item__num">04</span>
            <p class="jp-item__desc">签约合作</p>
          </div>
        </li>
        <li>
          <div class="jp-item">
            <span class="jp-item__num">05</span>
            <p class="jp-item__desc">专业培训</p>
          </div>
        </li>
        <li>
          <div class="jp-item">
            <span class="jp-item__num">06</span>
            <p class="jp-item__desc">授权发货</p>
          </div>
        </li>
      </ul>
    </div>

    <div class="join-form">
      <div class="container main margin">
        <div class="intro-header center">
          <h2>MEDIA FOCUS SDFDFGCXTHGF</h2>
          <p>优惠政策</p>
        </div>
        <!--<input type="text" class="form-group-input"/>-->
        <form id="infoForm" action="/a/daily/weixin/save" method="post" @submit.prevent="submit">
          <div class="form-main mt-50">
            <div class="form-group">
              <h3 class="form-sec-title">基础信息</h3>
            </div>
            <div class="mt-20">
              <div class="col col-20">
                <div class="form-group">
                  <label class="form-group-label" for="franchName">姓名<span>*</span></label>
                  <input class="form-group-input" type="text" name="franchName" id="franchName" v-model="name">
                  <!--<p>输入内容：{{name}}</p>-->
                </div>
              </div>
              <div class="col col-20">
                <div class="form-group">
                  <label class="form-group-label" for="phone">联系方式<span>*</span></label>
                  <input class="form-group-input" type="text" name="phone" id="phone" v-model="phone">
                  <!--<p>输入内容：{{phone}}</p>-->
                </div>
              </div>
              <div class="col col-20">
                <div class="form-group">
                  <div class="form-radio-label" for="gender">性别<span>*</span></div>
                  <input class="form-radio-input" type="radio" name="gender" id="gender" value="男" checked="" v-model="value">
                  <label for="gender" class="label-for-radio">
                    男
                  </label>
                  <input class="form-radio-input" type="radio" name="gender" id="gender2" value="女" v-model="value">
                  <label for="gender2" class="label-for-radio">
                    女
                  </label>
                  <!--<p>输入:{{value}}</p>-->
                </div>
              </div>
              <div class="col col-20 pc-show">
                <div class="form-group">
                  <label for="birthday" class="form-group-label_b">出生年月<span>*</span></label>
                  <date @chang="changeTime" :date="startTime" :option="timeoption" :limit="limit" for="birthday" v-model="startTime">
                  </date>
                  <!--<p>时间：{{startTime}}</p>-->
                </div>
              </div>
              <div class="col col-20">
                <div class="form-group">
                  <div class="form-select">
                    <label class="form-group-label_a js-label-select" for="resourceType">信息来源<span>*</span></label>
                    <select class="form-group-select" name="resourceType" id="resourceType" v-model="selected">
                      <option value="">---请选择---</option>
                      <option value="网络查询">网络查询</option>
                      <option value="朋友推荐">朋友推荐</option>
                      <option value="400咨询">400咨询</option>
                      <option value="门店咨询">门店咨询</option>
                      <option value="良品加盟商推荐">良品加盟商推荐</option>
                      <option value="其他">其他</option>
                    </select>
                  </div>
                </div>
              </div>
              <!--<p>你选择的是:{{selected}}</p>-->
            </div>
            <div class="form-group mt-50">
              <h3 class="form-sec-title">个人资源<span style="color: #00873c;">*</span><span style="font-size:12px;">(请选择3项)</span></h3>
            </div>
            <div class="form-group form-group-resources mt-10" id="div">
              <input class="form-radio-input_a" type="checkbox" name="personalResourceList" id="resources1" value="行业协会及商会" @click="cktest(this)" v-model="resources">
              <label for="resources1" class="label-for-radio_a" >
                行业协会及商会
              </label>
              <input class="form-radio-input_a" type="checkbox" name="personalResourceList" id="resources2" value="购物中心" @click="cktest(this)" v-model="resources">
              <label for="resources2" class="label-for-radio_a" >
                购物中心
              </label>
              <input class="form-radio-input_a" type="checkbox" name="personalResourceList" id="resources3" value="社会资源" @click="cktest(this)" v-model="resources">
              <label for="resources3" class="label-for-radio_a" >
                社会资源
              </label>
              <input class="form-radio-input_a" type="checkbox" name="personalResourceList" id="resources4" value="品牌连锁" @click="cktest(this)" v-model="resources">
              <label for="resources4" class="label-for-radio_a" >
                品牌连锁
              </label>
              <input class="form-radio-input_a" type="checkbox" name="personalResourceList" id="resources5" value="交通枢纽" @click="cktest(this)" v-model="resources">
              <label for="resources5" class="label-for-radio_a">
                交通枢纽
              </label>
              <input class="form-radio-input_a" type="checkbox" name="personalResourceList" id="resources6" value="其它" @click="cktest(this)" v-model="resources">
              <label for="resources6" class="label-for-radio_a" >
                其它
              </label>
              <!--<p>你输入内容:{{resources}}</p>-->
            </div>
          
            <div class="form-group">
              <label for="specificResource" class="label-for-textarea">具体资源项目：</label>
              <textarea class="form-textarea" name="specificResource" id="specificResource" rows="3" v-model="specificResource"></textarea>
              <!--<p>你输入内容：{{specificResource}}</p>-->
            </div>
            <div class="form-group mt-50">
              <h3 class="form-sec-title">加盟意愿</h3>
            </div>
            <div class="mt-20">
              <div class="col col-33">
                <div class="form-group">
                  <div class="form-select">
                    <label class="form-group-label_a js-label-select" for="intentionProv">意向发展区域<span>*</span></label>
                    <select name="intentionProv" id="intentionProv" v-model="selected_b">
                      <option value="">---请选择---</option>
                      <option value="汉口">汉口</option>
                      <option value="武昌">武昌</option>
                      <option value="荆州">荆州</option>
                      <option value="江苏">江苏</option>
                      <option value="江西">江西</option>
                      <option value="河南">河南</option>
                      <option value="湖南">湖南</option>
                      <option value="深圳">深圳</option>
                      <option value="重庆">重庆</option>
                      <option value="四川">四川</option>
                      <option value="陕西">陕西</option>
                      <option value="广西">广西</option>
                      <option value="广东">广东</option>
                      <option value="安徽">安徽</option>
                      <option value="浙江">浙江</option>
                    </select>
                  </div>
                </div>
                <!--<p style="margin-top:15%;">你的选择是:{{selected_b}}</p>-->
              </div>
              <div class="col col-33">
                <div class="form-group">
                  <div class="form-select">
                    <label class="form-group-label_a js-label-select" for="ifShop">是否有意向店铺<span>*</span></label>
                    <select name="ifShop" id="ifShop" v-model="selected_a">
                      <option value="">---请选择---</option>
                      <option value="是">是</option>
                      <option value="否">否</option>
                    </select>
                  </div>
                </div>
                <!--<p style="margin-top:15%;">你的选择是：{{selected_a}}</p>-->
              </div>

              <div class="col col-33">
                <div class="form-group">
                  <label class="form-group-label" for="intentionAddress">意向店铺地址：</label>
                  <input class="form-group-input" type="text" name="intentionAddress" id="intentionAddress" v-model="intentionAddress">
                  <!--<p>你输入内容：{{intentionAddress}}</p>-->
                </div>
              </div>
            </div>
            <div class="form-group">
              <div class="form-tip mt-20">
                备注：带<span>*</span>为必选项，具体表格的细节参见官方微信。成功提交后，公司会在7天内予以审核回复，感谢您的耐心等待!
              </div>
            </div>
            <div class="t-c mt-60">
              <input  value="提交"  type="submit" class="tijiao "/>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "supplier",
    data() {
      return {
        shuju_a: [],
        jianjie: [],
        jianjie_a: [],
        //jianjie_b: [],
        //jianjie_c: [],
        startTime: { time: '2012-08-08' },//默认初始时间
        endTime: { time: ''},//结束时间
        timeoption: {
          type: 'day',//day , multi-day //针对日期的限制
          week: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
          month: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
          format: 'YYYY-MM-DD',//日期
          inputStyle: {//input样式
            'display': 'inline-block',
            'padding': '.1rem .05rem',
            'line-height': '50px',
            'width': '225px',
            'font-size': '14px',
            'border': '1px solid #eeeeee',
            'border-radius': '2px',
            'padding-left':'116px',
          },
          color: {//字体颜色
           header: '#35acff',//头部
           headerText:'#fff'
          },
          buttons: {
            ok: '确定',
            cancel:'取消'
          },
          overlayOpacity: 0.5, // 遮罩透明度
          placeholder: '请选时间', // 提示日期
          dismissible: false // 默认true 待定
        },
        limit: [
          {//对时间区间的设定
            type: 'weekday',
            available:[1,2,3,4,5,6,0]
          },
          {
            type: 'fromto',
            from: '',//最早的开始时间
            to:''//这个时间是我自己拼接出来的当前时间，也可以自己写入
          }
        ],
        //urls: {
          name: '',//名字
          phone: '',//电话
          value: '',//性别
          selected: '',//信息来源
          selected_a: '',//是否有意向店铺
          selected_b:'',//意向发展区域
          specificResource: '',//具体资源项目
          intentionAddress: '',//地址
          resources:[],//个人资源
        //},
       
      }
    },
    methods: {
      cktest() {
        var cs = document.getElementsByName('personalResourceList')
        //console.log(cs)
        for (var i = 0; i < cs.length; i++) {
          //console.log(cs[i])
          var num = 0;
          for (var i = 0; i < cs.length; i++) {
            if (cs[i].checked) {
              num++;
            } 
          }
          if (num >=3) {
            for (var i = 0; i < cs.length; i++) {
              if (!cs[i].checked) {
                cs[i].disabled = "disabled";
              }
            }
          }else {
            for (var i = 0; i < cs.length; i++) {
              if (!cs[i].checked) {
                cs[i].disabled = false;
              }
            }
          }
        }
      },
      changeTime() { },
      submit: function() {
         //var formData = JSON.stringify(this.urls); // 表单数据
        //console.log(formData)
        var a = this.resources.join();
        //console.log(a)
         this.$axios
           .post('http://hlzy.api.gpscxqyw.com/api/content/recruitsupplies', {
             "UserName": this.name,//名字
             "Telephone": this.phone,//电话
              "Gender":  this.value,//性别
              "Birthday":  this.startTime.time,//出生日期
             "InfoSource": this.selected,//信息来源
             "PersonalResource": a,//个人资源
              "ProjectDescription":  this.specificResource,//具体资源项目
              "DevelopmentRegion":  this.selected_b,//意向发展区域
              "IsIntentionShop":  this.selected_a,//意向店铺选择
              "Address": this.intentionAddress//地址
           })
           .then((res) => {
             //console.log(res)     
           })
        }
  },
mounted() {
  this.$axios
    .post('http://hlzy.api.gpscxqyw.com/api/content/getcategoryarticlelist', {
      "categoryid": "7a14ec45-a68d-4be0-a698-2a70e9122bf8",
      "PageIndex": 1,
      "PageSize": 10
    })
    .then((res) => {
      this.shuju = res.data.data.lst_categoryarticlelist;
      var shuju = this.shuju;
      //var shuju_a = shuju.slice(3, 6);
      this.shuju_a = shuju;
      //console.log(res.data.data.lst_categoryarticlelist);
      this.$axios
        .post('http://hlzy.api.gpscxqyw.com/api/content/getarticledetail', {
          "ArticleId": "7d3c8d45-c566-4261-b32b-626ff41f5996"
        })
        .then((res_a) => {
          this.jianjie = res_a.data.data.Body;
          //console.log(this.jianjie);
        })
      this.$axios
        .post('http://hlzy.api.gpscxqyw.com/api/content/getarticledetail', {
          "ArticleId": "b4b43286-532c-4d2f-814f-78cfbe17c38e"
        })
        .then((res_b) => {
          this.jianjie_a = res_b.data.data.Body;
          //console.log(this.jianjie_a);
        })
      //this.$axios
      //  .post('http://hlzy.api.gpscxqyw.com/api/content/getarticledetail', {
      //    "ArticleId": "5e4134e4-89ab-4bd4-bc92-547a9954c984"
      //  })
      //  .then((res_c) => {
      //    this.jianjie_b = res_c.data.data.Title;
      //    this.jianjie_c = res_c.data.data.Body;
      //    console.log(this.jianjie_b);
      //  })
    })
  }
};
</script>

<style scoped>
    * {
      box-sizing: border-box;
    }
  #resourceType  option{
    width:100px;
  }
  #div {
    margin-top:40px;
  }
      .img_a {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 1px solid #00873c;
    top: 0;
    left: 0;
    cursor:pointer;
    transition:all 0.3s ease-out;
    -moz-transition:all 0.3s ease-out;
    -webkit-transition:all 0.3s ease-out;
    -o-transition:all 0.3s ease-out;
   }
        .img_a:hover {
          transform:scale(1.02,1.02);
        }
    .supplier {
      margin-bottom:5%;
    }
    
    .container {
      overflow: hidden;
    }
 /*.place li :hover.con b {
    display: block;
    font-weight: normal;
    font-size: 21px;
    margin-bottom: 10px;
    color:#00873C;
    
}*/
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
        text-align: center;
        font-weight:600;
      }

      .intro-header p {
        font-size: 33px;
        margin-top: 36px;
        text-align: center;
      }

    .list-guide {
      margin-top: 120px;
    }

    .list > li {
      float: left;
    }

    .list-guide > li:first-of-type {
      width: 67%;
    }

    .list-guide > li:nth-of-type(2) {
      width: 33%;
    }

    .guide-item {
      position: relative;
      z-index: 1;
      padding: 30px 40px;
      margin: 0 12px;
      min-height: 208px;
      background-color: #f7f7f7;
      color: gray;
      /*cursor: -webkit-grab;*/
    }

    .guide-item__bg {
      position: absolute;
      z-index: -1;
      top: -16px;
      right: 0;
      bottom: 0;
      left: 0;
      overflow: hidden;
      visibility: hidden;
      opacity: 0;
    }

    .guide-intro dt {
      position: relative;
      padding-left: 20px;
      margin-left: 40px;
      margin-bottom: 8px;
      font-size: 24px;
      line-height: 2;
      color: #333;
      letter-spacing: .06em;
    }

      .guide-intro dt::before {
        content: "";
        position: absolute;
        top: 50%;
        left: 0;
        margin-top: -6px;
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background-color: #00873c;
      }

    .guide-intro dd {
      padding: 0 40px;
      display: inline-block;
      vertical-align: top;
      width: 49%;
      font-size: 14px;
      line-height: 24px;
      cursor:text;
    }

    .guide-intro2 dd {
      width: 100%;
    }

    .guide-intro dd p {
      margin-bottom: 10px;
    }

    .list li:hover .guide-item__bg {
      background: #00873c;
      opacity: 1;
      visibility: visible;
    }

    .list li:hover .guide-intro dt, .list li:hover .guide-intro dd {
      color: #fff;
    }
      .list li:hover .guide-intro dt::before {
        background: #fff;
      }

    .join-conditions {
      padding: 80px 0;
      background-color: #00873c;
      margin-top:68px;
    }

      .join-conditions .intro-header {
        color: #fff;
      }

    .member-rule-title {
      position: relative;
      padding-left: 20px;
      font-size: 24px;
      line-height: 48px;
      color: #333;
      margin-top: 50px;
    }

    .member-rule-title1 {
      color: #fff;
      margin-bottom:3%;
    }

    .member-rule-title::before {
      display: block;
      content: "";
      position: absolute;
      top: 50%;
      left: 0;
      margin-top: -6px;
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background-color: #00873c;
    }
  
    .member-rule-title1::before {
      background-color: #fff;
    }

    .list-jc {
      margin-right: -40px;
      margin-left: -40px;
    }

    .list-6 > li {
      display: inline-block;
      vertical-align: top;
      width: 16.6666%;
    }

    .jc-item {
      margin: 0 40px;
      color: #fff;
      text-align: center;
    }

    .jc-item__ico {
      display: inline-block;
      width: 2.34286em;
      height: 2.34286em;
      border: 2px solid #fff;
      border-radius: 50%;
      font-size: 70px;
      line-height: 1.34286;
      text-align: center;
    }

    .jc-item__title {
      margin: 30px 10px;
      font-size: 20px;
      text-align: center;
    }

    .jc-item__desc {
      font-size: 13px;
      line-height: 28px;
      text-align: center;
    }

    .mt-60 {
      margin-top: 60px;
    }

    .list-jp {
      position: relative;
      z-index: 1;
      margin-right: -20px;
      margin-left: -20px;
    }

    .mt-30 {
      margin-top: 30px;
    }

    .list-jp::before, .list-jp::after {
      content: "";
      z-index: -1;
      position: absolute;
      top: 36px;
      right: 8.3333%;
      left: 8.3333%;
      height: 2px;
      background-color: #b2b2b2;
    }

    .jp-item {
      text-align: center;
      margin: 0 20px;
      cursor:pointer;
    }

    .jp-item__num {
      display: inline-block;
      vertical-align: top;
      width: 75px;
      height: 75px;
      border-radius: 50%;
      background-color: gray;
      color: #fff;
      text-align: center;
      font: 400 36px/80px "AvenirLTStd";
    }

    .jp-item__desc {
      margin-top: 1em;
      font-size: 20px;
      color: gray;
      letter-spacing: .06em;
      text-align: center;
    }

    .join-form {
      padding: 80px 0 95px;
      background-color: #f7f7f7;
      margin-top: 120px;
    }

    .intro-header.center {
      text-align: center;
    }

    .form-main {
      font-size: 14px;
      margin-right: -12px;
      margin-left: -12px;
    }

    .mt-50 {
      margin-top: 50px;
    }

    .form-group {
      position: relative;
      margin-right: 12px;
      margin-left: 12px;
    }

    .form-sec-title {
      font-size: 20px;
      color: #333;
      letter-spacing: .06em;
    }

    .mt-20 {
      margin-top: 20px;
    }

    .col-20 {
      width: 20%;
    }

    .col {
      display: inline-block;
      vertical-align: top;
    }

    .form-group {
      position: relative;
      margin-right: 12px;
      margin-left: 12px;
    }

   .form-group-label{
    position: absolute;
    z-index: 1;
    top: 0;
    right: 0;
    left: 0;
    padding-left: 10px;
    height: 50px;
    font-size: 16px;
    line-height: 50px;
    color: gray;
    letter-spacing: .06em;
    cursor: text;
}
      .form-group-label_a{
    position: absolute;
    z-index: 1;
    top: 0;
    right: 0;
    left: 0;
    padding-left: 10px;
    height: 50px;
    font-size: 16px;
    line-height: 50px;
    color: gray;
    letter-spacing: .06em;
    cursor: text;
    background-color: white;
}
      .form-group-label_b{
    position: absolute;
    z-index: 1;
    top: 0;
    right: 0;
    left: 0;
    padding-left: 10px;
    height: 50px;
    font-size: 16px;
    line-height: 50px;
    color: gray;
    letter-spacing: .06em;
    background-color: white;
    width: 95px;
}

      .form-group-label span {
        color: #00873c;
      }
      .form-group-label_a span {
        color: #00873c;
      }
      .form-group-label_b span {
        color: #00873c;
      }
    .form-group-input {
      padding: 0 0 0 10px;
      margin: 0;
      border: 0;
      outline: 0;
      display: block;
      width: 100%;
      height: 50px;
      letter-spacing: .06em;
      background-color: #fff;
      padding-left: 38%;
    }

    .form-radio-label {
      display: inline-block;
      vertical-align: top;
      font-size: 16px;
      line-height: 50px;
      color: gray;
      letter-spacing: .06em;
    }

    .form-radio-input {
      display: none;
    } 
    .form-radio-input_a {
      /*display: none;*/
      margin-left:80px;
    }
      .form-radio-input:checked + label {
        color: #00873c;
      }

    .label-for-radio::before, .label-for-radio::after {
      content: "";
      position: absolute;
      top: 50%;
    }

    .form-radio-input:checked + label::before {
      background-color: #00873c;
    }

    .form-select {
      position: relative;
      background-color: #fff;
    }

      .form-select select {
        position: relative;
        z-index: 2;
        opacity: 1;
        display: block;
        width: 66%;
        height: 50px;
        border: 0;
        background-color: transparent;
        outline: 0;
        font-size: 16px;
        /*padding-left: 38%;*/
        color: gray;
        cursor:pointer;
        float:right;
      }
    /*.form-select::after {
      content: "";
      position: absolute;
      top: 50%;
      right: 20px;
      margin-top: -3px;
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 6px 6px 0 6px;
      border-color: #00873c transparent transparent transparent;
  }*/
    .mt-10 {
      margin-top: 10px;
    }

    .form-group-resources .label-for-radio {
      margin-left: 0;
      margin-right: 80px;
    }

    .label-for-radio {
      position: relative;
      padding-left: 30px;
      margin-left: 40px;
      display: inline-block;
      vertical-align: top;
      font-size: 16px;
      line-height: 50px;
      color: gray;
      letter-spacing: .06em;
      cursor: pointer;
    }
  .label-for-radio_a {
    position: relative;
      display: inline-block;
      font-size: 16px;
      line-height: 50px;
      color: gray;
      letter-spacing: .06em;
      cursor: pointer;
      margin-left:0px;
      
  }

      .label-for-radio::before {
        margin-top: -8px;
        left: 0;
        width: 14px;
        height: 14px;
        border: 2px solid #fff;
        border-radius: 50%;
        background-color: #fff;
      }
    .label-for-textarea {
      font-size: 16px;
      line-height: 40px;
      color: #333;
    }

    .form-textarea {
      display: block;
      width: 100%;
      padding: 10px 20px;
      border: 0;
      outline: 0;
      resize: none;
      font-size: 16px;
      line-height: 2;
      color: gray;
    }

    .mt-20 {
      margin-top: 20px;
    }

    .col-33 {
      display: inline-block;
      vertical-align: top;
      width: 33.3333%;
      margin-top:20px;
    }

    .form-tip {
      font-size: 14px;
      line-height: 2;
      color: gray;
    }

    .mt-60 {
      margin-top: 60px;
      overflow: hidden;
    }

    .btn-apply {
      position: relative;
      z-index: 1;
      display: inline-block;
      vertical-align: top;
      width: 286px;
      height: 68px;
      font-size: 26px;
      line-height: 68px;
      text-align: center;
      color: #fff;
      text-decoration:none;
    }

    .btn-apply__bg {
      position: absolute;
      z-index: -1;
      top: -16px;
      right: 0;
      bottom: 0;
      left: 0;
      overflow: hidden;
      background: #00873c;
    }
  .tijiao {
     position: absolute;
      overflow: hidden;
      background: #00873c;
      color:white;
      position: relative;
      z-index: 1;
      display: inline-block;
      vertical-align: top;
      width: 286px;
      height: 68px;
      font-size: 26px;
      line-height: 68px;
      text-align: center;
      color: #fff;
      text-decoration: none;
  }
    .place li {
      float: left;
      width: 33.33%;
      height: 230px;
      padding: 110px 36px;
      padding-bottom:0;
    }

      .place li .icon-img {
        float: left;
        width: 70px;
        height: 70px;
        background: #00873c;
        border-radius: 50%;
      }

      .place li .con {
        float: left;
        width: calc(100% - 70px);
        height: auto;
        overflow: hidden;
        padding-left: 14px;
      }

        .place li .con b {
          display: block;
          font-weight: normal;
          font-size: 21px;
          color: #595757;
          margin-bottom: 10px;
        }

        .place li .con p {
          font-size: 14px;
          color: #595757;
          line-height: 28px
        }

    @media (max-width: 1480px) {
      .main {
        padding: 0 40px;
      }

      .jc-item {
        margin: 0 2.7027vw;
      }

      .jc-item__ico {
        font-size: 4.59459vw;
      }

      .join-form {
        padding-bottom: 6.51351vw;
      }

      .mt-50 {
        margin-top: 3.37838vw;
      }

      .form-group {
        margin-bottom: 20px;
      }
    }

    @media (max-width: 1280px) {
      .jp-item__num {
        width: 60px;
        height: 60px;
        font-size: 32px;
        line-height: 60px;
      }

      .jp-item__desc {
        font-size: 16px;
      }

      .list-jp::before {
        top: 29px;
      }
      .jp-item__num {
        width: 60px;
        height: 60px;
        font-size: 32px;
        line-height: 66px;
      }
      .jp-item__desc {
        font-size: 16px;
      }

      .form-main .col-20 {
        width: 33.3333%;
      }
    }

    @media (max-width: 1100px) {
      .guide-item {
        padding: 20px;
        margin-right: 0;
        margin-left: 0;
        margin-bottom: 20px;
        min-height: auto !important;
      }

      .list-guide > li {
        float: initial;
        width: 100%;
      }

        .list-guide > li:first-of-type {
          width: 100%;
        }

        .list-guide > li:nth-of-type(2) {
          width: 100%;
        }

      .place li {
        float: initial;
        width: 100%;
        padding: 30px;
        height: auto;
        overflow: hidden;
      }

      .jc-item {
        margin-right: 20px;
        margin-left: 20px;
        margin-bottom: 30px;
      }

      .list-6 > li, .list-jp > li {
        width: 33.33%;
      }

      .member-rule-title {
        font-size: 20px;
      }

      .jp-item {
        margin-bottom: 40px;
      }

      .list-jp::before, .list-jp::after {
        right: 16.6666%;
        left: 16.6666%;
      }

      .list-jp::after {
        display: block;
        top: auto;
        bottom: 60px;
      }

      .jp-item {
        margin-bottom: 40px;
      }

      .list-jp > li:nth-of-type(n+4) .jp-item {
        margin-bottom: 0;
      }

      .form-main .col-20 {
        width: 50%;
      }

      .form-main .col-33 {
        width: 50%;
      }
    }

    @media (max-width: 768px) {
      .main {
        padding: 0 20px;
      }

      .img {
        margin-bottom: 50px;
      }

      .intro-header h2 {
        font-size: 27px;
      }

      .intro-header p {
        font-size: 25px;
        margin-top: 20px;
      }

      .list-guide {
        margin-top: 30px;
      }

      .guide-intro dd {
        width: 100%;
        padding: 0;
      }

      .guide-intro dt {
        margin-left: 0;
      }

      .place li {
        padding: 15px 0;
      }

        .place li .icon-img {
          width: 50px;
          height: 50px;
        }

        .place li .con {
          width: calc(100% - 50px);
        }

      .list-jc > li {
        width: 50%;
      }

      .jc-item__ico {
        font-size: 40px;
      }

      .form-main .col-20 {
        width: 100%;
      }

      .form-main .col-33 {
        width: 100%;
      }

      .mt-60 {
        margin-top: 30px;
      }

      .btn-apply {
        width: 200px;
        height: 50px;
        font-size: 20px;
        line-height: 50px;
      }

      .jp-item {
        margin-right: 0;
        margin-left: 0;
      }

      .list-jp::before {
        top: 19px;
      }

      .list-jp::after {
        bottom: 40px;
      }

      .jp-item__num {
        width: 40px;
        height: 40px;
        font-size: 20px;
        line-height: 44px;
      }

      .jp-item__desc {
        font-size: 3.2vw;
      }
    }
</style>
