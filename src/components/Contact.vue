<template>
  <article class="contact-page">
    <section class="form-container">
      <div class="contact-form">
        <form>
          <input
            v-model="form.sender"
            id="sender"
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
          <button class="submit-btn" @click.prevent="handleSubmit">Send Email</button>
        </form>
        <p class="post-res">{{this.postResponse}}</p>
      </div>
    </section>
  </article>
</template>

<script>
export default {
  name: "Contact",
  data() {
    return {
      postResponse: "",
      form: {
        sender: "",
        subject: "",
        message: ""
      }
    };
  },
  methods: {
    handleSubmit() {
      const { sender, subject, message } = this.form;
      const emailWarning = "Please input your email";
      const subjectWarning = "Please input a subject";
      const messageWarning = "Please include a message";

      if (sender === "") this.postResponse = emailWarning;
      else if (subject === "") this.postResponse = subjectWarning;
      else if (message === "") this.postResponse = messageWarning;
      else {
        this.$http
          .post(process.env.VUE_APP_BACKEND_URL, {
            sender,
            subject,
            message
          })
          .then(res => (this.postResponse = res.data));

        Object.keys(this.form).forEach(key => (this.form[key] = ""));
      }
    }
  }
};
</script>

<style scoped>
.contact-page {
  margin-top: 45px;
}
.contact-form {
  background-color: rgb(255, 255, 255, 0.15);
  padding: 15px;
  border-radius: 10px;
}
.contact-form input,
.contact-form button {
  height: 25px;
}
.contact-form input {
  padding-left: 5px;
}
.contact-form textarea {
  padding: 5px 0 0 5px;
}
.form-container {
  display: flex;
  justify-content: center;
  width: 100vw;
}
.form-container form {
  display: flex;
  flex-direction: column;
  width: 260px;
}
.form-container form > * {
  margin: 10px 0;
  outline: 0;
}
.form-container form > *:focus,
.submit-btn:hover {
  outline: 0;
  background-color: rgb(255, 225, 225);
}
.post-res {
  font-size: 1.1rem;
  font-weight: 900;
  color: red;
}
</style>