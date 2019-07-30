<template>
  <article class="bio-page">
    <p>
      Travis Gee is an adventurer and seeker of interesting things. An avid offroad explorer, he likes to take his modified Jeep into the mountains to find new ways to appreciate the beauty of nature. Some times it is hidden where few people have gone and behind very narrow dirt roads with rocks as tall as your waist 12,000 feet up on the side of a mountain. Other times it is just off the highway for everyone to see.
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