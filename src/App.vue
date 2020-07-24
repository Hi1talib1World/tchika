<template>
    <v-app>
        <app-navigation></app-navigation>
          <Sidebar />

        <v-content transition="slide-x-transition">
            <router-view>
            
            </router-view>
        </v-content>
    </v-app>
</template>

<script>
import AppNavigation from '@/components/AppNavigation';
import HelloWorld from '@/components/HelloWorld';
import Sidebar from '@/components/Sidebar';

export default {
    name: 'App',
    components: {
        AppNavigation
    }
};
</script>

<style>
</style>