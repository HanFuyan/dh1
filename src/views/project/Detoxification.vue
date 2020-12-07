<template>
  <div class="Smartprison">
    <div class="banner">
      <img src="../../assets/banner_1.jpg" alt="" />
    </div>
    <div class="Program">
      <div class="title">系统概述</div>
      <div class="subtitle">
        基于GIS一张图，实现跨系统信息数据交互、通信指挥调度、信息发布等，提供多级联动集成化指挥调度，实现事件处置,及时反映事件的状态。强化应急指挥的快速调度、应急处置的快速反应，进一步提高监所应急指挥的规范化和科学化。
        统一集成强制隔离戒毒所视频、门禁、巡更、报警、访客等安防子系统，提供日常巡查、智能轮巡、报警管理等功能，实现戒毒所安防资源的统一监管，有效提升戒毒所安全防范水平。
      </div>
      <div class="title">系统架构</div>
      <div class="subtitle">
        系统纵向贯穿各个业务单位，从基层的业务执行、各个业务科室的业务管理到省级业务处室的业务决策，整个业务执行、管理、决策过程横向涵盖了所政管理、诊断评估等八大核心业务，实现执法干警对戒毒人员全流程管理的架构设计。包含：
        视频监控:实时查看学员动态; 门禁控制:门禁开关控制/门禁实时状态;
        统一身份认证:统一用户权限管理; 巡更:巡更打卡签到;
        报警管理:统一处理报警数据; 安防指标评估:统一评估监所安防等级
        访客统计/人员统计;可视对讲:实时沟通学员状态。
      </div>
      <img src="../../assets/project/Detoxification/结构图.png" alt="结构图" class="item" />
    </div>
    <div class="Program">
      <div class="title">系统特色</div>
      <div class="subtitle">
        戒毒人员信息集成化、资源管理动态化、数据交互实时化、CS/BS架构,灵活部署,快速集成、全系统自动升级维护省时省力、生物智能化,如可疑物品遗留,可疑人员徘徊,异常动作,烟雾报警,长时间如厕,剧烈运动；
        Gis地图可视化,便于方便操作；
        系统本身具备的智能,其特征是系统能够适应各种应用环境,具备一定的故障自愈能力；
        戒毒智能安防管理平台实现从信息采集到信息处理,从警情提示到自动执行,从事后查询到实时预防.
      </div>
      <img src="../../assets/project/Detoxification/图片1.png" alt="图片" class="item" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Detoxification'
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
      text-align: left;
      font-size: 25px;
      font-weight: bold;
      color: rgb(8, 8, 8);
      margin-bottom: 15px;
    }
    .subtitle {
      font-size: 15px;
      margin-top: 20px;
      line-height: 30px;
      color: rgb(8, 8, 8);
      text-indent: 2em;
      text-align: left;
      margin-bottom: 15px;
    }
    .item {
      margin-left: 300px;
      width: 600px;
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
