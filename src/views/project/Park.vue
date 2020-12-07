<template>
  <div class="Smartprison">
    <div class="banner">
      <img src="../../assets/banner_1.jpg" alt="" />
    </div>
    <div class="Program">
      <div class="title">解决方案</div>
      <div class="subtitle">
        智慧园区解决方案以云计算、物联网、移动互联网、大数据等技术为手段，供全方位全流程的综合解决方案。
      </div>
      <div class="subtitle">
        一、通过构建新一代信息基础设施，为园区内的组织和个人提供安全、高速、便捷的网络环境，实现园区内的部件、人员随时随地接入网络，奠定泛在感知的网络基础。通过基础设施和感知网络的全面建设，实现对园区感知网络的全面覆盖，使得园区各元素的各类信息均可接入到传输网络层。
      </div>
      <div class="subtitle">
        二、建设集约共享的信息资源利用体系，实现智慧园区运营的高效协信息资源建设体系应在园区已有的信息化基础上，遵循国家有关标准要求，在智慧园区建设的统筹规划下，依照“一体化”集约共享的建设思路，以服务为宗旨，以应用为关键，以信息资源开发利用为主线，通过安全、通畅的信息资源交换，实现各系统间资源共享，达到业务协同。
      </div>
      <div class="subtitle">
        三、建设智慧园区应用体系，直接提升园区管理服务能力智慧应用体系是智慧园区建设重要的部分，也是可以直接提升园区管理服务能力、生产、生活环境的重要构成，智慧应用体系分析、整合园区运行核心系统的各项关键信息，从而对于包括园区服务、管理以及安全防范在内的各种需求做出智能响应，使园区运行更加智慧顺畅。
      </div>
      <img src="../../assets/project/Park/组织图.jpg" alt="安防" class="item" />
    </div>
    <div class="Program">
      <div class="title">系统特点</div>
      <div class="subtitle">
        智慧园区是园区信息化基础上的2.0，是智慧城市的重要表现形态，其体系结构与发展模式是智慧城市在一个小区域范围内的缩影，既反应了智慧城市的主要体系模式与发展特征，又具备了一定不同于智慧城市的发展模式的独特性。
      </div>
      <img src="../../assets/project/Park/图片.png" alt="安防" class="item" />
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
      margin-top: 7.5px;
      line-height: 30px;
      color: rgb(8, 8, 8);
      text-indent: 2em;
      text-align: left;
      margin-bottom: 7.5px;
    }
    .item {
      margin-left:100px;
      width: 1000px;
      height: auto;
    }
    .prisonProgram {
      position: relative;
      max-width: 1140px;
      margin: 20px auto;
      padding: 20px 30px;
      text-align: center;
      background-color: rgba(222, 230, 238, 0.7);
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
