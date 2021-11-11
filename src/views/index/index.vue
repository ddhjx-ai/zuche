<template>
  <div>
    <!-- 汽车列表 -->
    <Cars/>
    <!-- 地图 -->
    <Map></Map>
    <!-- 导航 -->
    <Navbar></Navbar>
    <!-- 会员 -->
    <div id="children-view" :class="{ open: show }">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Map from '../amap/index.vue';
import Cars from '../cars/cars.vue';
import Navbar from '@c/navbar.vue';
export default {
  name: "index",
  components:{
    Map,Cars,Navbar
  },
  data() {
    return {
      // show:false,
    };
  },
  mounted() {
    
  },
  computed:{
    // 通过computed计算属性，监听路由,解决刷新页面时watch不会监听路由的状态
    show() {
      const routerName = this.$route.name;
      console.log(this.$route)
      return routerName === 'Index' ? false : true;
    }
  },
  watch:{
    /* "$route": {
      handler(newValue) {
        const routerName = newValue.name;
        this.show = routerName === 'Index' ? false : true;
      }
    } */
  }
};
</script>
<style lang="scss">
#children-view{
  position: fixed;
  top: 0;
  bottom: 0;
  right: -600px;
  width: 410px;
  background-color: #34393f;
  z-index: 100;
  transition: all .3s ease 0s;
  &.open{
    right: 0;
  }
}
</style>