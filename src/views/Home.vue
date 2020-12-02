<template>
  <div class="home">
    <div v-for="i in 100" :key="i">home{{i}}</div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>
