<template>
  <div class="contact-page animate-fade-in">
    <!-- Header -->
    <header class="page-header text-center mb-4">
      <h1 class="title">{{ title }}</h1>
      <p class="subtitle">{{ subtitle }}</p>
    </header>

    <div class="container">
      <div class="form-container glass-panel mx-auto">
        <h2 class="form-title text-center mb-3">Write to us</h2>

        <!-- Error Message -->
        <div v-if="formError" class="alert alert-danger mb-3 animate-fade-in">
          <div class="alert-header">
            <strong>Form Error</strong>
            <button @click="formError = false" class="btn-close">&times;</button>
          </div>
          <p>Please fill in your Name, Email & Message (mandatory fields).</p>
        </div>

        <!-- Form -->
        <form v-if="showForm" @submit.prevent="submitPost" class="contact-form">
          <div v-for="(formContent, index) in formContents" :key="index" class="form-group mb-2">
            <label class="form-label">{{ formContent }}</label>
            <input
              class="input"
              type="text"
              v-model="userInput[formContent]"
              :placeholder="'Enter your ' + formContent + '...'"
            />
          </div>

          <div class="form-group mb-3">
            <label class="form-label">Message</label>
            <textarea
              class="textarea"
              v-model="userInput.Message"
              rows="6"
              placeholder="Enter your message"
            ></textarea>
          </div>

          <div class="form-actions">
            <button type="submit" class="btn btn-primary">
              <i class="mdi mdi-send"></i> Submit
            </button>
            <button type="button" @click="clearPost" class="btn btn-secondary">
              <i class="mdi mdi-refresh"></i> Clear
            </button>
          </div>
        </form>

        <!-- Success Message -->
        <div v-else class="success-message text-center animate-fade-in">
          <i class="mdi mdi-thumb-up text-accent-secondary" style="font-size: 4rem;"></i>
          <h3 class="mt-3">Thanks for your message!</h3>
          <p class="text-muted mt-2">Our team will reach back in 2 business days.</p>
          <button @click="resetForm" class="btn btn-primary mt-3">Send Another Message</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ContactPage",
  data() {
    return {
      title: "Send us some love !!!",
      subtitle: "We love to hear your feedback, why don't you fill up the below form...",
      formContents: ["Name", "Email", "Phone Number", "Company", "Subject"],
      orgUserInput: {
        Name: "",
        Email: "",
        "Phone Number": "",
        Company: "",
        Subject: "",
        Message: "",
      },
      userInput: {
        Name: "",
        Email: "",
        "Phone Number": "",
        Company: "",
        Subject: "",
        Message: "",
      },
      formError: false,
      showForm: true,
    };
  },
  methods: {
    clearPost() {
      this.userInput = { ...this.orgUserInput };
    },
    resetForm() {
      this.clearPost();
      this.showForm = true;
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
            userId: 1,
          })
          .then(() => {
            this.showForm = false;
            this.clearPost();
          })
          .catch((err) => console.error(err));
      }
    },
  },
};
</script>

<style scoped>
.contact-page {
  padding: var(--space-xl) 0;
}

.mx-auto {
  margin-left: auto;
  margin-right: auto;
}

.form-container {
  max-width: 600px;
}

.form-title {
  border-bottom: 1px solid var(--glass-border);
  padding-bottom: var(--space-md);
  margin-bottom: var(--space-lg);
}

.form-label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: var(--text-secondary);
}

.form-actions {
  display: flex;
  gap: var(--space-md);
}

/* Alerts */
.alert {
  padding: var(--space-md);
  border-radius: 8px;
  border-left: 4px solid transparent;
}

.alert-danger {
  background: rgba(255, 42, 95, 0.1);
  border-left-color: var(--accent-danger);
  color: #ffb3c6;
}

.alert-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
}

.btn-close {
  background: none;
  border: none;
  color: inherit;
  font-size: 1.5rem;
  cursor: pointer;
}

.success-message {
  padding: var(--space-xl) 0;
}

.text-accent-secondary {
  color: var(--accent-secondary);
}

.text-muted {
  color: var(--text-secondary);
}

/* Helpers */
.mt-2 { margin-top: var(--space-md); }
.mt-3 { margin-top: var(--space-lg); }
</style>
