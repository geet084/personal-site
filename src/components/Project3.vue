<template>
  <div class="content">
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
</template>

<script>
export default {
  name: "Project3"
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