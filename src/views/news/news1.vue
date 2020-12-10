<template>
  <div class="news1">
    <div class="nav"></div>
    <div class="content">
      <div class="title">安徽鼎华网络科技有限公司正式搬迁至合肥中安创谷科技园</div>
      <div class="date">2020-05-23</div>
      <div class="desc">
        <img class="img" src="../../assets/news/news_1.jpg" alt="" />
        <p>
          公司于2020年5月21日起正式搬迁至广东省合肥市蜀山区望江西路和方兴大道交叉口西北角中安创谷科技园A4栋633室
        </p>
        <p>
          安徽中安创谷科技园有限公司成立于2015年7月，注册资本8.7亿元，由安徽省投资集团控股有限公司和合肥高新区管委会合资组建。公司是响应“大众创业、万众创新”时代号召的成果，也是贯彻省委省政府战略意图的重要举措。
          公司按照“基金+基地+双创服务”的业务模式，以“让创业变得更简单”为核心理念，以“中安创谷科技园”项目为平台，建设国际水准、国内一流的，涵盖众创空间、孵化器、加速器、产业基地和基金集群为一体的高端综合创新创业服务社区，致力发展成为“双创社区领跑者”。
        </p>
        <p>
          项目规划建设用地约527亩，建筑面积约99万平方米，项目总投资近53亿元。
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'news1'
}
</script>
<style lang="scss" scoped>
.news1 {
  background-color: #f5f5f5;
  height: 100%;
  .nav {
    height: 72px;
    background-color: #090b1add;
  }
  .content {
    height: 100%;
    max-width: 1200px;
    margin: 20px auto;
    background-color: #fff;
    padding: 20px;
    .title {
      color: #555;
      font-size: 24px;
    }
    .date {
      color: #888;
      font-size: 12px;
      padding: 15px 0;
      margin-bottom: 15px;
      border-bottom: 1px solid #eee;
    }
    .desc {
      text-align: center;
      .img {
        width: 1200px;
      }
      p {
        text-align: left;
        text-indent: 32px;
        font-size: 15px;
        color: #555;
        line-height: 26px;
      }
    }
  }
}
</style>
