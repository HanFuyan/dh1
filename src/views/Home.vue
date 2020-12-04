<template>
  <div class="home">
    <div class="banner v-cloak">
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
        <a href="/" class="item item_4">
          <div class="item-title">智慧园区</div>
        </a>
      </div>
    </div>
    <div class="news">
      <div class="title">新闻中心</div>
      <div class="box">
        <a href="/news/news1" class="item item_1">
          <div class="info">
            <span class="desc">鼎华网络与海康威视签署战略合作协议</span>
            <span class="date">12-03</span>
          </div>
        </a>
        <a href="/news/news1" class="item item_2">
          <div class="info">
            <span class="desc">鼎华网络与海康威视签署战略合作协议</span>
            <span class="date">12-03</span>
          </div>
        </a>
        <a href="/news/news1" class="item item_3">
          <div class="info">
            <span class="desc">鼎华网络落户合肥中安创谷科技园</span>
            <span class="date">12-03</span>
          </div>
        </a>
      </div>
    </div>
    <div class="partner">
      <div class="title">合作伙伴</div>
      <div class="box">
        <div class="item">
          <img src="../assets/partner/hikvision.png" alt="">
        </div>
        <div class="item">
          <img src="../assets/partner/supermap.png" alt="">
        </div>
        <div class="item">
          <img src="../assets/partner/lonbon.png" alt="">
        </div>
        <div class="item">
          <img src="../assets/partner/meiyi.png" alt="">
        </div>
        <div class="item">
          <img src="../assets/partner/ITC.jpg" alt="">
        </div>
      </div>
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
  [v-cloak] {
    display: none;
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
      justify-content: space-between;
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
          box-shadow: 0 2px 12px 0 rgba(0,0,0,.3);
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
        background-image: url(../assets/project/project_1.jpg);
      }
      .item_2{
        background-image: url(../assets/project/project_2.jpg);
      }
      .item_3{
        background-image: url(../assets/project/project_1.jpg);
      }
      .item_4{
        background-image: url(../assets/project/project_2.jpg);
      }
    }
  }
  .news{
    padding: 50px 0;
    text-align: center;
    background-color: #f8f8f8;
    .title{
      font-size: 30px;
      color: #333;
      margin-bottom: 20px;
    }
    .box{
      max-width: 1200px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      .item{
        position: relative;
        width: 32%;
        height: 200px;
        background-color: #fff;
        text-decoration: none;
        margin-bottom: 20px;
        transition: 0.5s;
        background-repeat: no-repeat;
        background-size: 100% 100%;
        background-position: center;
        &:hover{
          background-size: 110% 110%;
          box-shadow: 0 2px 12px 0 rgba(0,0,0,.3);
        }
        .info{
          position: absolute;
          bottom: 0;
          left: 0;
          width: calc(100% - 40px);
          padding: 10px 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          background-color: #fff;
          span{
            font-size: 14px;
            color: #555;
          }
          .desc::before{
            content: ' ';
            display: inline-block;
            width: 4px;
            height: 4px;
            background-color: #9a9a9a;
            margin-right: 6px;
            vertical-align: middle;
          }
          .desc:hover{
            color: #0595c7;
          }
          .date{
            font-size: 13px;
            color: #888;
          }
        }
      }
      .item_1{
        background-image: url(../assets/news/news_1.jpg);
      }
      .item_2{
        background-image: url(../assets/news/news_2.png);
      }
      .item_3{
        background-image: url(../assets/news/news_3.png);
      }
    }
  }
  .partner{
    padding: 50px 0;
    text-align: center;
    .title{
      font-size: 30px;
      color: #333;
      margin-bottom: 20px;
    }
    .box{
      max-width: 1200px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      .item{
        width: 220px;
        height: 120px;
        border: 1px #eaeaea solid;
        display: flex;
        align-items: center;
        justify-content: center;
        &:hover{
          img{
            transform: scale(1.08);
          }
        }
        img{
          max-width: 80%;
          max-height: 80%;
          transition: 0.3s;
        }
      }
    }
  }
}
</style>
