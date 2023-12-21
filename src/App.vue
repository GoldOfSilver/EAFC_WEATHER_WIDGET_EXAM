<script setup>
import { locationStore } from "@/stores/locationStore.js";
</script>

<template>
  <div
    class="mx-auto p-4 min-h-screen flex flex-col"
    :style="{
      'max-width': '1125px',
      'background-image': locationStore.backgroundUrl ? `url(${locationStore.backgroundUrl})` : 'none'
    }"
  >
  <router-view></router-view>
</div>
</template>