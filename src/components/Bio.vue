<template>
  <article class="bio-page">
    <p>
      Travis Gee is an adventurer and seeker of interesting things. An avid offroad explorer, he likes to take his modified Jeep into the mountains to find new ways to appreciate the beauty of nature. Some times it is hidden where few people have gone and behind very narrow dirt roads with rocks as tall as your waist 12,000 feet up on the side of a mountain. Other times it is just off the highway for everyone to see.
    </p>
    <p>
      Recently a graduate of Turing School of Software and Design where he completed (survived) the 7 month intensive front end engineering program, where he built a couple dozen projects of varying types as he went through. Starting from simple HTML and CSS only pages to more complex single page applications that incorporated a backend server built explicitly for the application.
    </p>
    <p>
      
    </p>
  </article>
</template>

<script>
export default {
  name: "Bio"
};
</script>

<style scoped>
.bio-page {
  height: 500px;
  width: 70vw;
  margin: auto;
  color: white;
  display: flex;
  flex-direction: column;
  overflow: scroll;
  text-align: left;
}
.bio-page p {
  margin: 30px 0;
  line-height: 1.75rem;
}
</style>