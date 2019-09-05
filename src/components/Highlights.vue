<template>
  <article class="highlights-page" v-on:scroll="handleScrollArrows">
    <span class="arrow top-arrow hide">▲</span>
    <div class="projects">
      <section
        @click="toggleProject"
        v-for="(project, index) in this.projects"
        :class="`project${index + 1} project`"
        :key="`project${index}`"
      >
        <h3>{{project.title}}</h3>
        <Project
          v-if="showProject===`project${index + 1}`"
          :title="project.title"
          :site="project.site"
          :repo="project.repo"
          :paragraphs="project.paragraphs"
        />
      </section>
    </div>
    <span class="arrow btm-arrow hide">▼</span>
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
      showProject: ""
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
    },
    handleScrollArrows() {
      const content = window.document.querySelector(".highlights-page");
      const downArrow = document.querySelector("article.highlights-page .btm-arrow");
      const upArrow = document.querySelector("article.highlights-page .top-arrow");
      const distToBtm = content.scrollHeight - content.offsetHeight - content.scrollTop;
      const isScrollable = content.scrollHeight > 0;
      
      if (content.scrollTop > 22) upArrow.classList.remove("hidden");
      else upArrow.classList.add("hidden");

      if (isScrollable && distToBtm > 5)
        downArrow.classList.remove("hide", "hidden");
      else if (distToBtm <= 5) downArrow.classList.add("hidden");
      else downArrow.classList.add("hide");
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
  margin-top: 25px;
  overflow: auto;
}
.projects {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 0 15%;
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
.hide {
  display: none;
}
.hidden {
  visibility: hidden;
}
.projects span {
  width: 300px;
}
.arrow {
  color: rgb(189, 29, 29);
  text-align: center;
  margin: 0px;
}
.btm-arrow {
  box-shadow: inset 0px -20px 10px 3px rgb(13, 13, 13);
  position: sticky;
  content: "";
  display: inline-block;
  width: 305px;
  bottom: 0px;
}
.top-arrow {
  box-shadow: inset 0px 20px 5px 0px rgb(13, 13, 13);
  position: sticky;
  display: inline-block;
  content: "";
  width: 305px;
  top: 0px;
  z-index: 1;
}
@media screen and (max-width: 462px) {
  .project,
  .expanded::before {
    width: 300px;
  }
  .content {
    left: 50%;
    margin: -49px -144px;
    position: fixed;
    top: 309px;
    width: 286px;
  }
}
@media screen and (max-height: 600px) {
  .highlights-page {
    height: 60vh;
  }
  .expanded::before {
    height: 355px;
  }
  .content {
    height: 225px;
  }
}
</style>