<template>
  <article class="highlights-page">
    <div class="projects">
      <section @click="toggleProject" class="project1 project">
        <h3>Turing Mentors</h3>
        <div v-if="showProject==='project1'" class="content">
          <span>
            <a href="https://turing-mentors.herokuapp.com/">Deployed Site</a>
            <h4>Turing Mentors</h4>
            <a href="https://github.com/geet084/turing-mentors">GitHub Repo</a>
          </span>
          <p>
            This project was my last one while at Turing and I collaborated with a backend student to build a fullstack application. We decided to build something that would enhance and replace the existing mentoring spreadsheet, which was clunky and not well looked after.
          </p>
          <p>
            To do this, we came up with a short survey for both those seeking a mentor and those wished to become a mentor themselves. Using that information, we then filtered down the list by location (currently Denver or Remote) as well as by programming language to provide a better search experience.
          </p>
          <p>
            Our next steps will be to implement a login and tracking system for users, more location and language selections, as well as an admin dashboard. 
          </p>
        </div>
      </section>

      <section @click="toggleProject" class="project2 project">
        <h3>Palette Picker</h3>
        <div v-if="showProject==='project2'" class="content">
          <span>
            <a href="https://palette-picker-1810.herokuapp.com/">Deployed Site</a>
            <h4>Palette Picker</h4>
            <a href="https://github.com/geet084/fe-palette-picker">GitHub Repo</a>
          </span>
          <p>
            My first project where we developed an entire fullstack application from start to finish. Tasked with building a backend server along with using continuous integration for our API and building a frontend site that was simple and intuitive to use.
          </p>
          <p>
            For the server we used the standard CRUD endpoints as well as adding another queryable GET endpoint that would search for projects by name. We were also able to implement TDD during this portion of the project, to a high degree of success.
          </p>
          <p>
            On the frontend we sought to build a user interface that was easy to understand and use while also being a stylish recreation of the website Coolors. 
          </p>
        </div>
      </section>

      <section @click="toggleProject" class="project3 project">
        <h3>Travelr</h3>
        <div v-if="showProject==='project3'" class="content">
          <span>
            <p></p>
            <h4>Travelr</h4>
            <a href="https://github.com/geet084/travelr">GitHub Repo</a>
          </span>
          <p>
            For my last solo project of Turing, I wanted to build an application that would illustrate time and distance in a unique way. Many people do not realize how far they are traveling every second, due to the Earth, Sun, Solar System and Galaxy all moving through space.
          </p>
          <p>
            I struggled quite a bit with Date and Time issues during the project, but was pleased to be able to get a decent (if not always accurate) representation of distance covered through space since a given date. 
          </p>
          <p>
            As I continue to work on this, I would like to have a visual representation of distance pop up in correlation to the number. For example 238,000 miles and a picture of the moon. I would also like to build my own server to use as a way of storing the data and making the experience a bit better.
          </p>
        </div>
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
  left: 19%;
  z-index: 3;
  background-color: rgb(255, 255, 255, 0.85);
  color: rgb(189, 29, 29);
  font-size: 1rem;
  font-weight: 600;
  width: 62%;
  overflow: scroll;
  height: 300px;
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
  font-size: .85rem;
  font-weight: 400;
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
