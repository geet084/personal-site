<template>
  <div class="links">
    <a href="/">Home</a>
    <a href="/bio">Bio</a>
    <a href="/highlights">Highlights</a>
    <a href="/contact">Contact</a>
  </div>
</template>

<script>
export default {
  name: 'Nav',
}
</script>

<style scoped>
.links {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  background-color: darkslategray;
}
.links a {
  text-decoration: none;
  font-size: 1.4rem;
  color: white;
}

</style>
