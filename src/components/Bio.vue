<template>
  <article class="bio-page">
    <p>
      Travis Gee is an adventurer and seeker of interesting things. An avid offroad explorer, he likes to take his modified Jeep into the mountains to find new ways to appreciate the beauty of nature. Some times it is hidden where few people have gone and behind very narrow dirt roads with rocks as tall as your waist 12,000 feet up on the side of a mountain. Other times it is just off the highway for everyone to see.
    </p>
    <p>
      Recently a graduate of Turing School of Software and Design where he completed (survived) the 7 month intensive front end engineering program, where he built a couple dozen projects of varying types as he went through. Starting from simple HTML and CSS only pages to more complex single page applications that incorporated a backend server built explicitly for the application. What led him to Turing was a desire to change his future. The ability to help others, not only with software, but also to eventually help those who wish to learn to do the same. 
    </p>
    <p>
      Formerly a parts advisor and Assistant Mopar Brand Inventory Control Manager at several Denver area Jeep dealerships where he spent 15 years working his way up from a porter parking cars. It was a great opportunity to work upwards and to continue to learn, expanding what he knew as well as refining his skills as he went. From parking cars to shipping and receiving in parts, to retail parts advisor where he also began to help the parts manager with inventory control, to wholesale parts advisor where he took over most parts manager duties at one store, to Assistant Inventory Control Director where he helped oversee parts manager duties at 4 stores, and then later 5 when another store was added as well.
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
  margin-top: 25px;
  height: 470px;
  padding: 0 15%;
  color: white;
  display: flex;
  flex-direction: column;
  overflow: scroll;
  text-align: left;
}
.bio-page p {
  margin: 10px 0;
  line-height: 1.75rem;
  background-color: rgb(255, 255, 255, 0.1);
  padding: 15px;
  border-radius: 10px;
}
</style>