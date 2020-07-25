<template>
  <v-app>
    <app-navigation></app-navigation>
    <Sidebar />

    <v-content transition="slide-x-transition">
      <router-view> </router-view>
    </v-content>
  </v-app>
</template>

<script>
import AppNavigation from "@/components/AppNavigation";
import Sidebar from "@/components/Sidebar";


export default {
  name: "App",
  components: {
    AppNavigation,
    Sidebar
  },
  methods: {
    handleWindowResize() {
      const width = window.innerWidth;
      if (width <= 768 && this.sidebarStatic) {
        this.toggleSidebar();
        this.changeSidebarActive(null);
      }
    }
  }

    ,computed: {
        
    created() {
        const staticSidebar = JSON.parse(localStorage.getItem('sidebarStatic'));
        if (staticSidebar) {
        this.$store.state.layout.sidebarStatic = true;
        } else if (!this.sidebarClose) {
        setTimeout(() => {
            this.switchSidebar(true);
            this.changeSidebarActive(null);
        }, 2500);
        }
        this.handleWindowResize();
        window.addEventListener('resize', this.handleWindowResize);
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.handleWindowResize);
    }

  }
};
</script>

<style></style>
