<template>
  <div class="about">
    <div class="banner">
      <img src="../assets/banner_2.jpg" alt="">
    </div>
    <div class="introduction">
      <div class="title">公司简介</div>
      <div class="desc">
        <p>安徽鼎华网络科技有限公司成立于2019年12月9号, 总部位于安徽合肥高新区.通过自身创新技术优势，应用人工智能、物联网、大数据等技术，面向智慧监管、智慧监狱、智慧戒毒、智慧园区等提供行业综合服务解决方案。 </p>
        <p>公司核心团队来自电子科技大学、中国科学技术大学、中国科学院合肥物质科学研究院，历经多年匠心耕耘，依托持续的研发创新能力、强大的市场开拓能力、快速响应客户需求服务体系。始终坚持从行业整体解决方案入手，全自主研发智能软硬件产品，深入钻研核心技术，不断投入创新研究。已经成为公安、司法信息化领域国内知名企业。</p>
      </div>
    </div>
    <div class="certificate">
      <div class="title">软件著作</div>
      <div class="box">
          <img src="../assets/about/人员定位管控系统V1.0.jpg" alt="">
          <img src="../assets/about/康复训练系统V1.0.jpg" alt="">
          <img src="../assets/about/所证管理系统V1.0.jpg" alt="">
          <img src="../assets/about/物品信息采集系统V1.0.jpg" alt="">
          <img src="../assets/about/物联综合管控平台V1.0.jpg" alt="">
          <img src="../assets/about/设备状态传感采集系统V1.0.jpg" alt="">
      </div>
    </div>
    <div class="position">
      <div class="title">公司地址</div>
      <div class="box">
        <!-- <div class="map" id="map"></div> -->
        <baidu-map class="map" ak="GjNUMlIgmgjqqg7Q59DRvN2Q3vWvXwgg" :center="center" :zoom="16">
          <bm-info-window :position="center" :show="true" title="鼎华网络">
            <p>安徽省合肥市中安创谷科技园A4栋633室</p>
          </bm-info-window>
        </baidu-map>
      </div>
    </div>
  </div>
</template>
<script>
import BaiduMap from 'vue-baidu-map/components/map/Map.vue'
import BmInfoWindow from 'vue-baidu-map/components/overlays/InfoWindow'
export default {
  name: 'About',
  components: {
    BaiduMap,
    BmInfoWindow
  },
  data () {
    return {
      center: { lng: 117.10781, lat: 31.840925 }
    }
  }
}
</script>
<style lang="scss" scoped>
.about{
  .banner{
    img{
      width: 100%;
    }
  }
  .introduction{
    padding: 50px 0;
    text-align: center;
    .title{
      font-size: 30px;
      color: #333;
    }
    .desc{
      max-width: 1200px;
      margin: 0 auto;
      text-align: left;
      p{
        text-indent: 32px;
        color: #555;
      }
    }
  }
  .certificate{
    padding: 50px 0;
    text-align: center;
    .title{
      font-size: 30px;
      color: #333;
      margin-bottom: 16px;
    }
    .box{
      max-width: 1200px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      img{
        width: 190px;
        height: 255px;
        text-indent: 32px;
        color: #555;
        transition: 0.3s;
        &:hover{
          box-shadow: 0 2px 12px 0 rgba(0,0,0,.3);
        }
      }
    }
  }
  .position{
    padding: 50px 0;
    text-align: center;
    .title{
      font-size: 30px;
      color: #333;
      margin-bottom: 16px;
    }
    .box{
      max-width: 1200px;
      margin: 0 auto;
      .map{
        max-width: 1200px;
        height: 400px;
      }
    }
  }
}
</style>
