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
          <div class="tt"><a href="/news/news1">鼎华网络与海康威视签署战略合作协议</a></div>
          <div class="date">2020-12-03</div>
          <div class="desc">日前安徽鼎华网络科技有限公司与杭州海康威视集团签署战略合作协议, 就视频监控方面合作进行深入探讨日前安徽鼎华网络科技有限公司与杭州海康威视集团签署战略合作协议, 就视频监控方面合作进行深入探讨日前安徽鼎华网络科技有限公司与杭州海康威视集团签署战略合作协议, 就视频监控方面合作进行深入探讨...</div>
        </div>
      </div>
      <div class="item">
        <div class="img img_2"></div>
        <div class="info">
          <div class="tt"><a href="/news/news1">鼎华网络与海康威视签署战略合作协议</a></div>
          <div class="date">2020-12-03</div>
          <div class="desc">日前安徽鼎华网络科技有限公司与杭州海康威视集团签署战略合作协议, 就视频监控方面合作进行深入探讨日前安徽鼎华网络科技有限公司与杭州海康威视集团签署战略合作协议, 就视频监控方面合作进行深入探讨日前安徽鼎华网络科技有限公司与杭州海康威视集团签署战略合作协议, 就视频监控方面合作进行深入探讨...</div>
        </div>
      </div>
      <div class="item">
        <div class="img img_3"></div>
        <div class="info">
          <div class="tt"><a href="/news/news1">鼎华网络与海康威视签署战略合作协议</a></div>
          <div class="date">2020-12-03</div>
          <div class="desc">日前安徽鼎华网络科技有限公司与杭州海康威视集团签署战略合作协议, 就视频监控方面合作进行深入探讨日前安徽鼎华网络科技有限公司与杭州海康威视集团签署战略合作协议, 就视频监控方面合作进行深入探讨日前安徽鼎华网络科技有限公司与杭州海康威视集团签署战略合作协议, 就视频监控方面合作进行深入探讨...</div>
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
        background-image: url(../assets/news/news_3.png);
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
