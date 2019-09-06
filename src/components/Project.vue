<template>
  <div class="proj-content" v-on:scroll="handleScrollArrows">
    <span class="arrow top-arrow hide">▲</span>
    <span class="top">
      <a class="regular-size" target="_blank" :href="site" v-if="site !== ''">Deployed Site</a>
      <a class="mobile-size" target="_blank" :href="site" v-if="site !== ''">Site</a>
      <h4>{{title}}</h4>
      <a class="regular-size" target="_blank" :href="repo" v-if="repo !== ''">GitHub Repo</a>
      <a class="mobile-size" target="_blank" :href="repo" v-if="repo !== ''">Repo</a>
    </span>
    <p v-for="paragraph in paragraphs" :key="paragraph">{{ paragraph }}</p>
    <span class="arrow btm-arrow hide">▼</span>
  </div>
</template>

<script>
export default {
  name: "Project",
  props: ["title", "site", "repo", "paragraphs"],
  mounted() {
    this.handleScrollArrows();
  },
  created() {
    window.addEventListener("resize", this.handleScrollArrows);
  },
  destroyed() {
    window.removeEventListener("resize", this.handleScrollArrows);
  },
  methods: {
    handleScrollArrows() {
      const content = window.document.querySelector(".proj-content");
      const downArrow = document.querySelector(".btm-arrow");
      const upArrow = document.querySelector(".top-arrow");
      const distToBtm = content.scrollHeight - content.offsetHeight - content.scrollTop;
      const isScrollable = content.scrollHeight > 0;

      if (content.scrollTop > 22) upArrow.classList.remove("hide");
      else upArrow.classList.add("hide");

      if (isScrollable && distToBtm > 5)
        downArrow.classList.remove("hide", "hidden");
      else if (distToBtm <= 5) downArrow.classList.add("hidden");
      else downArrow.classList.add("hide");
    }
  }
};
</script>

<style scoped>
.proj-content {
  background-color: #ffffffd9;
  border: 1px solid rgb(101, 101, 101);
  border-radius: 10px;
  color: rgb(189, 29, 29);
  display: flex;
  flex-direction: column;
  font-size: 1rem;
  font-weight: 600;
  height: 300px;
  left: 19%;
  overflow: auto;
  position: absolute;
  text-align: left;
  top: 120px;
  width: 62%;
  z-index: 3;
}
.proj-content a {
  color: rgb(189, 29, 29);
}
.proj-content a:hover {
  color: rgb(0, 64, 255);
}
.proj-content .top {
  display: flex;
  justify-content: space-around;
  margin: 5px 0;
}
.proj-content p {
  font-size: 0.85rem;
  font-weight: 400;
  margin: 10px 10px 0;
}
.btm-arrow {
  box-shadow: inset 0px -20px 10px 3px rgb(242, 242, 242);
}
.top-arrow {
  border-radius: 10px 10px 0 0;
  box-shadow: inset 0px 20px 10px -3px rgb(242, 242, 242);
}
.mobile-size {
  display: none;
}
@media screen and (max-width: 600px) {
  .regular-size {
    display: none;
  }
  .mobile-size {
    display: inline-block;
  }
}
</style>