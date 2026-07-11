<template>
  <div class="mobile-layout">
    <!-- Top Header (hidden in Icebreakers dark theme if needed, but handled globally here for most screens) -->
    <header class="mobile-header" v-if="!isDarkTheme && !isOnboarding">
      <div class="header-left">
        <img src="https://i.pravatar.cc/150?img=32" alt="Profile" class="header-avatar" />
        <h2 class="brand-text">Digital Majlis</h2>
      </div>
      <div class="header-right">
        <span class="location-text">Casablanca</span>
        <i class="mdi mdi-map-marker-outline text-danger fs-5"></i>
      </div>
    </header>

    <header class="mobile-header dark-theme" v-if="isDarkTheme">
      <div class="header-left">
        <img src="https://i.pravatar.cc/150?img=32" alt="Profile" class="header-avatar" />
        <h2 class="brand-text text-white">Majlis</h2>
      </div>
      <div class="header-right">
        <div class="icon-circle">
          <i class="mdi mdi-map-marker-outline text-white"></i>
        </div>
      </div>
    </header>

    <main class="mobile-content" :class="{ 'bg-dark': isDarkTheme, 'no-bottom-nav': isOnboarding }">
      <router-view v-slot="{ Component }">
        <transition name="mobile-fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>

    <!-- Bottom Navigation Bar -->
    <nav class="bottom-nav" :class="{ 'dark-nav': isDarkTheme }" v-if="!isOnboarding">
      <router-link to="/mobile/home" class="nav-item" active-class="active">
        <i class="mdi mdi-home-outline"></i>
        <span>Home</span>
      </router-link>
      <router-link to="/mobile/table" class="nav-item" active-class="active">
        <i class="mdi mdi-silverware-fork-knife"></i>
        <span>The Table</span>
      </router-link>
      <router-link to="/mobile/icebreakers" class="nav-item" active-class="active">
        <i class="mdi mdi-chat-outline"></i>
        <span>Icebreakers</span>
      </router-link>
      <router-link to="/mobile/connect" class="nav-item" active-class="active">
        <i class="mdi mdi-account-group-outline"></i>
        <span>Connect</span>
      </router-link>
    </nav>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

export default {
  name: "MobileLayout",
  setup() {
    const route = useRoute();
    
    const isDarkTheme = computed(() => {
      return route.path.includes('icebreakers');
    });

    const isOnboarding = computed(() => {
      return route.path.includes('onboarding');
    });

    return {
      isDarkTheme,
      isOnboarding
    }
  }
};
</script>

<style scoped>
.mobile-layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  max-width: 480px; /* Constrain for desktop viewing */
  margin: 0 auto;
  background-color: #F8F5EF; /* Beige background */
  position: relative;
  overflow: hidden;
  box-shadow: 0 0 20px rgba(0,0,0,0.1); /* For desktop preview */
}

/* Header */
.mobile-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.25rem 1.5rem;
  background-color: transparent;
  z-index: 10;
}

.mobile-header.dark-theme {
  background-color: #3A3935;
  border-bottom: 1px solid rgba(255,255,255,0.05);
}

.header-left {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.header-avatar {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  object-fit: cover;
}

.brand-text {
  font-size: 1.25rem;
  margin: 0;
  color: #9C3311;
  font-weight: 600;
}

.header-right {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.location-text {
  font-size: 0.95rem;
  color: #9C3311;
  font-weight: 600;
}

.text-danger {
  color: #9C3311;
}
.text-white {
  color: #FFFFFF !important;
}

.icon-circle {
  width: 36px;
  height: 36px;
  background-color: rgba(255,255,255,0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Main Content */
.mobile-content {
  flex: 1;
  overflow-y: auto;
  padding: 0 1.5rem 1.5rem 1.5rem; /* Padding bottom for content above nav */
}

.mobile-content.bg-dark {
  background-color: #3A3935;
  padding: 1.5rem;
}

.mobile-content.no-bottom-nav {
  padding-bottom: 0;
}

/* Hide scrollbar for clean look */
.mobile-content::-webkit-scrollbar {
  display: none;
}
.mobile-content {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

/* Bottom Nav */
.bottom-nav {
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #1E2A5E; /* Dark blue background */
  height: 80px; /* Fixed height for the bottom nav */
  padding-bottom: env(safe-area-inset-bottom);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  flex-shrink: 0;
}

.bottom-nav.dark-nav {
  background-color: #2D2C28; /* Darker charcoal for icebreakers */
}

.nav-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #A0A5C0; /* Muted blue/grey */
  text-decoration: none;
  font-size: 0.75rem;
  font-weight: 600;
  gap: 0.25rem;
  padding: 0.5rem 1rem;
  border-radius: 12px;
  transition: all 0.2s;
  height: 60px;
  min-width: 70px;
}

.dark-nav .nav-item {
  color: #888;
}

.nav-item i {
  font-size: 1.5rem;
  transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.nav-item.active {
  background-color: #F4A41C; /* Yellow active state */
  color: #111;
  transform: translateY(-5px);
  box-shadow: 0 4px 10px rgba(244, 164, 28, 0.3);
}

.nav-item.active i {
  transform: scale(1.15);
}

.nav-item:active {
  transform: scale(0.92);
}

/* Page Transitions for Mobile */
.mobile-fade-enter-active,
.mobile-fade-leave-active {
  transition: opacity 0.25s ease, transform 0.25s cubic-bezier(0.2, 0.8, 0.2, 1);
}

.mobile-fade-enter-from {
  opacity: 0;
  transform: scale(0.97) translateY(10px);
}

.mobile-fade-leave-to {
  opacity: 0;
  transform: scale(1.03) translateY(-10px);
}
</style>
