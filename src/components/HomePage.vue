<template>
  <div class="home-container animate-fade-in">
    <section class="hero-section">
      <div class="container text-center">
        <figure class="hero-logo-container">
          <img :src="logo" alt="Tchika Logo" class="hero-logo" />
        </figure>

        <div class="hero-content glass-panel">
          <h1 class="title">
            {{ title }}
          </h1>
          <h2 class="subtitle">
            {{ subtitle1 }}
            <br />
            {{ subtitle2 }}
          </h2>

          <div class="actions">
            <a :href="bulmaWebsite" target="_blank" class="btn btn-secondary">
              <i class="mdi mdi-language-css3"></i> Bulma (Removed)
            </a>
            <a :href="vueWebsite" target="_blank" class="btn btn-primary">
              <i class="mdi mdi-vuejs"></i> VueJS
            </a>
            <a :href="repoLink" target="_blank" class="btn btn-danger">
              <i class="mdi mdi-github"></i> Repository
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import logo from "./../assets/logo.png";

const title = "Hello Stranger !!!!";
const subtitle1 = "A stunning modern UI built with Vue 3 and Vanilla CSS.";
const subtitle2 = "Glassmorphism, animations, and dark mode vibes.";
const bulmaWebsite = "https://bulma.io";
const vueWebsite = "https://vuejs.org/";
const repoLink = "https://github.com/Hi1talib1World/tchika";
</script>

<style scoped>
.home-container {
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-section {
  width: 100%;
  padding: var(--space-xl) 0;
  background:
    radial-gradient(circle at 15% 50%, rgba(138, 43, 226, 0.15), transparent 40%),
    radial-gradient(circle at 85% 30%, rgba(0, 210, 255, 0.15), transparent 40%);
}

.hero-logo-container {
  margin-bottom: var(--space-lg);
}

.hero-logo {
  max-width: 250px;
  filter: drop-shadow(0 0 20px rgba(138, 43, 226, 0.4));
  animation: float 6s ease-in-out infinite;
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
  padding: var(--space-xl) var(--space-lg);
  position: relative;
  overflow: hidden;
}

/* Subtle glow behind the panel */
.hero-content::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(255,255,255,0.03) 0%, transparent 60%);
  z-index: -1;
  pointer-events: none;
}

.actions {
  display: flex;
  gap: var(--space-md);
  justify-content: center;
  flex-wrap: wrap;
  margin-top: var(--space-lg);
}

.actions .mdi {
  margin-right: 8px;
  font-size: 1.2rem;
  vertical-align: middle;
}

@keyframes float {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-15px); }
  100% { transform: translateY(0px); }
}
</style>
