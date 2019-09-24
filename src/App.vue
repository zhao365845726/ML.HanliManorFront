<template>
  <div id="app" v-cloak>
      <CommonHeader></CommonHeader>
      <!--<keep-alive>-->
        <router-view />
      <!--</keep-alive>-->
      <CommonFooter></CommonFooter>
  </div>
</template>

<script>
import CommonHeader from './components/commonHeader'
import CommonFooter from './components/commonFooter'

export default {
  name: 'App',
  components:{
    CommonHeader,
    CommonFooter
   },
    mounted() {
      var _hmt = _hmt || [];
      (function() {
        var hm = document.createElement("script");
        console.log(hm)
            hm.src = "https://hm.baidu.com/hm.js?5d63b6ea33af47bf97a1f70af26d1535";
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(hm, s);
          })();
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
