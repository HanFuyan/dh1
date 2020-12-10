<template>
  <div class="news">
    <div class="banner v-cloak">
      <img src="../assets/banner_news.jpg" alt="">
    </div>
    <div class="list">
      <div class="title">新闻中心</div>
      <div class="item">
        <div class="img img_1"></div>
        <div class="info">
          <div class="tt"><a href="/news/news1">公司正式搬迁至合肥中安创谷科技园</a></div>
          <div class="date">2020-5-23</div>
          <div class="desc">公司于2020年5月21日起正式搬迁至广东省合肥市蜀山区望江西路和方兴大道交叉口西北角中安创谷科技园A4栋633室...</div>
        </div>
      </div>
      <div class="item">
        <div class="img img_2"></div>
        <div class="info">
          <div class="tt"><a href="/news/news2">根植公安监管行业的“智慧点”</a></div>
          <div class="date">2020-7-8</div>
        </div>
      </div>
      <div class="item">
        <div class="img img_3"></div>
        <div class="info">
          <div class="tt"><a href="/news/news3">智慧监狱建设现状及发展前景介绍”</a></div>
          <div class="date">2020-11-8</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'News'
}
</script>
<style lang="scss" scoped>
.news{
  .banner{
    img{
      width: 100%;
    }
  }
  [v-cloak] {
    display: none;
  }
  .list{
    max-width: 1200px;
    margin: 0 auto;
    text-align: center;
    padding: 50px 0;
    .title{
      font-size: 30px;
      color: #333;
      margin-bottom: 16px;
    }
    .item{
      text-align: left;
      border: 1px #eaeaea solid;
      margin: 0 0 20px 0;
      display: flex;
      justify-content: flex-start;
      padding: 20px;
      .img{
        width: 220px;
        min-width: 220px;
        height: 150px;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
      }
      .img_1{
        background-image: url(../assets/news/news_1.jpg);
      }
      .img_2{
        background-image: url(../assets/news/news_2.png);
      }
      .img_3{
        background-image: url(../assets/news/图片4.png);
      }
      .info{
        margin-left: 10px;
        .tt a{
          text-decoration: none;
          color: #222;
          font-size: 18px;
          &:hover{
            color: #0595c7;
          }
        }
        .date{
          font-size: 12px;
          color: #999;
          margin: 15px 0;
        }
        .desc{
          font-size: 12px;
          color: #888;
          line-height: 22px;
        }
      }
    }
  }
}
</style>
