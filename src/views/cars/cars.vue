<template>
  <div class="cars-warp">
    <section class="cars-item">
      <header>
        <h4 class="cars-logo">
          <img src="../../assets/images/cars-logo.png" alt="Mustang 2019款">
          <span>Mustang 2019款</span>
        </h4>
        <p class="attr">新能源汽车  5座</p>
      </header>
      <div class="cars-content"></div>
      <footer></footer>
    </section>
    <span @click="$router.push({name:'User'})">汽车列表</span>
  </div>
</template>

<script>
export default {
  name: "Cars",
  data() {
    return {
    };
  },
  mounted() {
    
  },
};
</script>
<style lang="scss">
.cars-warp{
  position: fixed;
  z-index: 99;
  left: 0;
  right: 0;
  bottom: 94px;
}
.cars-item{
  background-color: #fff;
  border-radius: 24px;
  margin: auto;
  padding: 30px;
  @include webkit(box-shadow,0 0 18px 0 rgba(0,0,0,0.2));
  @include webkit(box-sizing,border-box);
  width: 505px;
  height: 258px;
  header{
    display: flex;
    h4,p{
      flex: 1;
      display: flex;
    }
  }
  .cars-logo{
    img{
      height: 34px;
      vertical-align: middle;
      margin-right: 10px;
    }
    span{
      font-size: 16px;
      line-height: 34px;
    }
  }
  .attr{
    flex-direction: row-reverse;
    opacity: .5;
    line-height: 34px;
  }
}
</style>