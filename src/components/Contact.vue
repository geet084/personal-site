<template>
  <div class="contact">
    <h2>Contact Me</h2>
    <div class="form-container">
      <div>
        <form action>
          <input
            v-model="form.email"
            id="email"
            type="text"
            placeholder="YOUR EMAIL ex: travis@gmail.com"
          />

          <input v-model="form.subject" id="subject" type="text" placeholder="SUBJECT" />

          <textarea
            v-model="form.message"
            name="message"
            id="message"
            cols="30"
            rows="10"
            placeholder="MESSAGE"
          ></textarea>
          <button @click.prevent="handleSubmit">Send Email</button>
        </form>
        <p class="post-res">{{this.postResponse}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact",
  data() {
    return {
      postResponse: "",
      form: {
        email: "",
        subject: "",
        message: ""
      }
    };
  },
  methods: {
    handleSubmit() {
      let { email, subject, message } = this.form;

      if (email !== "" && subject !== "" && message !== "") {
        this.$http
          .post(process.env.VUE_APP_BACKEND_URL, {
            from: email,
            subject,
            text: message
          })
          .then(res => (this.postResponse = res.data));

        this.form.email = "";
        this.form.subject = "";
        this.form.message = "";
      }
    }
  }
};
</script>

<style scoped>
.contact {
  margin-top: 25px;
}
.contact h2 {
  color: rgb(201, 101, 101);
}
.form-container {
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 100vh;
}
.form-container form {
  display: flex;
  margin-top: 20%;
  flex-direction: column;
  width: 200px;
}
.form-container form > * {
  margin: 10px 0;
  outline: 0;
}
.form-container form > *:focus {
  outline: 0;
  background-color: rgb(255, 220, 220);
}
.post-res {
  font-size: 1.4rem;
  color: red;
}
</style>
