<template>
  <article class="contact-page">
    <section class="form-container">
      <div class="contact-form">
        <form>
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
            rows="12"
            placeholder="MESSAGE"
          ></textarea>
          <button class="submit-btn" @click.prevent="handleSubmit">Send Email</button>
        </form>
        <p class="form-feedback">{{this.formFeedback}}</p>
      </div>
    </section>
  </article>
</template>

<script>
export default {
  name: "Contact",
  data() {
    return {
      formFeedback: "",
      form: {
        email: "",
        subject: "",
        message: ""
      }
    };
  },
  updated() {
    const { form } = this;

    Object.keys(form).forEach(input => {
      const inputWasEmpty = this.formFeedback.includes(input);
      const inputIsNowNotEmpty = form[input] !== "";

      if (inputWasEmpty && inputIsNowNotEmpty) this.formFeedback = "";
    });
  },
  methods: {
    handleSubmit() {
      const { email, subject, message } = this.form;
      const emailWarning = "Please input your email";
      const subjectWarning = "Please input a subject";
      const messageWarning = "Please include a message";

      if (email === "") this.formFeedback = emailWarning;
      else if (subject === "") this.formFeedback = subjectWarning;
      else if (message === "") this.formFeedback = messageWarning;
      else {
        this.$http
          .post(process.env.VUE_APP_BACKEND_URL, {
            sender: email,
            subject,
            message
          })
          .then(res => (this.formFeedback = res.data));

        Object.keys(this.form).forEach(key => (this.form[key] = ""));
      }
    }
  }
};
</script>

<style scoped>
.contact-page {
  margin-top: 35px;
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
.form-feedback {
  font-size: 1.1rem;
  font-weight: 900;
  color: red;
}
@media screen and (max-height: 600px) {
  #message {
    height: 105px;
  }
}
</style>