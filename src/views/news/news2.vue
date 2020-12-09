<template>
  <div class="news1">
    <div class="nav"></div>
    <div class="content">
      <div class="title">根植公安监管行业的“智慧点”</div>
      <div class="date">2020-05-23</div>
      <div class="desc">
        <img class="img" src="../../assets/news/news2.jpg" alt="" />
        <p>
          大数据时代给公安监管信息工作的发展提供了重大机遇，2018年公安部提出要在公安监管部门推进智慧建设，让监管工作更智能、人员管理更精细。<br />
          当前，各级公安监管部门“精细管理、智能防控、高效服务、协同任务”离不开各类监管数据的支持，而提高监管工作快速反应能力、民警岗位联动效率和监管场所整体监管水平的一个非常重要的条件就是必须拥有准确、及时的数据支持。<br />
        </p>
        <p>
          今天，智慧城市建设蓬勃发展，监管信息系统已经可以联动城市大脑，将监管各类信息加工成综合性的信息，从而用以提高监管部门快速反应、整体防控和动态管理的能力，以支持监管场所实战和监所领导决策的需要，更好地为公安监管事务服务，是监管部门日常工作对信息化发展的必然要求。
        </p>
        <p>
          电子地图<br />
          当监管场所发生状况后，即在电子地图上进行预警显示，包括事件发生地点定位显示、警报声音提示、警告窗口弹出、电子地图及相关信息自动发送短信等多种方式，从而达到监所内的多岗联动，迅速应对警情。<br />
        </p>
        <p>
          智能分析<br />
          通过视频监控，利用设定好的行为分析模型，对于被监管人员的行为进行实时监测预警，一旦被监管人员在场景中出现了违反预定义分析规则的行为，即触发预先设置好的联动规则，即时报警。<br />
          现今，公安监管体系中各种信息资源量日益增加，基础数据日趋增长，建设以大数据汇聚分析为基底的实战平台、以人工智能技术为辅助的各类监管信息化系统，可以为各级公安监管领导提供决策辅助，为此后防范杜绝、干预疏导等提供综合分析的支撑。
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
