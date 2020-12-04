<template>
  <div class="project">
    <div class="banner">
      <img src="../assets/banner_1.jpg" alt="" />
    </div>
    <div class="Program">
      <div class="title">解决方案</div>
      <div class="subtitle">
        作为国内知名的基于大数据的“智慧化场景的行业应用”整体解决方案供应商，公司着力于研究特定人群的深度管控。
        提供专业化解决方案, 为行业创造价值，让技术服务市场，打造精品案例。
      </div>
      <div class="prisonProgram">
        <div class="title1">智慧戒毒解决方案</div>
        <div class="subtitle1">
          2019年5月,习近平总书记在全国公安工作会议上强调"坚持政治建警、改革强警、科技兴警、从严治警，履行好党和人民赋予的新时代职责使命”提出要"把‘枫桥经验’
          坚持好、发展好，把党的群众路线坚持好、贯彻好，充分发动群众、组织群众、依靠群众，努力建设更高水平的平安中国”。
          智慧监管产品面向公安机关社区综合治理,基于AI、物联网、云计算和大数据分析等技术提供智慧安防社区服务，重新赋能各类社区警务场景，帮助基层民警建立感知态势、主动防控、精细管控、多元服务的新型警务
          工作模式。有效解决新时期下治安形势复杂和治理不够精细等问题，提升基层派出所的综合治理能力。
        </div>
        <a href="/project/Detoxification">
          <span class="button">查看更多</span>
        </a>
        <a href="/project/Detoxification" class="item">
          <img src="../assets/project/应急指挥.png" alt="安防" class="item" />
        </a>
      </div>
      <div class="prisonProgram">
        <div class="title1">智慧监管解决方案</div>
        <div class="subtitle1">
          依据公安部智慧监所建设指导方案及监管实际业务需求，以监管信息业务平台为基础，整合大数据分析、生物识别、物联网、AI等先进技术，打造现代化智慧监所整体解决方案。
        </div>
        <a href="/project/Supervision">
          <span class="button">查看更多</span>
        </a>
        <a href="/project/Supervision" class="item">
          <img src="../assets/project/物联感知平台.jpg" alt="安防" class="item" />
        </a>
      </div>
      <div class="prisonProgram">
        <div class="title1">智慧监狱解决方案</div>
        <div class="subtitle1">
          通过广泛地运用信息智能化技术，提高监狱物防、技防能力，
          建立监管安全防范的长效管理机制，树立先进的管理意识，掌握先进的管理方法和管理手段，提升安全防范和应急处置指挥能力。
        </div>
        <a href="/project/Smartprison">
          <span class="button">查看更多</span>
        </a>
        <a href="/project/Smartprison" class="item">
          <img src="../assets/project/物联感知平台.jpg" alt="安防" class="item" />
        </a>
      </div>
      <div class="prisonProgram">
        <div class="title1">智慧社区解决方案</div>
        <div class="subtitle1">
          通过利用现代化信息技术建立住宅小区综合物业管理中心与安防系统、信息服务系统、物业管理系统以及家居智能化组成的"三位一体"住宅小区服务和管理集成系统，以达到安全、舒适、温馨和便利的生活环境。
        </div>
        <a href="/project/Park">
          <span class="button">查看更多</span>
        </a>
        <a href="/project/Park" class="item">
          <img src="../assets/project/安防.png" alt="安防" class="item" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Project'
}
</script>
<style lang="scss" scoped>
.project {
  .banner {
    img {
      width: 100%;
    }
  }
  .Program {
    padding: 50px 0;
    text-align: center;
    .title {
      font-size: 30px;
      color: #333;
    }
    .subtitle {
      font-size: 15px;
      color: #888;
      margin: 20px auto 40px auto;
      width: 900px;
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
      .item {
        position: relative;
        width: 720px;
        height: auto;
        margin: 0 auto;
        transition: 0.5s;
        &:hover {
          transform: scale(1.02);
          box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.3);
        }
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
