<template>
  <div class="content">
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
</template>

<script>
export default {
  name: "Project4"
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