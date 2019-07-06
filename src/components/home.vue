<template>
  <div class="home">
   <img src="../assets/img/bg.png" alt="">
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      msg: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home,.home img{
  width: 100%;
  height: auto;
  overflow: hidden;
}
</style>
