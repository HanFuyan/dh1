<template>
  <div class="nav">
    <div class="wrapper">
      <div class="logo">
        <a href="/">
          <img src="../assets/logo_white.png" alt="logo">
        </a>
      </div>
      <div class="menu">
        <span><a href="/">首页</a></span>
        <span><a href="/about">关于我们</a></span>
        <span><a href="/project">项目案列</a></span>
        <span><a href="/news">新闻中心</a></span>
      </div>
      <div class="contact">
        <img src="../assets/contact.png" alt="">
        0551-68502009
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Nav'
}
</script>
<style lang="scss" scoped>
.nav{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
  height: 72px;
  color: #555;
  background-color: #090b1a;
  .wrapper{
    width: 1200px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    .logo{
      height: 100%;
      display: flex;
      align-items: center;
      img{
        height: 60px;
        width: auto;
      }
    }
    .menu{
      flex: 1;
      height: 100%;
      display: flex;
      justify-content: flex-end;
      span{
        height: 100%;
        padding: 0 20px;
        display: inline-block;
        a{
          display: flex;
          height: 100%;
          color: #ddd;
          font-size: 16px;
          align-items: center;
          text-decoration: none;
        }
        &:hover{
          background-color: #12152c;
        }
      }
    }
    .contact{
      margin-left: 60px;
      height: 100%;
      color: #ddd;
      display: flex;
      font-size: 18px;
      align-items: center;
      img{
        height: 22px;
        margin-right: 6px;
      }
    }
  }
}
</style>
