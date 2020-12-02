<template>
  <div id="app">
    <Nav />
    <router-view/>
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
