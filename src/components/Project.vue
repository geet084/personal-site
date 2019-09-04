<template>
  <div class="content">
    <span class="top">
      <a target="_blank" :href="site">Deployed Site</a>
      <h4>{{title}}</h4>
      <a target="_blank" :href="repo">GitHub Repo</a>
    </span>
    <p v-for="paragraph in paragraphs" :key="paragraph">{{ paragraph }}</p>
  </div>
</template>

<script>
export default {
  name: "Project",
  props: ["title", "site", "repo", "paragraphs"]
};
</script>

<style scoped>
.content {
  position: absolute;
  top: 120px;
  left: 19%;
  z-index: 3;
  background-color: #ffffffd9;
  color: rgb(189, 29, 29);
  font-size: 1rem;
  font-weight: 600;
  width: 62%;
  overflow: auto;
  height: 300px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  text-align: left;
  border: 1px solid rgb(101, 101, 101);
}
.content a {
  color: rgb(189, 29, 29);
}
.content a:hover {
  color: rgb(0, 64, 255);
}
.content .top {
  margin: 5px 0;
  display: flex;
  justify-content: space-around;
}
.content p {
  margin: 10px 10px 0;
  font-size: 0.85rem;
  font-weight: 400;
}
.hide {
  display: none;
}
.arrow {
  color: black;
  text-align: center;
  border-radius: 0 0 10px 10px;
  margin: 0px;
  position: sticky;
  bottom: 0px;
  box-shadow: inset 0px -20px 10px 3px rgb(230, 228, 228);
}
</style>