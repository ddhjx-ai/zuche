<template>
  <div class="carsList">
    <section class="cars-item">
          <header>
            <h4 class="cars-logo">
              <img
                src="../assets/images/cars-logo.png"
                alt="Mustang 2019款"
              />
              <span>Mustang 2019款</span>
            </h4>
            <p class="attr">新能源汽车 5座</p>
          </header>
          <div class="cars-content">
            <div class="info">
              <div>
                <h4 class="cars-number">鄂 A123</h4>
                <div class="cars-km">
                  <ul class="cars-ele">
                    <li class="active"></li>
                    <li class="active"></li>
                    <li class="active"></li>
                    <li class="active"></li>
                    <li class="active"></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                  <p><sub>约</sub><strong>500</strong><sub>KM</sub></p>
                </div>
              </div>
            </div>
            <img src="../assets/images/pic001.jpg" alt="" />
          </div>
          <footer>
            <a href="javascript:void(0);" class="cars-parking">某某停车场</a>
          </footer>
        </section>
  </div>
</template>
<script>
export default {
}
</script>
<style lang="scss">
.cars-item {
  background-color: #fff;
  border-radius: 24px;
  margin: auto;
  padding: 30px 30px 0;
  @include webkit(box-shadow, 0 0 18px 0 rgba(0, 0, 0, 0.2));
  @include webkit(box-sizing, border-box);
  width: 505px;
  height: 258px;
  header {
    display: flex;
    h4,
    p {
      flex: 1;
      display: flex;
    }
  }
  .cars-logo {
    img {
      height: 34px;
      vertical-align: middle;
      margin-right: 10px;
    }
    span {
      font-size: 16px;
      line-height: 34px;
    }
  }
  .attr {
    flex-direction: row-reverse;
    opacity: 0.5;
    line-height: 34px;
  }
  .cars-content {
    position: relative;
    margin: 11px 0 7px 0;
    @extend %clearfix;
    img {
      float: right;
      height: 120px;
    }
    .info {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
    }
    .cars-number {
      font-size: 18px;
    }
    .cars-ele {
      display: flex;
      margin-top: 10px;
      li {
        width: 7px;
        height: 24px;
        border-radius: 10px;
        background-color: #e1e1e1;
        margin-right: 3px;
      }
      li.active {
        @include webkitA(background, linear-gradient(#17a8fa, #108dd9));
        // background: linear-gradient( #17a8fa, #108dd9);
      }
    }
    .cars-km {
      display: flex;
      align-items: flex-end;
      p {
        margin-left: 5px;
      }
      strong {
        font-size: 22px;
        margin: 0 2px;
      }
    }
  }
  .cars-parking {
    display: block;
    color: $color-main;
    opacity: 0.8;
    line-height: 54px;
    border-top: 1px solid #e1e1e1;
    position: relative;
    &::after {
      content: "";
      position: absolute;
      right: 0px;
      width: 8px;
      height: 8px;
      border-top: 1px solid #000;
      border-right: 1px solid #000;
      top: 20px;
      @include webkit(transform, rotate(45deg));
    }
  }
}
</style>