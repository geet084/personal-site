<template>
  <div class="home">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Home',
  props: {
    msg: String
  }
}
</script>

<style scoped>
.home {
  margin: -60px 0 0 0;
  background-color: rgb(82, 82, 82);
  color: white;
}
</style>
