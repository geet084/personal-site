<template>
  <article class="home" v-on:scroll="handleScrollArrows">
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
      const downArrow = document.querySelector("article.home .btm-arrow");
      const upArrow = document.querySelector("article.home .top-arrow");
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
.home {
  color: rgb(255, 255, 255);
  display: flex;
  flex-direction: column;
  height: 67vh;
  margin-top: 25px;
  padding: 0 15%;
  overflow: auto;
  text-align: left;
}
.home h2 {
  margin-bottom: 20px;
  text-align: center;
}
.home p {
  background-color: rgb(255, 255, 255, 0.1);
  border-radius: 10px;
  color: rgb(255, 255, 255);
  line-height: 1.75rem;
  padding: 15px;
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
  box-shadow: inset 0px -20px 10px 3px rgb(33, 33, 33);
  position: sticky;
  bottom: 0px;
  margin-top: -22px;
}
.top-arrow {
  box-shadow: inset 0px 20px 5px 0px rgb(13, 13, 13);
  position: sticky;
  top: 0px;
}
@media screen and (max-width: 430px) {
  .home {
    display: flex;
    margin: 25px auto 0;
    padding: 0;
    width: 300px;
  }
}
@media screen and (max-height: 600px) {
  .home {
    height: 57vh;
  }
}
</style>