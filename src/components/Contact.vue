<template>
  <div class="contact">
    <!-- <div>
      <h2>To get in touch with Travis:</h2>
      <h2>Email travis@travisgee.com</h2>
    </div>-->
    <form action>
      <input v-model="form.email" id="email" type="text" placeholder="YOUR EMAIL" />

      <input v-model="form.subject" id="subject" type="text" placeholder="SUBJECT" />

      <textarea
        v-model="form.message"
        name="message"
        id="message"
        cols="30"
        rows="10"
        placeholder="MESSAGE"
      ></textarea>
      <button @click.prevent="submitted">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Contact',
}
</script>

<style scoped>
.contact {
  display: flex;
  justify-content: center;
  margin-top: 20%;
  width: 100vw;
  height: 100vh;
}
.contact h2 {
  color: rgb(250, 140, 140);
  margin: 8px;
}
</style>
