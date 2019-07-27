<template>
  <article class="highlights-page">
    <div class="projects">
      <section @click="toggleProject" class="project1 project">
        <h3>Turing Mentors</h3>
        <Project1 v-if="showProject==='project1'" />
      </section>

      <section @click="toggleProject" class="project2 project">
        <h3>Palette Picker</h3>
        <Project2 v-if="showProject==='project2'" />
      </section>

      <section @click="toggleProject" class="project3 project">
        <h3>Travelr</h3>
        <project3 v-if="showProject==='project3'" />
      </section>

      <section @click="toggleProject" class="project4 project">
        <h3>Trapper Keeper</h3>
        <div v-if="showProject==='project4'" class="content">
          <span>
            <p></p>
            <h4>Trapper Keeper</h4>
            <a href="https://github.com/geet084/trapper-keeper">GitHub Repo</a>
          </span>
          <p>
            There are many things that Google does right and for this project we were tasked with recreating some of that functionality. Being able to create a note along with items on each note, but to do so dynamically as needed.
          </p>
          <p>
            It was our first foray into building a backend server to store the data that would come from out frontend. It was also the first time that we were able to successfully implement TDD from start to finish on the server functionality.
          </p>
          <p>
            On the frontend, we sought to make the interface as simple and "Google-like" as possible and found it to be challenging at times. Simple and intuitive is not an easy experience to implement, but we felt like we ended up in a really good spot in the end.
          </p>
        </div>
      </section>
    </div>
  </article>
</template>

<script>
import Project1 from './Project1.vue'
import Project2 from './Project2.vue'
import Project3 from './Project3.vue'

export default {
  name: "Highlights",
  components: {
    Project1,
    Project2,
    Project3,
  },
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
  width: 65%;
  height: 460px;
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
  width: 90%;
  height: 75px;
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
