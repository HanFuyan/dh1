<template>
  <div class="Smartprison">
    <div class="banner">
      <img src="../../assets/banner_1.jpg" alt="" />
    </div>
    <div class="Program">
      <div class="title">应急指挥平台</div>
      <div style="width:1200px; text-align: center">
        <img
          src="../../assets/case/Emergency/图片1.jpg"
          alt="安防"
          class="item1"
        />
      </div>
      <div class="title1">系统概述</div>
      <div class="subtitle">
        应急指挥调度平台：基于GIS一张图，实现跨系统信息数据交互、通信指挥调度、信息发布等，提供多级联动集成化指挥调度，实现事件处置,及时反映事件的状态。
        强化应急指挥的快速调度、应急处置的快速反应，进一步提高监所应急指挥的规范化和科学化。
      </div>
      <div class="title1">系统流程</div>
      <div class="subtitle">
        应急预防:快速全面掌握突发事件状况;
        应急启动:针对突发事件采用提前准备的预案进行联动,解决突发事件;
        应急处置:发展态势全面掌握,扁平化通信,指令一键直达,快速执行。
      </div>
      <div class="title1">系统特色</div>
      <div class="subtitle">
        1. 地图一站式管理,便于操作,加强戒毒人员日常管理 2.
        提升戒毒安全防范及突发事件应急指挥能力 3. 提高戒毒行政办公水平
      </div>
      <div class="title1">平台展示</div>
      <div class="box">
        <img
          src="../../assets/case/Emergency/图片3.jpg"
          alt="安防"
          class="item"
        />
        <img
          src="../../assets/case/Emergency/图片4.jpg"
          alt="安防"
          class="item"
        />
        <img
          src="../../assets/case/Emergency/图片5.jpg"
          alt="安防"
          class="item"
        />
        <img
          src="../../assets/case/Emergency/图片6.jpg"
          alt="安防"
          class="item"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Smartprison'
}
</script>
<style lang="scss" scoped>
.Smartprison {
  .banner {
    img {
      width: 100%;
    }
  }
  .Program {
    padding: 50px 0;
    margin: 0 auto;
    max-width: 1200px;
    .title {
      text-align: center;
      font-size: 35px;
      font-weight: bold;
      color: rgb(8, 8, 8);
      margin-bottom: 30px;
    }
    .title1 {
      text-align: left;
      font-size: 20px;
      font-weight: bold;
      color: rgb(8, 8, 8);
      margin-bottom: 15px;
    }
    .subtitle {
      font-size: 20px;
      margin-top: 20px;
      line-height: 30px;
      color: rgb(8, 8, 8);
      text-indent: 2em;
      text-align: left;
      margin-bottom: 15px;
    }
    .box {
      max-width: 1200px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      .item {
        position: relative;
        text-align: center;
        width: 520px;
        margin: 20px 30px;
        margin-top: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        height: auto;
      }
    }
    .item1 {
      text-align: center;
      width: 520px;
      margin: 0 auto;
      height: auto;
    }
    .prisonProgram {
      position: relative;
      max-width: 1140px;
      margin: 20px auto;
      padding: 20px 30px;
      text-align: center;
      background-color: rgba(222, 230, 238, 0.7);
      .title1 {
        padding-top: 10px;
        font-weight: bold;
        font-size: 25px;
        color: #333;
        text-align: left;
      }
      .subtitle1 {
        text-align: center;
        font-size: 15px;
        margin-top: 20px;
        color: #333;
        text-indent: 2em;
        text-align: left;
        margin-bottom: 15px;
      }
      .button {
        position: absolute;
        bottom: 20px;
        left: 30px;
        width: 133px;
        height: 36px;
        line-height: 36px;
        color: #000;
        font-size: 12px;
        display: inline-block;
        border: 1px solid #666666;
        text-align: center;
      }
    }
  }
}
</style>
