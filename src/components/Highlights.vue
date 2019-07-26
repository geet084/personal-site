<template>
  <article class="highlights-page">
    <div class="projects">
      <section @click="toggleProject" class="project1 project">
        <h3>Turing Mentors</h3>
        <div v-if="showProject==='project1'" class="content">
          <span>
            <a href="https://turing-mentors.herokuapp.com/">Deployed Site</a>
            <h4>Turing Mentors</h4>
            <a href="https://github.com/geet084/turing-mentors">GitHub page</a>
          </span>
          <p>Description</p>
        </div>
      </section>

      <section @click="toggleProject" class="project2 project">
        <h3>Palette Picker</h3>
        <div v-if="showProject==='project2'" class="content">
          <span>
            <a href="https://palette-picker-1810.herokuapp.com/">Deployed Site</a>
            <h4>Palette Picker</h4>
            <a href="https://github.com/geet084/fe-palette-picker">GitHub page</a>
          </span>
          <p>Description</p>
        </div>
      </section>

      <section @click="toggleProject" class="project3 project">
        <h3>Travelr</h3>
        <div v-if="showProject==='project3'" class="content">
          <span>
            <p></p>
            <h4>Palette Picker</h4>
            <a href="https://github.com/geet084/travelr">GitHub page</a>
          </span>
          <p>Description</p>
        </div>
      </section>

      <section @click="toggleProject" class="project4 project">
        <h3>Trapper Keeper</h3>
        <div v-if="showProject==='project4'" class="content">
          <span>
            <p></p>
            <h4>Palette Picker</h4>
            <a href="https://github.com/geet084/trapper-keeper">GitHub page</a>
          </span>
          <p>Description</p>
        </div>
      </section>
    </div>
  </article>
</template>

<script>
export default {
  name: "Highlights",
  data() {
    return {
      showProject: ""
    };
  },
  methods: {
    toggleProject({ target }) {
      let selection = target.closest(".project") || target.closest(".expanded");

      if (selection.classList.contains("expanded")) {
        selection.classList.remove("expanded");
        selection.classList.add("project");
      } else {
        selection.classList.add("expanded");
        selection.classList.remove("project");
      }
      let project = selection.classList[0];
      this.showProject = this.showProject !== project ? project : "";
    }
  }
};
</script>

<style scoped>
.content {
  position: absolute;
  top: 140px;
  left: 17%;
  z-index: 3;
  background-color: rgb(255, 255, 255, 0.85);
  color: rgb(189, 29, 29);
  font-size: 1rem;
  font-weight: 600;
  width: 66%;
  overflow: scroll;
  height: 275px;
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
.content span {
  width: 100%;
  margin: 5px 0;
  display: flex;
  justify-content: space-around;
}
.content p {
  margin: 10px 10px 0;
}

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
  margin: 0 15%;
}
.project {
  display: flex;
  margin: 25px 0;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  content: "";
  position: relative;
  width: 100%;
  height: 70px;
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
  width: 100%;
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
