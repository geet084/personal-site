<template>
  <div class="links">
    <span><router-link to="/">Home</router-link></span>
    <span><router-link to="/bio">Bio</router-link></span>
    <span><router-link to="/highlights">Highlights</router-link></span>
    <span><router-link to="/contact">Contact</router-link></span>
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
  font-weight: 500;
  color: rgb(232, 19, 19);
  border-radius: 25px;
  padding: 0 10px;
  text-shadow: -0.04rem 0 black, 0 0.04rem black, 0.04rem 0 black, 0 -0.04rem black;
  filter: drop-shadow(0px 0px 2px rgba(255, 255, 255, 0.7));
}
.links a:hover {
  filter: drop-shadow(0px 0px 6px red);
  color: white;
}

.links span {
border-radius: 30px;
background:radial-gradient(rgba(255,255,255,.25) 15%, rgba(0,0,0,0.1) 70%);
}
</style>
