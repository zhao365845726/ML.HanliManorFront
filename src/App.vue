<template>
  <div id="app"  v-cloak>
    <CommonHeader></CommonHeader>
    <router-view/>
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
