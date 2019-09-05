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
  bottom: 10px;
  right: 10px;
}
i {
  color: rgb(255, 255, 255);
  font-size: 2.4rem;
  margin: 0 10px;
}
i:hover {
  color: rgb(182, 115, 115);
}
</style>