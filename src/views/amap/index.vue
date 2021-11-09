<template>
  <div class="amap-wrap">
    <el-amap
      vid="amapContainer"
      class="amap-demo"
    >
    </el-amap>
  </div>
</template>

<script>
import { AMapManager, lazyAMapApiLoaderInstance } from "vue-amap";
export default {
  name: "amap",
  data() {
    return {
      map:null,
    };
  },
  mounted() {
    // 通过该方法，使用JS API中原生的方法
    lazyAMapApiLoaderInstance.load().then(() => {
      // your code ...
      this.map = new AMap.Map("amapContainer", {
        zoom: 12,
        center: [121.59996, 31.197646],
      });
    });
  },
};
</script>
<style lang="scss">
.amap-wrap {
  height: 100vh;
}
</style>