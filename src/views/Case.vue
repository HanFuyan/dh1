<template>
  <div class="project">
    <div class="banner">
      <img src="../assets/banner_4.jpg" alt="" />
    </div>
    <div class="Program">
      <div class="title">智慧戒毒</div>
      <div class="subtitle">
        作为国内知名的基于大数据的“智慧化场景的行业应用”整体解决方案供应商，公司着力于研究特定人群的深度管控。
        提供专业化解决方案, 为行业创造价值，让技术服务市场，打造精品案例。
      </div>
      <div class="prisonProgram">
        <a href="/case/Security" class="item">
          <img src="../assets/project/安防.png" alt="安防" class="item" />
        </a>
        <a href="/case/Emergency" class="item">
          <img src="../assets/project/应急指挥.png" alt="应急" class="item" />
        </a>
        <a href="/case/Perceive" class="item">
          <img src="../assets/project/物联感知平台.jpg" alt="物联" class="item" />
        </a>
        <div>
          <a href="/case/Security">
            <span class="button">安防综合管理平台</span>
          </a>
          <a href="/case/Emergency">
            <span class="button">应急指挥平台</span>
          </a>
          <a href="/case/Perceive">
            <span class="button">智慧物联感知平台</span>
          </a>
        </div>
      </div>
    </div>
    <div class="Program">
      <div class="title">智慧防控</div>
      <div class="prisonProgram1">
        <a href="/case/Supervision" class="item">
          <img src="../assets/case/Supervision/图2.jpg" alt="安防" class="item" />
        </a>
        <div>
          <a href="/case/Supervision">
            <span class="button">智慧监所实战平台</span>
          </a>
        </div>
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
    padding: 10px 0;
    margin: 0 auto;
    max-width: 1200px;
    .title {
      font-size: 30px;
      color: #333;
      text-align: left;
    }
    .subtitle {
      font-size: 15px;
        margin-top: 20px;
        color: #333;
        text-indent: 2em;
        text-align: left;
        margin-bottom: 15px;
    }
    .prisonProgram {
      position: relative;
      max-width: 1200px;
      margin: 20px auto;
      padding: 20px 30px;
      text-align: center;
      background-color: rgba(97, 175, 253, 0.7);
      .item {
        position: relative;
        height: 175px;
        padding: 5px;
        margin: 0 auto;
        transition: 0.5s;
        &:hover {
          transform: scale(1.02);
        }
      }
      .button {
        margin: 10px 122px;
        width: 133px;
        height: 36px;
        line-height: 36px;
        color: rgb(0, 0, 0);
        font-size: 14px;
        display: inline-block;
        font-family: "Microsoft YaHei";
        border: 1px solid #666666;
        text-align: center;
        border-radius: 20px;
        &:hover {
          border-top-color: #3099dd;
          border-right-color: #3099dd;
          border-bottom-color: #3099dd;
          border-left-color: #3099dd;
          background: #3099dd;
        }
      }
    }
    .prisonProgram1 {
      position: relative;
      max-width: 1200px;
      margin: 20px auto;
      padding: 20px 30px;
      text-align: left;
      background-color: rgba(97, 175, 253, 0.7);
      .item {
        position: relative;
        height: 175px;
        padding-left: 18px;
        margin: 0 auto;
        transition: 0.5s;
        &:hover {
          transform: scale(1.02);
        }
      }
      .button {
        margin: 10px 122px;
        width: 133px;
        height: 36px;
        line-height: 36px;
        color: rgb(0, 0, 0);
        font-size: 14px;
        display: inline-block;
        font-family: "Microsoft YaHei";
        border: 1px solid #666666;
        text-align: center;
        border-radius: 20px;
        &:hover {
          border-top-color: #3099dd;
          border-right-color: #3099dd;
          border-bottom-color: #3099dd;
          border-left-color: #3099dd;
          background: #3099dd;
        }
      }
    }
  }
}
</style>
