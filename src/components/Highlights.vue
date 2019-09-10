<template>
  <article class="highlights-page" v-on:scroll="handleScrollArrows">
    <div class="projects">
      <span class="arrow arrow-top" :class="[isTop ? 'hidden' : '']">▲</span>
      <section
        @click="toggleProject"
        v-for="(project, index) in this.projects"
        :class="`project${index + 1} project`"
        :key="`project${index}`"
      >
        <h3>{{project.title}}</h3>
        <Project
          v-if="currentProject===`project${index + 1}`"
          :title="project.title"
          :site="project.site"
          :repo="project.repo"
          :paragraphs="project.paragraphs"
        />
      </section>
      <span class="arrow arrow-btm" :class="[isBtm ? 'hidden' : '']">▼</span>
    </div>
  </article>
</template>

<script>
import Project from "./Project";
import projects from "../assets/projects";

export default {
  name: "Highlights",
  components: {
    Project
  },
  data() {
    return {
      projects,
      currentProject: "none",
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
    toggleProject({ target }) {
      target.closest("section").classList.toggle("expanded");
      target.closest("section").classList.toggle("project");

      let selected = target.closest("section").classList[0];
      this.currentProject =
        selected !== this.currentProject ? selected : "none";
    },
    handleScrollArrows() {
      const { scrollHeight, offsetHeight, scrollTop } = this.$el;
      const distToBtm = scrollHeight - offsetHeight - scrollTop;

      this.isTop = scrollTop < 22;
      this.isBtm = distToBtm < 5;
    }
  }
};
</script>

<style scoped>
.expanded {
  align-items: center;
  border-radius: 15px;
  content: "";
  display: flex;
  justify-content: center;
  margin: 40px 0;
  position: absolute;
  top: 100px;
  width: 100%;
}
.expanded:hover {
  cursor: pointer;
}
.expanded:hover:before {
  box-shadow: 2px 2px 5px -1px rgba(255, 255, 255, 0.5);
  opacity: 1;
}
.expanded:before {
  border-radius: 15px;
  content: "";
  height: 430px;
  position: absolute;
  top: 0;
  width: 65%;
  z-index: 2;
}
.highlights-page {
  height: 67vh;
  overflow: auto;
  margin-top: 15px;
}
.projects {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: -15px 15% 0;
}
.project {
  align-items: center;
  border-radius: 15px;
  content: "";
  display: flex;
  height: 75px;
  justify-content: center;
  margin: 15px 0;
  position: relative;
  width: 90%;
}
.project:hover {
  cursor: pointer;
}
.project:hover:before {
  box-shadow: 2px 2px 5px -1px rgba(255, 255, 255, 0.5);
  opacity: 1;
}
.project:before {
  content: "";
  border-radius: 15px;
  height: 70px;
  opacity: 0.5;
  position: absolute;
  width: 100%;
  z-index: -1;
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
.project h3 {
  color: rgb(255, 255, 255);
  font-size: 1.75rem;
  font-weight: 700;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
    1px 1px 0 #000;
}
.arrow-btm {
  bottom: -3px;
  margin-top: -22px;
  position: sticky;
  box-shadow: inset 0px -20px 10px 3px rgb(13, 13, 13);
  content: "";
  display: inline-block;
  width: 91%;
}
.arrow-top {
  box-shadow: inset 0px 20px 5px 0px rgb(13, 13, 13);
  position: sticky;
  top: 0px;
  display: inline-block;
  content: "";
  width: 91%;
  z-index: 1;
}
@media screen and (max-width: 462px) {
  .project,
  .expanded::before {
    width: 300px;
  }
  .proj-content {
    left: 50%;
    margin: -49px -144px;
    position: fixed;
    top: 310px;
    width: 286px;
  }
  .arrow-btm,
  .arrow-top {
    width: 300px;
  }
}
@media screen and (max-height: 515px) {
  .highlights-page {
    height: 63vh;
    top: -20px;
  }
  .expanded::before {
    height: 360px;
  }
  .proj-content {
    height: 220px;
  }
}
@media screen and (max-height: 400px) {
  .highlights-page {
    height: 54vh;
  }
}
</style>