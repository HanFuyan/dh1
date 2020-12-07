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
          “智慧戒毒”是以教育戒治科学化、专业化为中心任务，以统一的戒毒基本模式和戒毒业务技术规范标准体系为支撑基础，综合运用大数据、物联网、人工智能等科学技术手段，优化戒毒资源配置，收集、分析、整合戒毒工作关键信息，总结、把握、归纳戒毒工作规律，建立健全符合戒毒工作实际的科学警务模式和管理制度，科学预知、预判、预警，并做出决策，实现安全、智能、统一、共享、规范的戒毒工作智慧运行工作措施体系。“智慧戒毒所”就是能够有效贯彻落实上述工作措施体系的司法行政戒毒场所。
          “智慧戒毒”的目标是提高司法行政戒毒工作的科学化、规范化、专业化、智能化水平，更好地教育矫治、服务、救治戒毒人员、惠及戒毒人员亲属、惩戒和预防违法行为，从而实现维护人民利益和社会安全稳定。
        </div>
        <a href="/project/Detoxification">
          <span class="button">查看更多</span>
        </a>
        <a href="/project/Detoxification" class="item">
          <img src="../assets/project/智慧戒毒.png" alt="安防" class="item" />
        </a>
      </div>
      <div class="prisonProgram">
        <div class="title1">智慧监管解决方案</div>
        <div class="subtitle1">
          智慧监管建设要以防控监所安全风险、规范执法执勤行为、服务公安中心工作、科学有效业务指导为核心目标，坚持职能引领，紧紧围绕公安监管场所基本职能，优先满足保证安全的首要需求；坚持问题导向，针对公安监管工作中的“常见病”、“多发病”，应用科技信息化手段，务求予以根治；坚持深度融合，将科技信息技术与传统有效方式有机结合，按照执法规范和标准，健全升级人机结合的勤务模式，服务实战需求，持续推进完善；坚持统筹协调，自上而下进行规划，省级和地市级公安监管业务指导部门要在本意见指导下，遵循智慧监管建设技术要求，制定实施方案，明确目标任务和方法路径，有计划、分步骤推进建设应用。
        </div>
        <a href="/project/Supervision">
          <span class="button">查看更多</span>
        </a>
        <a href="/project/Supervision" class="item">
          <img
            src="../assets/project/智慧监狱.jpg"
            alt="安防"
            class="item"
          />
        </a>
      </div>
      <div class="prisonProgram">
        <div class="title1">智慧监狱解决方案</div>
        <div class="subtitle1">
          监狱是关押、管理犯罪人员的场所，在押人员多为刑事犯罪分子，安全和管理成为首要问题。既要保障社会的安全，也要保障狱警的安全，犯罪分子的安全。因此，安全防范是监狱管理的重要组成部分。鼎华结合生物识别技术、物联网技术、视频智能分析等技术手段，着重"管、防"两个方面，充分考虑到在押人员、狱警、监狱场所管理人员的实际管理需求，将监舍、监区、指挥中心各级设备智能联网管理，集成指挥调度、可视对讲。视频联动、视频会议、呼叫报警、公共广播、信感交互巡更，智能点名、设备控制、高精度定位、移动执法等功能，有效的提高工作管理水平及效率，积极推动监狱安防信息化水平，打造新时代背景下“智慧监狱，实现"向科技要警力，向科技要效率，向科技要安全”整体建设目标。
        </div>
        <a href="/project/Smartprison">
          <span class="button">查看更多</span>
        </a>
        <a href="/project/Smartprison" class="item">
          <img
            src="../assets/project/智慧监管.jpg"
            alt="安防"
            class="item"
          />
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
          <img src="../assets/project/智慧园区.jpg" alt="安防" class="item" />
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
      line-height:1.75;
      color: #333;
    }
    .subtitle {
      font-size: 15px;
      line-height:1.75;
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
        line-height:1.75;
        color: #333;
        text-align: left;
      }
      .subtitle1 {
        font-size: 15px;
        margin-top: 20px;
        line-height:1.75;
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
