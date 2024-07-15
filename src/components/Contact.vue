<template>
  <div>
    <section class="hero is-danger is-medium">
      <div class="hero-body">
        <div class="container has-text-centered">
          <p class="title">
            {{ title }}
          </p>
          <p class="subtitle">
            {{ subtitle }}
          </p>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="box">
        <header class="title has-text-centered is-info">
          Write to us
        </header>

        <article v-if="formError" class="message is-danger">
          <div class="message-header">
            <p>Form Error</p>
            <button
              v-on:click="formError = false"
              class="delete"
              aria-label="delete"
            ></button>
          </div>
          <div class="message-body">
            Please fill in your Name, Email & Message, The mandatory fields on
            the form..
          </div>
        </article>

        <div v-if="showForm">
          <div
            v-for="(formContent, index) in formContents"
            :key="index"
            class="field"
          >
            <label class="label">{{ formContent }}</label>
            <div class="control">
              <input
                class="input"
                type="text"
                v-model="userInput[formContent]"
                :placeholder="'Enter your ' + formContent + '...'"
              />
            </div>
          </div>

          <div class="field">
            <label class="label">Message</label>
            <div class="control">
              <textarea
                class="textarea"
                v-model="userInput.Message"
                type="text"
                rows="10"
                placeholder="Enter your message"
              ></textarea>
            </div>
          </div>

          <div class="field is-grouped">
            <div class="control">
              <button v-on:click="submitPost" class="button is-primary">
                Submit
              </button>
            </div>
            <div class="control">
              <button v-on:click="clearPost" class="button is-info">
                Clear
              </button>
            </div>
          </div>
        </div>

        <div v-if="!showForm">
          <h1 class="heading has-text-centered">
            <i class="far fa-thumbs-up fa-6x"></i> <br />
            <br />
            <br />
            Thanks for your message, our team will reach back in 2 business
            working day ...
          </h1>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      title: "Send us some love !!!",
      subtitle:
        "We love to hear your feedback, why don't you fill up the below form...",
      formContents: ["Name", "Email", "Phone Number", "Company", "Subject"],
      orgUserInput: {
        Name: "",
        Email: "",
        "Phone Number": "",
        Company: "",
        Subject: "",
        Message: ""
      },
      userInput: {
        Name: "",
        Email: "",
        "Phone Number": "",
        Company: "",
        Subject: "",
        Message: ""
      },
      formError: false,
      showForm: true
    };
  },
  methods: {
    clearPost() {
      this.userInput = { ...this.orgUserInput };
    },
    submitPost() {
      if (
        this.userInput.Message === "" ||
        this.userInput.Name === "" ||
        this.userInput.Email === ""
      ) {
        this.formError = true;
      } else {
        this.formError = false;
        axios
          .post("https://jsonplaceholder.typicode.com/posts", {
            title: this.userInput.Subject,
            body: this.userInput.Message,
            userId: 1
          })
          .then(() => {
            this.showForm = false;
            this.clearPost();
          });
      }
    }
  }
};
</script>

<style scoped>
.section {
  padding: 1rem 1.5rem;
  margin-top: -50px;
}
</style>
