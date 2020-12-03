<template>
  <div :class="'nav' + [bgc ? ' bgc': '']">
    <div class="wrapper">
      <div class="logo">
        <a href="/">
          <img src="../assets/logo_white.png" alt="logo">
          <span>安徽鼎华网络科技有限公司</span>
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
        <span>0551-68502009</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Nav',
  data () {
    return {
      bgc: false
    }
  },
  mounted () {
    window.addEventListener('scroll', () => {
      const top = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      if (top >= 72) {
        this.bgc = true
      } else {
        this.bgc = false
      }
    })
  }
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
  transition: 0.3s;
  &.bgc{
    background-color: #090b1add;
  }
  .wrapper{
    max-width: 1200px;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    .logo{
      height: 100%;
      display: flex;
      align-items: center;
      a{
        display: flex;
        align-items: center;
        text-decoration: none;
      }
      img{
        height: 60px;
        width: auto;
      }
      span{
        margin-left: 10px;
        color: #ddd;
        font-size: 30px;
      }
    }
    .menu{
      flex: 1;
      height: 100%;
      display: flex;
      justify-content: flex-end;
      span{
        height: 100%;
        display: inline-block;
        transition: 0.3s;
        a{
          padding: 0 20px;
          display: flex;
          height: 100%;
          color: #ddd;
          font-size: 16px;
          align-items: center;
          text-decoration: none;
        }
        &.active{
          background-color: #12152c;
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
