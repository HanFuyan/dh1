<template>
  <div class="Smartprison">
    <div class="banner">
      <img src="../../assets/banner_1.jpg" alt="" />
    </div>
    <div class="Program">
      <div class="title">背景与挑战</div>
      <div class="subtitle">
        智慧监管理论在监管主体、监管理念、监管工具和监管效果等方面，既是对传统监管理念的继承，更是对传统监管理念的创新。
        在监管主体方面，计划经济时期或封闭性威权政体下的市场监管强调政府的唯一主体性，市场主体或社会主体没有机会参与监管过程。
        然而，智慧监管客观上不仅依赖政府主体，而且高度依赖掌握信息技术和产生各类数据的市场和社会主体，被监管对象可能同时也是监管数据的提供者。
        这与合作治理理论呼吁政府监管应走向合作治理的主张高度契合，在监管理念方面，传统监管强调政府对市场行为主体的命令与控制，认为消极的处罚与惩戒是消除失范行为的途径。
        智慧监管认为监管并不局限于政府对企业的强制，如回应性监管理论主张政府与其他界别主体形成合力，对失范行为施加干预。
        后设监管理论主张通过各种方式强化被监管者的自我监管，从而减少监管者与被监管者之间的矛盾。
        在监管工具方面，传统市场监管主要依靠行政许可现场检查、专项检查、投诉举报查实、日常监督检查和监督抽检等方式，其中行政许可现场检查和专项检查耗费一半以上的监管资源和精力，但却只能发现很少比例的问题，而且主要是索证索票和标签标识等表面问题。
        智慧监管强调通过监管信息的统筹、关联与共享，运用大数据分析和智能化应用装备监管机构，同时将提醒、指导、纠正与处罚等引入监管全过程。在监管效果方面， 智慧监管能够通过智能化手段实现远程监管、精准监管和预防性监管，更有利于提升服务与监管的相容性。
      </div>
      <div class="title">解决方案</div>
      <div class="subtitle">
        智慧监管实战平台是面向公安监管、司法监狱综合性系统集成平台。以业务实战出发，运用大数据、人工智能、物联网等前沿技术，聚合社会面、公安、司法类数据资源，集成前端技防感知系统界面、功能、数据、信令，并加以充分运用。在统一平台实现数据资源服务一体化，全局统筹可视化，风险管控立体化，指挥督导实战化，在押管理精细化，队伍管理规范化，日常警务高效化，对外服务亲民化。
      </div>
      <img src="../../assets/project/Supervision/结构图.png" alt="安防" class="item1" />
    </div>
    <div class="Program">
      <div class="title">系统特点</div>
      <div class="subtitle">
        第一，智慧监管是大数据的监管。通过海量数据的充分汇集，多重叠加、相互激发、同频共振，释放出强大的监管力量，让监管的形势认得准、措施落得实、效果可评估。第二，智慧监管是精细化的监管。用问题导向、服务导向的思维，依托信息技术进行业务重构，巧妙解决传统监管中遇到的难题。事实上，智慧监管的成功案例，都是从碎片化、精细化的业务模式创新开启的。第三，智慧监管是动态实时的监管。信息的快速传递，将改变层级化的传统工作模式，公安监管部门在第一时间发现问题、启动响应、妥善处置，即便是处理一个点上的问题，也会有全警共振的效果，形成强大监管威慑，这是监管安全的重要保障。第四，智慧监管是共治共享的监管。
      </div>
      <img src="../../assets/project/Supervision/图片.png" alt="安防" class="item" />
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
      text-align: center;
      width: 1200px;
      height: auto;
    }
    .item1 {
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
