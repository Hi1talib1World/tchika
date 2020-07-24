<template>
  <span>
    <home-hero></home-hero>
    <home-details></home-details>
  </span>
</template>

<script>
import HomeHero from "@/components/HomeHero";
import HomeDetails from "@/components/HomeDetails";

export default {
  name: "HelloWorld",
  components: {
    HomeHero,
    HomeDetails
  }
};
</script>
