<template>
  <div class="navbar">
    <ul>
      <li><i class="icon icon-help"></i></li>
      <li><i class="icon icon-search"></i></li>
      <li>
        <a href="javascript:void(0);" class="select-btn">选择车辆</a>
      </li>
      <li><i class="icon icon-location"></i></li>
      <li><i class="icon icon-user"></i></li>
    </ul>
  </div>
</template>
<script>
export default {
}
</script>
<style lang="scss">
.navbar{
  position: fixed;
  left: 0;
  right: 0;
  bottom: 86px;
  text-align: center;
  z-index: 10;
  
  li{
    cursor: pointer;
    display: inline-block;
    .icon{
      vertical-align: middle;
      margin: 0 17px;
    }
  }
}
.select-btn{
  margin: 0 17px;
  display: inline-block;
  width: 240px;
  height: 84px;
  line-height: 84px;
  text-align: center;
  border-radius: 100px;
  background-color: $color-main;
  font-size:30px;
  color: #fff;
}
</style>