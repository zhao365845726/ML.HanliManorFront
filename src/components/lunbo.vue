<template>
  <div class="container">
    <div class="box">
      <img class="front" src="../assets/img/m1.jpg" alt="PIC">
      <img class="back" src="../assets/img/m2.jpg" alt="PIC">
      <img class="active" src="../assets/img/m3.jpg" alt="PIC">
      <div class="btns">
        <span class="btn"><</span>
        <span class="btn">></span>
      </div>
    </div>
  </div>

</template>
<style>
  .box {
    width: 1200px;
    height: 300px;
    transform-style: perserve-3d;
    margin: 50px auto;
    position: relative;
    border:1px solid;
  }

    .box img {
      width: auto;
      height:100%;
      position: absolute;
      top: 60px;
      transition: all .3s linear;
    }

    .box:hover .btn {
      opacity: 1;
    }

  .front {
    left: 37px;
  }

  .back {
    left: 56.5%;
    border: 3px solid salmon;
  }

  .active {
   left: 48%;
    transform: scale(1.05);
    z-index: 10;
  }

  .btns .btn {
    width: 60px;
    height: 60px;
    display: block;
    position: absolute;
    background-color: rgba(0,0,0,.5);
    font-size: 50px;
    font-family: "微软雅黑";
    color: rgba(255,255,255,.5);
    line-height: 55px;
    text-align: center;
    cursor: pointer;
    z-index: 100;
    opacity: 0;
    transition: opacity .3s linear;
  }

    .btns .btn:first-child {
      top: 125px;
    }

    .btns .btn:last-child {
      top: 125px;
      right: 0px;
    }
</style>
