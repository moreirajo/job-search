<template>
  <div class="flex-nowwrap flex w-full flex-row">
    <job-filters-sidebar />
    <job-listings />
  </div>
</template>

<script lang="ts" setup>
import JobFiltersSidebar from "@/components/JobResults/JobFiltersSidebar/JobFiltersSidebar.vue";
import JobListings from "@/components/JobResults/JobListings.vue";
</script>
