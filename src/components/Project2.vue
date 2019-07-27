<template>
  <div class="content">
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
</template>

<script>
export default {
  name: "Project2"
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
  font-size: 0.85rem;
  font-weight: 400;
}
</style>