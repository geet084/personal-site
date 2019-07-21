<template>
  <div class="links">
    <router-link to="/">Home</router-link>
    <router-link to="/bio">Bio</router-link>
    <router-link to="/highlights">Highlights</router-link>
    <router-link to="/contact">Contact</router-link>
  </div>
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
  margin: 10px 0 0 0;
}
.links a {
  text-decoration: none;
  font-size: 1.4rem;
  color: red;
  border-radius: 25px;
  padding: 0 10px;
  filter: drop-shadow(0px 0px 6px white);
}
.links a:hover {
  filter: drop-shadow(0px 0px 6px red);
  color: white;
}
</style>
