<template>
  <footer class="footer">
    <a target="_blank" href="https://github.com/geet084">
      <i class="fab fa-github"></i>
    </a>
    <a target="_blank" href="https://www.linkedin.com/in/travis-gee/">
      <i class="fab fa-linkedin"></i>
    </a>
  </footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style scoped>
.footer {
  position: fixed;
  bottom: 20px;
  right: 20px;
}
i {
  color: rgb(150, 104, 104);
  font-size: 2rem;
  margin: 0 10px;
}
i:hover {
  color: white;
}
</style>
