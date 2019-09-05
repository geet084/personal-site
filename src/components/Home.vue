<template>
  <article class="home text-page" v-on:scroll="handleScrollArrows">
    <span class="arrow top-arrow hide">▲</span>
    <h2>Hello and welcome!</h2>
    <p>
      Travis is an avid explorer and collector of random knowledge. New ideas and challenges intrigue him, allowing him to learn and broaden his knowledge. His previous professional background in automotive parts inventory management allowed him to seek out better and more efficient solutions to the problems he faced. He chose to become a software engineer because although he was able to identify and solve, or propose solutions to these problems, he found myself becoming more interested in how they were implemented in terms of software. He now looks forward to developing an expertise in software design, while also solving unique and interesting challenges along the way.
    </p>
    <span class="arrow btm-arrow hide">▼</span>
  </article>
</template>

<script>
export default {
  name: "Home",
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
      const content = window.document.querySelector(".home");
      const downArrow = document.querySelector(".btm-arrow");
      const upArrow = document.querySelector(".top-arrow");
      const distToBtm = content.scrollHeight - content.offsetHeight - content.scrollTop;
      const isScrollable = content.scrollHeight > 0;
      
      if (content.scrollTop > 22) upArrow.classList.remove("hide");
      else upArrow.classList.add("hide");

      if (isScrollable && distToBtm > 5) downArrow.classList.remove("hide", "hidden");
      else if (distToBtm <= 5) downArrow.classList.add("hidden");
      else downArrow.classList.add("hide");
    }
  }
};
</script>

<style scoped>
.home h2 {
  margin-bottom: 20px;
  text-align: center;
}
</style>