import Vue from "vue";
import VueAMap from 'vue-amap';
Vue.use(VueAMap);
VueAMap.initAMapApiLoader({
//高德key
key: 'f0efaf31ab9a74ac2a8315e9bfcd9839', 
//插件集合 （插件按需引入）
plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar',
'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor', 'AMap.MarkerClusterer'],
v: '1.4.15', //我也不知道为什么要写这个，不写项目会报错，而且我随便写的，跟我下载的版本对应不了
uiVersion: '1.0.11' // ui版本号，也是需要写
})