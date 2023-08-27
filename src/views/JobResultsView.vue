<template>
  <h1 class="font-bod text-6xl">Job Results page</h1>
  <button @click="goToHome">Go to Home Page</button>
</template>

<script>
export default {
  name: "JobResultsView",
  methods: {
    goToHome() {
      this.$router.push({ name: "Home" });
    },
  },
};
</script>
