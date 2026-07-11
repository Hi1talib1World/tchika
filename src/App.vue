<template>
  <div id="app" :class="{ 'app-layout': !isFullScreenRoute }">
    <Sidebar v-if="!isFullScreenRoute" />
    <main :class="{ 'main-content': !isFullScreenRoute, 'full-screen-content': isFullScreenRoute }">
      <router-view v-slot="{ Component }">
        <transition name="page-fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
      <AppFooter v-if="!isFullScreenRoute" />
    </main>
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar.vue";
import AppFooter from "@/components/Footer.vue";

export default {
  name: "App",
  components: {
    Sidebar,
    AppFooter
  },
  computed: {
    isFullScreenRoute() {
      return this.$route.path.startsWith('/mobile') || 
             this.$route.path === '/splash' || 
             this.$route.path === '/login' ||
             this.$route.path === '/register';
    }
  }
};
</script>

<style>
/* Global App Layout */
.app-layout {
  display: flex;
  min-height: 100vh;
  background-color: #FAF8F2; /* Main app background */
}

.main-content {
  flex: 1;
  margin-left: 250px; /* Width of the sidebar */
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content > div:first-child {
  flex: 1;
  padding: 2.5rem 3rem; /* Spacing for the page content */
}

.full-screen-content {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* --- Global Animations & Life --- */

/* Page Transitions */
.page-fade-enter-active,
.page-fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.page-fade-enter-from {
  opacity: 0;
  transform: translateY(10px);
}

.page-fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* Global Hover Effects */
button {
  transition: transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.2s ease, filter 0.2s ease !important;
}

button:hover:not(:disabled) {
  transform: translateY(-2px);
  filter: brightness(1.05);
}

button:active:not(:disabled) {
  transform: translateY(1px) scale(0.98);
}

/* Add slight lift to cards globally if they have certain classes, otherwise handled in scoped CSS */
.card-hover-effect {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card-hover-effect:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(0,0,0,0.08);
}
</style>
