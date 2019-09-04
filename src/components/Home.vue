<template>
  <article class="home">
    <h2>Hello and welcome!</h2>
    <p>
      Travis is an avid explorer and collector of random knowledge. New ideas and challenges intrigue him, allowing him to learn and broaden his knowledge. His previous professional background in automotive parts inventory management allowed him to seek out better and more efficient solutions to the problems he faced. He chose to become a software engineer because although he was able to identify and solve, or propose solutions to these problems, he found myself becoming more interested in how they were implemented in terms of software. He now looks forward to developing an expertise in software design, while also solving unique and interesting challenges along the way.
    </p>
  </article>
</template>

<script>
export default {
  name: "Home"
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
@media screen and (max-width: 430px) {
  .home {
    display: flex;
    margin: 25px auto 0;
    padding: 0;
    width: 300px;
  }
}
</style>