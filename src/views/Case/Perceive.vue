<template>
  <div class="Smartprison">
    <div class="banner">
      <img src="../../assets/banner_1.jpg" alt="" />
    </div>
    <div class="Program">
      <div class="title">智慧物联感知平台</div>
      <div style="width:1200px; text-align: center">
        <img
          src="../../assets/case/Perceive/物联.jpg"
          alt="安防"
          class="item1"
        />
      </div>
      <div class="title1">系统概述</div>
      <div class="subtitle">
        通过集成平台进行数据交换,信息共享,使各系统既相互独立,有相互依存,从而解决系统交互能力差,数据标准不一致,图数不能互访等问题,充分发挥网络功能.
      </div>
      <div class="title1">系统功能</div>
      <div class="subtitle">
        1. 位置信息采集 2. 生命体征信息采集系统 3. 物品信息采集系统 4.
        戒毒医疗信息采集系统 5. 运动康复信息采集系统 6. 场所环境信息采集系统 7.
        设备状态传感采集系统 8. 能耗管理监测系统 9. 设备状态传感采集系统
      </div>
      <div class="title1">系统特色</div>
      <div class="subtitle">
        物联感知平台建设涉及到戒毒所的安全管理、监控管理、设备管理、绿色节能等多个方面,遵循”全面规划、分布实施、逐步完善”的总体原则.
        戒毒所工具装备信息数据集成在平台管理、统一身份认证、设备业务数据整合、改造信息资源展示等融合方式,以标准、数据、应用、用户作为重点要素为主线进行规划和建设,以智慧交互终端为平台信息展示窗口,
        以信息采集系统为数据采集交换感知捕捉,对全监区的物联设备进行统一的管理和维护.
      </div>
      <div class="title1">平台展示</div>
      <div class="box">
        <img
          src="../../assets/case/Perceive/图片1.jpg"
          alt="安防"
          class="item"
        />
        <img
          src="../../assets/case/Perceive/图片2.jpg"
          alt="安防"
          class="item"
        />
        <img
          src="../../assets/case/Perceive/图片3.jpg"
          alt="安防"
          class="item"
        />
        <img
          src="../../assets/case/Perceive/图片4.jpg"
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
