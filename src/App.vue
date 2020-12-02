<template>
  <div id="app">
    <Nav />
    <div class="body">
      <router-view/>
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
  }
}
</script>
<style lang="scss">
html,body{
  height: 100%;
}
#app{
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .body{
    margin-top: 72px;
    flex: 1;
  }
}
</style>
