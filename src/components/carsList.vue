<template>
  <div class="carsList">
    <section class="cars-item">
      <header>
        <h4 class="cars-logo">
          <img src="../assets/images/cars-logo.png" alt="Mustang 2019款" />
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
    <section class="cars-item cars-detail" :style="'height:' + height">
      <div>
        <h4 class="cars-title">
          某某停车场
          <i class="cars-close"></i>
        </h4>
        <header>
          <h4 class="cars-logo">
            <img src="../assets/images/cars-logo.png" alt="Mustang 2019款" />
            <span>Mustang 2019款</span>
          </h4>
          <p class="attr">新能源汽车 5座</p>
        </header>
        <img src="../assets/images/pic001.jpg" alt="" width="100%" />
        <div class="cars-number">
          <div class="fs-24">鄂 A123</div>
          <p><sub>约</sub><strong>500</strong><sub>KM</sub></p>
        </div>
        <div class="cars-ele-box">
          <div class="p-r">
            <span class="ele-back"></span>
            <span class="ele-line"></span>
          </div>
        </div>
        <p class="color_main t-c cars-info">
          取车支付12.0元停车费，实际补贴12.0元
        </p>
        <ul class="cars-price">
          <li class="current">
            <span>日租车</span>
            <span>￥300/1天</span>
          </li>
          <li>
            <span>3日租车</span>
            <span>￥499.00/3天</span>
          </li>
          <li>
            <span>5日租车</span>
            <span>￥799.00/5天</span>
          </li>
          <li>
            <span>小时租车</span>
            <span>￥99.00/1小时</span>
          </li>
        </ul>
        <div class="cars-footer">
          <span>参保《全面保障服务》用车更放心</span>
          <span class="current"></span>
        </div>
      </div>
      <div class="t-c cars-btn">
        <a href="javascript:void(0);" class="select-btn">预约用车</a>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: "carsList",
  props: {
    height: {
      type: String,
      default: "",
    },
  },
};
</script>
<style lang="scss">
.cars-item {
  background-color: #fff;
  border-radius: 24px;
  margin: auto;
  padding: 30px 30px 0;
  @include webkit(box-shadow, 0 0 18px 0 rgba(0, 0, 0, 0.2));
  @include webkit(box-sizing, border-box);
  // width: 505px;
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
.cars-detail {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  padding-top: 0px;
  .cars-title {
    position: relative;
    color: #34393f;
    font-size: 20px;
    border-bottom: 1px solid #e1e1e1;
    padding: 20px 0 20px;
    margin-bottom: 18px;
  }
  .cars-close {
    position: absolute;
    right: 0px;
    width: 26px;
    height: 26px;
    cursor: pointer;
    &::after,
    &::before {
      content: "";
      height: 20px;
      position: absolute;
      top: 50%;
      left: 50%;
      margin-top: -10px;
      margin-left: -10px;
      border-left: 2px solid #999c9f;
    }
    &::before {
      @include webkit(transform, rotate(45deg));
    }
    &::after {
      @include webkit(transform, rotate(-45deg));
    }
  }
  .cars-number {
    display: flex;
    justify-content: space-between;
    align-items: center;
    p {
      margin-left: 5px;
    }
    strong {
      font-size: 22px;
      margin: 0 2px;
    }
  }
  .cars-ele-box {
    margin-top: 18px;
    padding: 15px;
    border-radius: 20px;
    background-color: #fff;
    @include webkit(box-shadow, 0 0 10px rgba(0, 0, 0, 0.1));
    .ele-back {
      display: block;
      width: 100%;
      height: 8px;
      background-color: #999c9f;
      border-radius: 5px;
    }
    .ele-line {
      position: absolute;
      background: $color_blur;
      z-index: 10;
      width: 50%;
      border-radius: 5px;
      height: 8px;
      top: 0;
    }
  }
  .cars-info {
    margin: 32px 0 18px;
  }
  .cars-price {
    li {
      height: 42px;
      border-color: #f3f3f3;
      border-style: solid;
      border-width: 2px;
      background-color: #f3f3f3;
      display: flex;
      border-radius: 10px;
      justify-content: space-between;
      padding: 0 20px;
      align-items: center;
      margin-bottom: 15px;
      font-size: 16px;
      cursor: pointer;
      &.current {
        border-color: #0f9cee;
      }
    }
  }
  .cars-footer {
    margin-top: 25px;
    display: flex;
    justify-content: space-between;
    :nth-child(2) {
      display: inline-block;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background-color: #cccc;
      &::before {
        cursor: pointer;
        content: "";
        display: block;
        width: 10px;
        height: 4px;
        border-left: 2px solid #fff;
        border-bottom: 2px solid #fff;
        @include webkit(transform, rotate(-45deg));
        margin: 5px 0 0 4px;
      }
      &.current {
        background-color: $color_main;
      }
    }
  }
  .cars-btn {
    position: absolute;
    bottom: -42px;
    left: 50%;
    @include webkit(transform, translateX(-50%));
  }
  .select-btn {
    margin: 0 17px;
    display: inline-block;
    width: 240px;
    height: 84px;
    line-height: 84px;
    text-align: center;
    border-radius: 100px;
    background-color: $color_main;
    font-size: 30px;
    color: #fff;
  }
}
</style>