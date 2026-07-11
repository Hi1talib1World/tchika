<template>
  <div class="onboarding-page">
    <div class="top-nav">
      <button class="back-btn"><i class="mdi mdi-arrow-left"></i></button>
      <div class="pagination">
        <span class="dot active"></span>
        <span class="dot active-red"></span>
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
      </div>
    </div>

    <div class="header-section">
      <h1>Curate your vibe</h1>
      <p>Help us tailor your Digital Majlis experience.</p>
    </div>

    <h2 class="question-text">Mid-afternoon ritual: What are you sipping?</h2>

    <div class="options-list">
      <label class="option-card" :class="{ selected: selectedOption === 'coffee' }">
        <div class="option-icon bg-beige">
          <i class="mdi mdi-coffee-outline text-danger"></i>
        </div>
        <div class="option-content">
          <h4>Freshly brewed coffee</h4>
          <p>Rich aromas, modern pulse.</p>
        </div>
        <div class="radio-circle" :class="{ checked: selectedOption === 'coffee' }"></div>
        <input type="radio" value="coffee" v-model="selectedOption" class="hidden-radio" />
      </label>

      <label class="option-card" :class="{ selected: selectedOption === 'tea' }">
        <div class="option-icon bg-beige">
          <i class="mdi mdi-cup-outline text-danger"></i>
        </div>
        <div class="option-content">
          <h4>Traditional Mint Tea</h4>
          <p>The soul of Moroccan hospitality.</p>
        </div>
        <div class="radio-circle" :class="{ checked: selectedOption === 'tea' }"></div>
        <input type="radio" value="tea" v-model="selectedOption" class="hidden-radio" />
      </label>

      <label class="option-card" :class="{ selected: selectedOption === 'water' }">
        <div class="option-icon bg-beige">
          <i class="mdi mdi-glass-tulip text-danger"></i>
        </div>
        <div class="option-content">
          <h4>Pure Still Water</h4>
          <p>Simple, refreshing, clear.</p>
        </div>
        <div class="radio-circle" :class="{ checked: selectedOption === 'water' }"></div>
        <input type="radio" value="water" v-model="selectedOption" class="hidden-radio" />
      </label>
    </div>

    <div class="image-card">
      <img src="https://images.unsplash.com/photo-1539578619623-2895f32ea07b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Moroccan Tea Setup" class="card-img" />
      <div class="img-overlay">
        <p>Atmosphere is everything.</p>
      </div>
    </div>

    <div class="footer-actions">
      <button class="btn-warning-full" @click="goToHome">
        Next Step <i class="mdi mdi-chevron-right"></i>
      </button>
      <p class="step-indicator">STEP 2 OF 5</p>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
  name: "MobileOnboarding",
  setup() {
    const router = useRouter();
    const selectedOption = ref('');

    const goToHome = () => {
      router.push('/mobile/home');
    };

    return {
      selectedOption,
      goToHome
    }
  }
};
</script>

<style scoped>
.onboarding-page {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 1.5rem;
}

.top-nav {
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  position: relative;
}

.back-btn {
  background: white;
  border: none;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  cursor: pointer;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
}

.pagination {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 8px;
}

.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #E0E0E0;
}

.dot.active {
  background-color: #F4A41C;
}

.dot.active-red {
  background-color: #9C3311;
}

.header-section {
  margin-bottom: 2.5rem;
}

.header-section h1 {
  font-size: 2rem;
  color: #111;
  margin: 0 0 0.5rem 0;
}

.header-section p {
  font-size: 1rem;
  color: #666;
  margin: 0;
}

.question-text {
  font-size: 1.25rem;
  color: #9C3311;
  font-weight: 600;
  margin: 0 0 1.5rem 0;
  line-height: 1.4;
}

.options-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
}

.option-card {
  display: flex;
  align-items: center;
  padding: 1.25rem;
  background-color: #FFFFFF;
  border-radius: 16px;
  cursor: pointer;
  position: relative;
  transition: all 0.2s;
  box-shadow: 0 2px 10px rgba(0,0,0,0.02);
}

.option-card.selected {
  border: 1px solid #9C3311;
  box-shadow: 0 4px 15px rgba(156,51,17,0.1);
}

.option-icon {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  margin-right: 1rem;
}

.bg-beige {
  background-color: #F5F3ED;
}

.text-danger {
  color: #9C3311;
}

.option-content {
  flex: 1;
}

.option-content h4 {
  margin: 0 0 0.25rem 0;
  font-size: 1rem;
  color: #111;
}

.option-content p {
  margin: 0;
  font-size: 0.85rem;
  color: #666;
}

.radio-circle {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 2px solid #D5D0C5;
  position: relative;
}

.radio-circle.checked {
  border-color: #9C3311;
}

.radio-circle.checked::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: #9C3311;
}

.hidden-radio {
  display: none;
}

.image-card {
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  height: 140px;
  margin-bottom: 2rem;
}

.card-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.img-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 2rem 1.25rem 1.25rem 1.25rem;
  background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
  color: white;
}

.img-overlay p {
  margin: 0;
  font-weight: 600;
  font-size: 1rem;
}

.footer-actions {
  margin-top: auto;
  text-align: center;
}

.btn-warning-full {
  width: 100%;
  background-color: #F4A41C;
  color: #111;
  border: none;
  padding: 1.25rem;
  border-radius: 12px;
  font-weight: 600;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  cursor: pointer;
  margin-bottom: 1.5rem;
}

.step-indicator {
  font-size: 0.75rem;
  color: #999;
  letter-spacing: 1px;
  font-weight: 600;
}
</style>
