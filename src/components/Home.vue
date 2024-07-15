<template>
  <div>
    <section class="hero is-info is-fullheight">
      <div class="hero-body">
        <div class="container has-text-centered">
          <figure>
            <img :src="logo" width="50%" height="20%" />
          </figure>

          <div class="column is-6 is-offset-3">
            <h1 class="title white">
              {{ title }}
            </h1>
            <h2 class="subtitle">
              {{ subtitle1 }}
              <br />
              {{ subtitle2 }}
            </h2>
            <div class="is-centered">
              <a :href="bulmaWebsite" class="button is-primary">Visit Bulma</a>
              <a :href="vueWebsite" class="button is-danger">Visit VueJS</a>
              <a :href="repoLink" class="button is-info">Visit Repository</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import logo from "./../assets/logo-white.png";

const title = "Hello Stranger !!!!";
const subtitle1 = "A demo website based on frameworks Bulma (CSS) and Vue JS (JS)";
const subtitle2 = "Feel free to navigate around and checkout the page";
const bulmaWebsite = "https://bulma.io";
const vueWebsite = "https://vuejs.org/";
const repoLink = "https://github.com/faisaltheparttimecoder/bulma-vuejs-demo-website";
</script>

<style scoped>
.hero.is-info {
  background: linear-gradient(
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5)
    ),
    url("https://unsplash.it/1200/900?random") no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
</style>
