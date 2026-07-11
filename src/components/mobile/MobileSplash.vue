<template>
  <div class="splash-screen">
    <div class="splash-content">
      <div class="logo-container">
        <div class="arch-logo">
          <i class="mdi mdi-star text-white star-icon"></i>
        </div>
      </div>
      
      <h1 class="brand-title">Digital Majlis</h1>
      <p class="brand-tagline">Where Tradition Meets Connection</p>
      
      <div class="loading-section">
        <div class="circle-outline"></div>
        <div class="progress-container">
          <div class="progress-bar"></div>
        </div>
        <p class="loading-text">SETTING THE TABLE...</p>
      </div>
    </div>
    
    <div class="splash-footer">
      <p>Crafted with Moroccan hospitality</p>
      <div class="dots">
        <span></span><span class="active"></span><span></span>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';

export default {
  name: "MobileSplash",
  setup() {
    const router = useRouter();

    onMounted(() => {
      // Simulate loading time then go to onboarding
      setTimeout(() => {
        router.push('/mobile/onboarding');
      }, 3000);
    });

    return {}
  }
};
</script>

<style scoped>
.splash-screen {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  width: 100%;
  max-width: 480px;
  margin: 0 auto;
  /* Gradient matching the mockup */
  background: linear-gradient(160deg, #2A3B69 0%, #4B384A 30%, #87362B 70%, #B84717 100%);
  color: white;
  text-align: center;
  position: relative;
  overflow: hidden;
}

/* Subtle geometric pattern overlay - simulated with CSS radial gradients */
.splash-screen::before {
  content: "";
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background-image: 
    radial-gradient(rgba(255,255,255,0.03) 2px, transparent 2px),
    radial-gradient(rgba(255,255,255,0.03) 2px, transparent 2px);
  background-size: 30px 30px;
  background-position: 0 0, 15px 15px;
  pointer-events: none;
  z-index: 1;
}

.splash-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 2;
  padding: 2rem;
}

.logo-container {
  margin-bottom: 2rem;
}

.arch-logo {
  width: 120px;
  height: 150px;
  border: 20px solid #F4A41C;
  border-bottom: 20px solid #F4A41C;
  border-top-left-radius: 60px;
  border-top-right-radius: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 20px; /* Offset for visual balance */
}

.star-icon {
  font-size: 3rem;
}

.text-white {
  color: white;
}

.brand-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin: 0 0 0.5rem 0;
  letter-spacing: -0.5px;
}

.brand-tagline {
  font-size: 1rem;
  color: rgba(255,255,255,0.9);
  margin: 0 0 4rem 0;
  letter-spacing: 0.5px;
}

.loading-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 250px;
}

.circle-outline {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 1px solid rgba(255,255,255,0.15);
  margin-bottom: 2rem;
}

.progress-container {
  width: 100%;
  height: 2px;
  background-color: rgba(255,255,255,0.2);
  margin-bottom: 1.5rem;
  position: relative;
}

.progress-bar {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 40%; /* Partially filled as per mockup */
  background-color: #F4A41C;
  animation: load 3s ease-in-out forwards;
}

@keyframes load {
  0% { width: 0%; }
  100% { width: 100%; }
}

.loading-text {
  font-size: 0.75rem;
  letter-spacing: 2px;
  color: rgba(255,255,255,0.8);
  margin: 0;
}

.splash-footer {
  padding: 2rem;
  z-index: 2;
}

.splash-footer p {
  font-size: 0.8rem;
  font-style: italic;
  color: rgba(255,255,255,0.7);
  margin: 0 0 0.5rem 0;
}

.dots {
  display: flex;
  justify-content: center;
  gap: 4px;
}

.dots span {
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background-color: rgba(255,255,255,0.3);
}

.dots span.active {
  background-color: #F4A41C;
}
</style>
