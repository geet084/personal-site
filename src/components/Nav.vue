<template>
  <nav class="links">
    <span>
      <router-link exact to="/">Home</router-link>
    </span>
    <span>
      <router-link to="/bio">Bio</router-link>
    </span>
    <span>
      <router-link to="/highlights">Highlights</router-link>
    </span>
    <span>
      <router-link to="/contact">Contact</router-link>
    </span>
  </nav>
</template>

<script>
export default {
  name: "Nav"
};
</script>

<style scoped>
.links {
  align-items: center;
  display: flex;
  justify-content: space-around;
  margin: 10px 0 0 0;
  width: 100%;
}
.links a {
  border-radius: 25px;
  color: rgb(182, 0, 0);
  filter: drop-shadow(0px 0px 2px rgba(255, 255, 255, 0.7));
  font-family: "Skranji", cursive;
  font-size: 1.8rem;
  font-weight: 500;
  padding: 0 10px;
  text-decoration: none;
  text-shadow: -0.04rem 0 black, 0 0.04rem black, 0.04rem 0 black,
    0 -0.04rem black;
}
.links a:hover {
  color: rgb(255, 255, 255);
  filter: drop-shadow(0px 0px 6px red);
}
.links span {
  background: radial-gradient(
    rgba(255, 255, 255, 0.25) 15%,
    rgba(0, 0, 0, 0.1) 70%
  );
  border-radius: 30px;
}
.links .router-link-active {
  color: rgb(255, 255, 255);
  filter: drop-shadow(0px 0px 6px rgb(210, 218, 54));
}
.links .router-link-active:hover {
  filter: drop-shadow(0px 0px 6px rgb(255, 255, 255));
}
@media screen and (max-width: 430px) {
  .links a {
    font-size: 1.25rem;
  }
}
</style>