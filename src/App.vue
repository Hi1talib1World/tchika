<template>
    <v-app>
        <app-navigation></app-navigation>
        <v-content transition="slide-x-transition">
            <router-view></router-view>
        </v-content>
    </v-app>
</template>

<script>
import AppNavigation from '@/components/AppNavigation';
import HelloWorld from '@/components/HelloWorld';

export default {
    name: 'App',
    components: {
        AppNavigation
    }
};
</script>

<style>
</style>