<template>
  <article class="bio-page" v-on:scroll="handleScrollArrows">
    <span class="arrow top-arrow hide">▲</span>
    <p>
      Travis Gee is an adventurer and seeker of interesting things. An avid offroad explorer, he likes to take his modified Jeep into the mountains to find new ways to appreciate the beauty of nature. Some times it is hidden where few people have gone and behind very narrow dirt roads with rocks as tall as your waist 12,000 feet up on the side of a mountain. Other times it is just off the highway for everyone to see.
    </p>
    <p>
      Recently a graduate of Turing School of Software and Design where he completed (survived) the 7 month intensive front end engineering program, where he built a couple dozen projects of varying types as he went through. Starting from simple HTML and CSS only pages to more complex single page applications that incorporated a backend server built explicitly for the application. What led him to Turing was a desire to change his future. The ability to help others, not only with software, but also to eventually help those who wish to learn to do the same. 
    </p>
    <p>
      Formerly a parts advisor and Assistant Mopar Brand Inventory Control Manager at several Denver area Jeep dealerships where he spent 15 years working his way up from a porter parking cars. It was a great opportunity to work upwards and to continue to learn, expanding what he knew as well as refining his skills as he went. From parking cars to shipping and receiving in parts, to retail parts advisor where he also began to help the parts manager with inventory control, to wholesale parts advisor where he took over most parts manager duties at one store, to Assistant Inventory Control Director where he helped oversee parts manager duties at 4 stores, and then later 5 when another store was added as well.
    </p>
    <span class="arrow btm-arrow hide">▼</span>
  </article>
</template>

<script>
export default {
  name: "Bio",
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
      const content = window.document.querySelector(".bio-page");
      const downArrow = document.querySelector("article.bio-page .btm-arrow");
      const upArrow = document.querySelector("article.bio-page .top-arrow");
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
.bio-page {
  color: rgb(255, 255, 255);
  display: flex;
  flex-direction: column;
  height: 67vh;
  margin-top: 25px;
  overflow: auto;
  padding: 0 15%;
  text-align: left;
}
.bio-page p {
  background-color: rgb(255, 255, 255, 0.1);
  border-radius: 10px;
  line-height: 1.75rem;
  margin: 10px 0;
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
  bottom: -2px;
  margin-top: -22px;
}
.top-arrow {
  box-shadow: inset 0px 20px 5px 0px rgb(13, 13, 13);
  position: sticky;
  top: 0px;
}
@media screen and (max-width: 430px) {
  .bio-page {
    display: flex;
    margin: 25px auto 0;
    padding: 0;
    width: 300px;
  }
}
@media screen and (max-height: 600px) {
  .bio-page {
    height: 57vh;
  }
}
</style>