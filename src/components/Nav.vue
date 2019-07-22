<template>
  <nav class="links">
    <router-link to="/">Home</router-link>
    <router-link to="/bio">Bio</router-link>
    <router-link to="/highlights">Highlights</router-link>
    <router-link to="/contact">Contact</router-link>
  </nav>
</template>

<script>
export default {
  name: "Nav"
};
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
