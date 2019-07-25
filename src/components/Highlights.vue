<template>
  <article class="highlights-page">
    <h2>HIGHLIGHTS</h2>
    <section class="projects">
      <div class="project1 project">
        <h3>Turing Mentors</h3>
      </div>
    </section>
  </article>
</template>

<script>
export default {
  name: "Highlights"
};
</script>

<style scoped>
.highlights-page {
  margin-top: 25px;
}
.highlights-page h2 {
  color: rgb(182, 115, 115);
  margin-bottom: 30px;
}
.projects {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100vw;
}
.project {
  display: flex;
  margin: 30px 0;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  content: "";
  position: relative;
  width: 100%;
  height: 100%;
}
.project:hover {
  cursor: pointer;
}
.project:hover:before {
  opacity: 1;
  box-shadow: 2px 2px 5px -1px rgba(255, 255, 255, 0.5);
}
.project:before {
  content: "";
  position: absolute;
  width: 70%;
  height: 70px;
  z-index: -1;
  opacity: 0.5;
  border-radius: 15px;
}
.project1:before {
  background: url("../assets/turing-mentors.png") no-repeat center;
  background-size: cover;
}
h3 {
  font-size: 1.75rem;
  font-weight: 700;
  color: white;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
    1px 1px 0 #000;
}
</style>
