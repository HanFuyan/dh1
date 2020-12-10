<template>
  <div class="Smartprison">
    <div class="banner">
      <img src="../../assets/banner_1.jpg" alt="" />
    </div>
    <div class="Program">
      <div class="title">解决方案</div>
      <div class="subtitle">
        全面贯彻落实《国家信息化发展战略纲要》和《全国监狱信息化建设规划》，深入解读全国司法信息化推进会精神，结合江西省监狱局现状推动信息化落地，以“科学化、专业化、规范化、信息化”的建设思路为指导，按照“顶层设计、统一规划”总体布局和“双轮驱动、四位一体”战略布局的要求，牢固树立创新、协调、开放、共享的发展理念，着力补齐核心技术短板，建立信息基础设施和数据资源体系，全面增强信息化发展能力；
        着力发挥信息化对监狱整体发展的驱动引领作用，以信息化推进监狱管理体系和管理能力现代化，全面提升信息化应用水平；着力深化改革，激发创新活力，主动防范和化解风险，全面优化信息化发展环境，为确保全面建成文明监狱、智慧监狱提供强大动力。
      </div>
      <img
        src="../../assets/project/Smartprison/图片.png"
        alt="安防"
        class="item"
      />
    </div>
    <div class="Program">
      <div class="title">系统组成</div>
      <div class="subtitle">
        融合监狱常用安防子系统，包括视频监控、综合报警、门禁管理、周界电网、电子巡更、在押人员报告等系统，实现各子系统间资源共享和信息交互，达到一点报警多点联动效果，为应急事件处理提供联动机制策略。
        实现对安防设备和网路设备一键运维，达到无人值守、规范管理、量化考核的目标，减少设备运维人力成本，保障系统安全可靠运行。
        以视频巡查为技术手段，利用电子化业务流程落实各项规章制度，加强干警日常工作管理和执法过程监督、量化考核干警工作；实现责任明确化、业务流程化、统计精细化，努力打造正规化干警队伍。
        通过平台系统级联，实现“监狱管理局"—”监狱指挥中心“—监狱分控中心”三级联网，实现上下级资源共享，加强监狱管理局对监狱监管力度，满足监狱“日常管理”和“应急处置”两大业务需求，体现“平战结合”管理理念。
        综合利用HDCVI多模摄像机、云存储、4K超高清、H.265高效编码、物联网RFID，生物识别（指纹、人脸识别、虹膜）等先进技术；“全时段、全天候、全场景”保障监狱安全。
        利用视频智能分析技术实现离岗检测、打架斗殴、攀高检测、起身检测等分析应用；逐步实现监狱安防事故的处理由“事后侦查”向“事先防范”的根本转变，把事故消灭在萌芽状态“防患于未然“，改变传统安防系统事后取证尴尬境地。
        依托云计算超大数据碰撞能力，对监所设备健康度、报警处置率、基层执勤质量、警务督察情况、在押人员行为分析、日常表现、家庭背景等数据安全风险评估。提高干警情报分析和预警研判能力，同时给监狱领导制定工作策略提供基础依据。
      </div>
      <img
        src="../../assets/project/Smartprison/结构图.png"
        alt="安防"
        class="item"
      />
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
      margin-left: 200px;
      width: 800px;
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
