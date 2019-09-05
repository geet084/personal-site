<template>
  <div class="content" v-on:scroll="handleScrollArrows">
    <span class="arrow top-arrow hide">▲</span>
    <span class="top">
      <a class="link-long" target="_blank" :href="site" v-if="site !== ''">Deployed Site</a>
      <a class="link-short" target="_blank" :href="site" v-if="site !== ''">Site</a>
      <h4>{{title}}</h4>
      <a class="link-long" target="_blank" :href="repo" v-if="repo !== ''">GitHub Repo</a>
      <a class="link-short" target="_blank" :href="repo" v-if="repo !== ''">Repo</a>
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
      const content = window.document.querySelector(".content");
      const downArrow = document.querySelector("div.content .btm-arrow");
      const upArrow = document.querySelector("div.content .top-arrow");
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
.hidden {
  visibility: hidden;
}
.arrow {
  color: rgb(189, 29, 29);
  text-align: center;
  margin: 0px;
}
.btm-arrow {
  border-radius: 0 0 10px 10px;
  box-shadow: inset 0px -20px 10px 3px rgb(242, 242, 242);
  position: sticky;
  bottom: 0px;
}
.top-arrow {
  border-radius: 10px 10px 0 0;
  box-shadow: inset 0px 20px 10px -3px rgb(242, 242, 242);
  position: sticky;
  top: 0px;
}
.link-short {
  display: none;
}
@media screen and (max-width: 600px) {
  .link-long {
    display: none;
  }
  .link-short {
    display: inline-block;
  }
}
</style>