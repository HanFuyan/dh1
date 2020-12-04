<template>
  <div id="app">
    <Nav />
    <div class="body">
      <router-view/>
      <!-- <keep-alive>
        <transition name="fade">
        </transition>
      </keep-alive> -->
    </div>
    <Footer />
  </div>
</template>
<script>
import Nav from './components/nav'
import Footer from './components/footer'
export default {
  name: 'home',
  components: {
    Nav,
    Footer
  },
  mounted () {
    document.addEventListener('contextmenu', e => {
      e.preventDefault()
    })
  }
}
</script>
<style lang="scss">
html,body{
  height: 100%;
  width: 100%;
}
#app{
  height: 100%;
  width: 100%;
  display: flex;
  user-select: none;
  flex-direction: column;
  justify-content: space-between;
  .body{
    flex: 1;
    .fade-enter-active, .fade-leave-active {
      transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to{
      opacity: 0;
    }
  }
}
</style>
