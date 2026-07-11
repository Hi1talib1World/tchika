<template>
  <div class="login-page">
    
    <!-- Left Hero Section -->
    <div class="login-hero">
      <div class="hero-overlay"></div>
      
      <div class="hero-header">
        <i class="mdi mdi-silverware-fork-knife text-gold"></i>
        <span class="brand-name">Digital Majlis</span>
      </div>

      <div class="hero-content">
        <h1 class="hero-title">Authentic<br>Gatherings.</h1>
        <p class="hero-subtitle">Experience the timeless rhythm of Moroccan hospitality, redefined for the modern connoisseur.</p>
      </div>

      <div class="hero-footer">
        <div class="footer-line"></div>
        <span class="footer-text">THE MODERN RIAD</span>
      </div>
    </div>

    <!-- Right Form Section -->
    <div class="login-form-container">
      <div class="form-wrapper">
        <h2 class="form-title">Marhaba back</h2>
        <p class="form-subtitle">Enter your details to rejoin the table.</p>

        <form @submit.prevent="handleLogin" class="login-form">
          
          <div class="form-group">
            <label>Email Address</label>
            <div class="input-with-icon">
              <i class="mdi mdi-email-outline"></i>
              <input type="email" placeholder="name@example.com" required />
            </div>
          </div>

          <div class="form-group">
            <div class="label-row">
              <label>Password</label>
              <a href="#" class="forgot-link">Forgot password?</a>
            </div>
            <div class="input-with-icon">
              <i class="mdi mdi-lock-outline"></i>
              <input type="password" placeholder="••••••••" required />
            </div>
          </div>

          <div class="remember-row">
            <label class="checkbox-container">
              <input type="checkbox" />
              <span class="checkmark"></span>
              <span class="remember-text">Remember me for 30 days</span>
            </label>
          </div>

          <button type="submit" class="btn-primary w-100">
            Sign In <i class="mdi mdi-arrow-right"></i>
          </button>
        </form>

        <div class="divider">
          <span>OR JOIN WITH</span>
        </div>

        <div class="social-logins">
          <button class="btn-social">
            <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google" class="social-icon" />
            Google
          </button>
          <button class="btn-social">
            <i class="mdi mdi-apple text-dark"></i>
            Apple
          </button>
        </div>

        <p class="signup-prompt">
          New to the majlis? <a href="#" class="signup-link">Create an account</a>
        </p>

      </div>
    </div>

  </div>
</template>

<script>
import { useRouter } from 'vue-router';

export default {
  name: "Login",
  setup() {
    const router = useRouter();

    const handleLogin = () => {
      // Simulate login and go to dashboard
      router.push('/');
    };

    return {
      handleLogin
    }
  }
};
</script>

<style scoped>
.login-page {
  display: flex;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  background-color: #FFFFFF;
}

/* --- Left Hero Section --- */
.login-hero {
  flex: 1;
  position: relative;
  background-image: url('https://images.unsplash.com/photo-1542314831-c6a4d14eff50?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80');
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 4rem;
  color: white;
}

.hero-overlay {
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background: linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.1) 40%, rgba(0,0,0,0.6) 100%);
  z-index: 1;
}

.hero-header, .hero-content, .hero-footer {
  position: relative;
  z-index: 2;
}

.hero-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.text-gold {
  color: #F4A41C;
  font-size: 1.5rem;
}

.brand-name {
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: -0.5px;
}

.hero-content {
  max-width: 500px;
}

.hero-title {
  font-size: 4.5rem;
  font-weight: 700;
  line-height: 1.1;
  margin: 0 0 1.5rem 0;
  letter-spacing: -1px;
}

.hero-subtitle {
  font-size: 1.1rem;
  line-height: 1.6;
  color: rgba(255,255,255,0.9);
  margin: 0;
}

.hero-footer {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.footer-line {
  width: 40px;
  height: 2px;
  background-color: #F4A41C;
}

.footer-text {
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 2px;
  color: #F4A41C;
}

/* --- Right Form Section --- */
.login-form-container {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem;
  background-color: #FFFFFF;
}

.form-wrapper {
  width: 100%;
  max-width: 420px;
}

.form-title {
  font-size: 2.25rem;
  font-weight: 600;
  color: #111;
  margin: 0 0 0.5rem 0;
  letter-spacing: -0.5px;
}

.form-subtitle {
  font-size: 1rem;
  color: #555;
  margin: 0 0 2.5rem 0;
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

.label-row {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
}

.forgot-link {
  font-size: 0.75rem;
  color: #9C3311;
  text-decoration: none;
  font-weight: 600;
}

.input-with-icon {
  position: relative;
  display: flex;
  align-items: center;
}

.input-with-icon i {
  position: absolute;
  left: 1rem;
  color: #888;
  font-size: 1.25rem;
}

.input-with-icon input {
  width: 100%;
  padding: 0.85rem 1rem 0.85rem 3rem;
  border: 1px solid #E0E0E0;
  border-radius: 8px;
  font-size: 0.95rem;
  color: #333;
  font-family: inherit;
  transition: border-color 0.2s;
}

.input-with-icon input:focus {
  outline: none;
  border-color: #9C3311;
}

/* Checkbox */
.remember-row {
  margin-bottom: 2rem;
}

.checkbox-container {
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;
  user-select: none;
}

.checkbox-container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.checkmark {
  height: 18px;
  width: 18px;
  border: 1px solid #D5D0C5;
  border-radius: 4px;
  background-color: white;
  margin-right: 0.75rem;
  position: relative;
}

.checkbox-container input:checked ~ .checkmark {
  background-color: #9C3311;
  border-color: #9C3311;
}

.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

.checkbox-container input:checked ~ .checkmark:after {
  display: block;
}

.checkbox-container .checkmark:after {
  left: 5px;
  top: 2px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}

.remember-text {
  font-size: 0.85rem;
  color: #333;
  font-weight: 500;
}

/* Buttons */
.btn-primary {
  background-color: #9C3311;
  color: white;
  border: none;
  padding: 1rem;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  cursor: pointer;
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
  display: flex;
  align-items: center;
  text-align: center;
  margin: 2rem 0;
}

.divider::before,
.divider::after {
  content: '';
  flex: 1;
  border-bottom: 1px solid #EAE6DB;
}

.divider span {
  padding: 0 1rem;
  color: #999;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 1px;
}

/* Social Buttons */
.social-logins {
  display: flex;
  gap: 1rem;
  margin-bottom: 3rem;
}

.btn-social {
  flex: 1;
  background-color: white;
  border: 1px solid #E0E0E0;
  padding: 0.85rem;
  border-radius: 8px;
  font-size: 0.95rem;
  font-weight: 600;
  color: #333;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  cursor: pointer;
  transition: background-color 0.2s;
}

.btn-social:hover {
  background-color: #F9F9F9;
}

.social-icon {
  width: 20px;
  height: 20px;
}

.text-dark {
  color: #111;
  font-size: 1.25rem;
}

/* Signup prompt */
.signup-prompt {
  text-align: center;
  font-size: 0.9rem;
  color: #555;
  margin: 0;
}

.signup-link {
  color: #9C3311;
  text-decoration: none;
  font-weight: 600;
}

/* Responsive for smaller desktop / tablet */
@media (max-width: 992px) {
  .login-hero {
    display: none; /* Hide hero on small screens */
  }
}
</style>
