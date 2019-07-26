<template>
  <article class="highlights-page">
    <section class="projects">
      <div @click="toggleProject" class="project1 project">
        <h3>Turing Mentors</h3>
      </div>
      <div @click="toggleProject" class="project2 project">
        <h3>Palette Picker</h3>
      </div>
      <div @click="toggleProject" class="project3 project">
        <h3>Travelr</h3>
      </div>
      <div @click="toggleProject" class="project4 project">
        <h3>Trapper Keeper</h3>
      </div>
    </section>
  </article>
</template>

<script>
export default {
  name: "Highlights",
  methods: {
    toggleProject(e) {
      let outer = e.target.parentElement.classList;
      let inner = e.target.classList;
      let innerEl = outer.contains("projects");

      let target = innerEl ? inner : outer;

      if (target.contains("expanded")) {
        innerEl ? inner.remove("expanded") : outer.remove("expanded");
        innerEl ? inner.add("project") : outer.add("project");
      } else {
        innerEl ? inner.add("expanded") : outer.add("expanded");
        innerEl ? inner.remove("project") : outer.remove("project");
      }
    }
  }
};
</script>

<style scoped>
.expanded {
  display: flex;
  margin: 40px 0;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  content: "";
  position: absolute;
  top: 100px;
  width: 100%;
  height: 100%;
}
.expanded:hover {
  cursor: pointer;
}
.expanded:hover:before {
  opacity: 1;
  box-shadow: 2px 2px 5px -1px rgba(255, 255, 255, 0.5);
}
.expanded:before {
  content: "";
  position: absolute;
  top: 0;
  width: 70%;
  height: 430px;
  z-index: 2;
  border-radius: 15px;
}

.highlights-page {
  margin-top: 25px;
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
  margin: 40px 0;
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
.project2:before {
  background: url("../assets/palette-picker.png") no-repeat center;
  background-size: cover;
}
.project3:before {
  background: url("../assets/travelr.png") no-repeat center;
  background-size: cover;
}
.project4:before {
  background: url("../assets/trapper-keeper.png") no-repeat center;
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
