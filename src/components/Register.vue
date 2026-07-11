<template>
  <div class="register-page">
    
    <!-- Left Hero Section -->
    <div class="register-hero">
      <div class="hero-overlay"></div>
      
      <div class="hero-content">
        <div class="badge-tag">
          <i class="mdi mdi-silverware-fork-knife"></i> Traditional Hospitality, Modern Connections
        </div>
        <h1 class="hero-title">Where Every Meal is a Story.</h1>
        <p class="hero-subtitle">Join an exclusive community of social diners and cultural enthusiasts across the globe.</p>
      </div>

      <!-- Colorful bottom stripe -->
      <div class="bottom-stripe"></div>
    </div>

    <!-- Right Form Section -->
    <div class="register-form-container">
      
      <div class="form-card">
        <h2 class="form-title">Join the Majlis</h2>
        <p class="form-subtitle">Step into a world of curated dining experiences.</p>

        <div class="step-indicator">
          <span class="step active"></span>
          <span class="step"></span>
        </div>

        <form @submit.prevent="handleRegister" class="register-form">
          
          <div class="form-group">
            <label>Full Name</label>
            <input type="text" placeholder="Anas Al-Mansoori" required />
          </div>

          <div class="form-group">
            <label>Email Address</label>
            <input type="email" placeholder="anas@example.com" required />
          </div>

          <div class="form-group">
            <label>Phone Number</label>
            <div class="phone-input">
              <span class="country-code">+212</span>
              <div class="divider-vertical"></div>
              <input type="tel" placeholder="600-000000" required />
            </div>
          </div>

          <button type="submit" class="btn-primary w-100">
            Continue <i class="mdi mdi-arrow-right"></i>
          </button>
        </form>

        <div class="divider"></div>

        <p class="login-prompt">
          Already a member? <router-link to="/login" class="login-link">Sign in</router-link>
        </p>
      </div>

      <p class="copyright">DIGITAL MAJLIS © 2024</p>
      
    </div>

  </div>
</template>

<script>
import { useRouter } from 'vue-router';

export default {
  name: "Register",
  setup() {
    const router = useRouter();

    const handleRegister = () => {
      // Navigate to next step or dashboard
      router.push('/dashboard');
    };

    return {
      handleRegister
    }
  }
};
</script>

<style scoped>
.register-page {
  display: flex;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
}

/* --- Left Hero Section --- */
.register-hero {
  flex: 1.2; /* Slightly wider than the form section */
  position: relative;
  /* Using a nice dining scene for the background */
  background-image: url('https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80');
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 4rem;
  color: white;
}

.hero-overlay {
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  /* Dark gradient from bottom up */
  background: linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.1) 100%);
  z-index: 1;
}

.hero-content {
  position: relative;
  z-index: 2;
  max-width: 600px;
  margin-bottom: 2rem;
}

.badge-tag {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background-color: #F4A41C;
  color: #111;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
}

.hero-title {
  font-size: 4rem;
  font-weight: 700;
  line-height: 1.1;
  margin: 0 0 1.5rem 0;
  letter-spacing: -1px;
}

.hero-subtitle {
  font-size: 1.25rem;
  line-height: 1.6;
  color: rgba(255,255,255,0.9);
  margin: 0;
}

.bottom-stripe {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 8px;
  background: linear-gradient(to right, #2A3B69 25%, #9C3311 25% 50%, #F4A41C 50% 75%, #4A4A48 75%);
  z-index: 3;
}

/* --- Right Form Section --- */
.register-form-container {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  background-color: #FAF8F2;
  padding: 2rem;
}

/* Geometric pattern overlay */
.register-form-container::before {
  content: "";
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background-image: url('data:image/svg+xml;utf8,<svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M20 0l20 10v20L20 40 0 30V10z" fill="none" stroke="rgba(0,0,0,0.03)" stroke-width="1"/></svg>');
  background-size: 40px 40px;
  z-index: 1;
}

.form-card {
  position: relative;
  z-index: 2;
  background-color: #FFFFFF;
  padding: 3rem;
  border-radius: 24px;
  width: 100%;
  max-width: 480px;
  box-shadow: 0 10px 40px rgba(0,0,0,0.05);
}

.form-title {
  font-size: 2rem;
  font-weight: 600;
  color: #111;
  margin: 0 0 0.5rem 0;
  letter-spacing: -0.5px;
}

.form-subtitle {
  font-size: 1rem;
  color: #555;
  margin: 0 0 2rem 0;
}

.step-indicator {
  display: flex;
  gap: 6px;
  margin-bottom: 2.5rem;
}

.step {
  height: 6px;
  width: 24px;
  background-color: #EAE6DB;
  border-radius: 4px;
}

.step.active {
  background-color: #9C3311;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  font-size: 0.85rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 0.5rem;
}

.form-group input[type="text"],
.form-group input[type="email"] {
  width: 100%;
  padding: 0.85rem 1rem;
  border: 1px solid #D5D0C5;
  border-radius: 12px;
  font-size: 0.95rem;
  color: #333;
  font-family: inherit;
  transition: border-color 0.2s;
}

.form-group input:focus {
  outline: none;
  border-color: #9C3311;
}

.phone-input {
  display: flex;
  align-items: center;
  border: 1px solid #D5D0C5;
  border-radius: 12px;
  padding: 0.85rem 1rem;
  background-color: white;
  transition: border-color 0.2s;
}

.phone-input:focus-within {
  border-color: #9C3311;
}

.country-code {
  font-size: 0.95rem;
  color: #333;
  font-weight: 500;
}

.divider-vertical {
  width: 1px;
  height: 20px;
  background-color: #D5D0C5;
  margin: 0 1rem;
}

.phone-input input {
  flex: 1;
  border: none;
  font-size: 0.95rem;
  color: #333;
  font-family: inherit;
}

.phone-input input:focus {
  outline: none;
}

/* Button */
.btn-primary {
  background-color: #9C3311;
  color: white;
  border: none;
  padding: 1rem;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  cursor: pointer;
  margin-top: 1rem;
  transition: background-color 0.2s;
}

.btn-primary:hover {
  background-color: #7D290E;
}

.w-100 {
  width: 100%;
}

/* Divider */
.divider {
  height: 1px;
  background-color: #EAE6DB;
  margin: 2.5rem 0;
}

/* Login prompt */
.login-prompt {
  text-align: center;
  font-size: 0.95rem;
  color: #555;
  margin: 0;
}

.login-link {
  color: #9C3311;
  text-decoration: none;
  font-weight: 700;
}

.copyright {
  position: absolute;
  bottom: 2rem;
  font-size: 0.75rem;
  color: #A0A5C0;
  letter-spacing: 2px;
  margin: 0;
  font-weight: 600;
  z-index: 2;
}

/* Responsive */
@media (max-width: 992px) {
  .register-hero {
    display: none;
  }
}
</style>
