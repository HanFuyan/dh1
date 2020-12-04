<template>
  <div class="footer">
    <div class="top">
      <div class="project">
        <div class="title">项目案例</div>
        <div class="item"><a href="">智慧监管</a></div>
        <div class="item"><a href="">智慧监狱</a></div>
        <div class="item"><a href="">智慧戒毒</a></div>
        <div class="item"><a href="">智慧园区</a></div>
      </div>
      <div class="link">
        <div class="title">友情链接</div>
        <div class="item"><a href="http://www.chinagci.com/html/index.html" target="_blank">杰赛科技</a></div>
      </div>
      <div class="job">
        <div class="title">人才招聘</div>
        <div class="item"><a href="https://jobs.51job.com/all/co6169924.html" target="_blank">前程无忧</a></div>
        <div class="item"><a href="https://jobs.51job.com/all/co6169924.html" target="_blank">BOSS直聘</a></div>
      </div>
      <div class="contact">
        <div class="title">联系我们</div>
        <div class="item">电话: 0551-68502009</div>
        <div class="item">邮箱: wangyongping@dinghua.com</div>
        <div class="item">地址: 安徽省合肥市中安创谷科技园A4栋633室</div>
      </div>
    </div>
    <div class="bottom">Copyright © 鼎华网络科技有限公司 版权所有</div>
  </div>
</template>
<script>
export default {
  name: 'Footer'
}
</script>
<style lang="scss" scoped>
.footer{
  height: 220px;
  min-height: 220px;
  width: 100%;
  color: #787d80;
  background-color: #090b1a;
  display: flex;
  flex-direction: column;
  .top{
    max-width: 1200px;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    padding: 30px 12px 0;
    .title{
      color: #eee;
      font-size: 16px;
      font-weight: 400;
      margin-bottom: 10px;
    }
    .item, .item a{
      text-decoration: none;
      color: #787d80;
      font-size: 13px;
      line-height: 26px;
    }
    .project, .link, .contack, .job{
      width: 25%;
    }
  }
  .bottom{
    height: 50px;
    font-size: 13px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 1px solid #333;
  }
}
</style>
