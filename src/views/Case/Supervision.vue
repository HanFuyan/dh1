<template>
  <div class="Smartprison">
    <div class="banner">
      <img src="../../assets/banner_1.jpg" alt="" />
    </div>
    <div class="Program">
      <div class="title">智慧监所实战指挥平台</div>
      <div style="width:1200px; text-align: center">
        <img src="../../assets/case/Supervision/图片1.jpg" alt="监所实战" class="item1" />
      </div>
      <div class="subtitle">
        智慧监所实战指挥平台是用于看守所安防管理和警务实战应用及大数据分析的综合性管理软件平台，以安防实战业务应用为导向，以视频巡查应用为手段，以智能人员定位系统为依托，以被监管人员为管控对象，集电子地图、视频巡查、被监管人员定位管控、设备运维、数据统计等多业务的全方位综合性应用管理平台。
      </div>
      <div class="title1">产品概述</div>
      <div class="subtitle1">
        一、整合监所技防系统<br />
        接入监控视频、被监管人员呼叫对讲、门禁考勤、民警巡视、报警接入及预案处置、智能行为分析、人脸及位置轨迹等信息。建立智能运维系统，对监所各技防系统运行状态进行实施监控。
        <br />
        二、动态信息主导勤务<br />
        监所预警后，视频、门禁、报警自动关联，信息主动推送，监所指挥中心和有关岗位民警处理，实现“一人触网、全所联动”，形成预警、迅速部署、实时转递、快速处置、反馈情况闭环管理、警力随警情，做到快处既然。
        <br />
        三、风险精准评估有效管控<br />
        通过规范采录、搭建模型、自动分析、综合评估被监管人员行为表现、身体状况、心理反应等信息，建立被监管人员风险模型和监所风险模型，对被监管人员、监室安全风险作出定性定量分析和分级分色预警，直观展现每个被监管人员风险评估结果，据此实施分级管理。通过监管动态数据分析，实现监情动态全面展现、安全风险精准预测、决策指挥科学高效。
        <br />
        四、执法监督<br />
        加强民警绩效管理，量化岗位工作，自动抽取管理台账，民警工作轨迹自动登记、发布。
      </div>
      <div class="title1">平台展示</div>
      <div class="box">
        <img src="../../assets/case/Supervision/图片3.jpg" alt="安防" class="item" />
        <img src="../../assets/case/Supervision/图片4.jpg" alt="安防" class="item" />
        <img src="../../assets/case/Supervision/图片5.jpg" alt="安防" class="item" />
        <img src="../../assets/case/Supervision/图片6.jpg" alt="安防" class="item" />
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
      font-size: 15px;
      margin-top: 20px;
      line-height: 30px;
      color: rgb(8, 8, 8);
      text-indent: 2em;
      text-align: left;
      margin-bottom: 15px;
    }
    .subtitle1 {
      font-size: 15px;
      margin-top: 20px;
      line-height: 30px;
      color: rgb(8, 8, 8);
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
