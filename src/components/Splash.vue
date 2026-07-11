<template>
  <div class="web-splash">
    <div class="splash-overlay">
      <div class="splash-content">
        <div class="icon-circle">
          <i class="mdi mdi-home-outline"></i>
        </div>
        
        <h1 class="brand-title">Digital Majlis</h1>
        <p class="brand-subtitle">Move from the screen to the table.</p>
        
        <div class="decorative-dots">
          <span></span><span></span><span></span><span></span><span></span>
        </div>
      </div>
      
      <div class="splash-footer">
        <p class="greeting-text">MARHABA</p>
        <div class="footer-line"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';

export default {
  name: "WebSplash",
  setup() {
    const router = useRouter();

    onMounted(() => {
      // Simulate loading time then go to desktop dashboard
      setTimeout(() => {
        router.push('/');
      }, 3500);
    });

    return {}
  }
};
</script>

<style scoped>
.web-splash {
  position: relative;
  width: 100vw;
  height: 100vh;
  background-image: url('https://images.unsplash.com/photo-1542314831-c6a4d14eff50?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80');
  background-size: cover;
  background-position: center;
  overflow: hidden;
}

.splash-overlay {
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background-color: rgba(0, 0, 0, 0.65); /* Dark overlay */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 4rem 2rem;
  color: white;
  text-align: center;
}

.splash-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.icon-circle {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: rgba(181, 126, 52, 0.4);
  border: 1px solid rgba(244, 164, 28, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  color: #F5EAD4;
  margin-bottom: 1.5rem;
  box-shadow: 0 4px 20px rgba(0,0,0,0.3);
}

.brand-title {
  font-size: 3.5rem;
  font-weight: 600;
  margin: 0 0 0.5rem 0;
  letter-spacing: -0.5px;
  color: #F5EAD4;
}

.brand-subtitle {
  font-size: 1.25rem;
  color: rgba(255,255,255,0.9);
  margin: 0 0 2rem 0;
  letter-spacing: 0.5px;
}

.decorative-dots {
  display: flex;
  gap: 6px;
  opacity: 0.3;
}

.decorative-dots span {
  width: 4px;
  height: 4px;
  background-color: white;
  border-radius: 50%;
}

.splash-footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.greeting-text {
  font-size: 0.85rem;
  letter-spacing: 4px;
  color: rgba(245, 234, 212, 0.8);
  margin: 0;
  text-transform: uppercase;
}

.footer-line {
  width: 150px;
  height: 1px;
  background: linear-gradient(90deg, transparent, #F4A41C, transparent);
}
</style>
