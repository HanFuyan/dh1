<template>
  <div class="home">
    <div class="banner">
      <img src="../assets/banner_1.jpg" alt="">
    </div>
    <div class="project">
      <div class="title">解决方案</div>
      <div class="subtitle">提供专业化解决方案, 为行业创造价值，让技术服务市场，打造精品案例。</div>
      <div class="box">
        <a href="/" class="item item_1">
          <div class="item-title">智慧监管</div>
        </a>
        <a href="/" class="item item_2">
          <div class="item-title">智慧监狱</div>
        </a>
        <a href="/" class="item item_3">
          <div class="item-title">智慧戒毒</div>
        </a>
        <a href="/" class="item item_4">
          <div class="item-title">智慧园区</div>
        </a>
      </div>
    </div>
    <div class="news">
      <div class="title">新闻中心</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>
<style lang="scss" scoped>
.home{
  .banner{
    img{
      width: 100%;
    }
  }
  .project{
    padding: 50px 0;
    text-align: center;
    .title{
      font-size: 30px;
      color: #333;
    }
    .subtitle{
      font-size: 15px;
      color: #888;
      margin-top: 20px;
      margin-bottom: 40px;
    }
    .box{
      max-width: 1200px;
      margin: 0 auto;
      display: flex;
      flex-wrap: wrap;
      .item{
        position: relative;
        width: 290px;
        height: 200px;
        margin: 5px;
        background-repeat: no-repeat;
        background-size: 100% 100%;
        background-position: center;
        transition: 0.5s;
        &:hover{
          background-size: 110% 110%;
        }
        .item-title{
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 30px;
          background-color: rgba(7, 17, 27, 0.7);
          color: #fff;
          line-height: 30px;
          font-size: 14px;
        }
      }
      .item_1{
        background-image: url(../assets/project_1.jpg);
      }
      .item_2{
        background-image: url(../assets/project_2.jpg);
      }
      .item_3{
        background-image: url(../assets/project_1.jpg);
      }
      .item_4{
        background-image: url(../assets/project_2.jpg);
      }
      .item_5{
        background-image: url(../assets/project_1.jpg);
      }
    }
  }
  .news{
    padding: 50px 0;
    text-align: center;
    .title{
      font-size: 30px;
      color: #333;
    }
  }
}
</style>
