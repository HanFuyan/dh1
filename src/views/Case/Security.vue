<template>
  <div class="Smartprison">
    <div class="banner">
      <img src="../../assets/banner_1.jpg" alt="" />
    </div>
    <div class="Program">
      <div class="title">安防综合管理平台</div>
      <div style="width:1200px; text-align: center">
        <img src="../../assets/project/安防.png" alt="安防" class="item1" />
      </div>
      <div class="title1">系统背景</div>
      <div class="subtitle">
        安防综合管理平台：统一集成强制隔离戒毒所视频、门禁、巡更、报警、访客等安防子系统，提供日常巡查、智能轮巡、报警管理等功能，实现戒毒所安防资源的统一监管，有效提升戒毒所安全防范水平。
      </div>
      <div class="title1">系统概述</div>
      <div class="subtitle">
        司法部《”数字法治 智慧司法”
        信息化体系建设指导意见》中明确要求:“技术融合，业务融合，数据融合，打通信息壁垒，建设全系统统筹利用，统一接入的数据资源平台与共享服务平台”法部《“智慧戒毒”建设实施意见》中提出“智慧戒毒管理平台”作全流程数据化的统一平台。
      </div>
      <div class="title1">系统功能</div>
      <div class="subtitle">
        视频监控:实时查看学员动态; 门禁控制:门禁开关控制/门禁实时状态;
        统一身份认证:统一用户权限管理; 巡更:巡更打卡签到;
        报警管理:统一处理报警数据; 安防指标评估:统一评估监所安防等级。
      </div>
      <div class="title1">平台展示</div>
      <div class="box">
        <img
          src="../../assets/case/Security/图片2.jpg"
          alt="安防"
          class="item"
        />
        <img
          src="../../assets/case/Security/图片3.jpg"
          alt="安防"
          class="item"
        />
        <img
          src="../../assets/case/Security/图片4.jpg"
          alt="安防"
          class="item"
        />
        <img
          src="../../assets/case/Security/图片5.jpg"
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
