<template>
  <article class="home text-page" v-on:scroll="handleScrollArrows">
    <span class="arrow top-arrow" :class="[isTop ? 'hide' : '']">▲</span>
    <h2>Hello and welcome!</h2>
    <p class="profile-img">
      <img src="../assets/profile.png" alt="profile" />
      <span>Looking over the edge of the cliff at Top of the World in Moab</span>
    </p>
    <p>
      Travis is an avid explorer and collector of random knowledge. New ideas and challenges intrigue him, allowing him to learn and broaden his knowledge. His previous professional background in automotive parts inventory management allowed him to seek out better and more efficient solutions to the problems he faced. He chose to become a software engineer because although he was able to identify and solve, or propose solutions to these problems, he found myself becoming more interested in how they were implemented in terms of software. He now looks forward to developing an expertise in software design, while also solving unique and interesting challenges along the way.
    </p>
    <span class="arrow btm-arrow" :class="[isBtm ? 'hide' : '']">▼</span>
  </article>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      isTop: true,
      isBtm: false
    };
  },
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
      const { scrollHeight, offsetHeight, scrollTop } = this.$el;
      const distToBtm = scrollHeight - offsetHeight - scrollTop;
      
      this.isTop = scrollTop < 22
      this.isBtm =  distToBtm < 5
    }
  }
};
</script>

<style scoped>
.home h2 {
  margin-bottom: 20px;
  text-align: center;
}
.profile-img {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  max-width: 400px;
  align-self: center;
}
.profile-img span {
  font-size: 0.59rem;
  margin-top: -30px;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
    1px 1px 0 #000;
}
.home img {
  object-fit: contain;
  object-position: 100% 83%;
  width: 100%;
  margin-top: -25px;
}
</style>