<script setup>
import HourWeather from "@/components/HourWeather.vue";

const props = defineProps({
  data: Object,
});
</script>

<template>
  <section
    class="bg-white bg-opacity-75 rounded-lg shadow p-5 mb-6 grow flex flex-col"
  >
    <h2 class="font-bold text-xl mb-4">Prochaines Heures</h2>
    <div class="overflow-x-auto">
      <div v-if="data" class="flex space-x-12">
        <!-- Blocs de prévisions horaires ici -->
        <HourWeather
          v-for="hourly in data"
          :key="hourly.dt"
          :hourly="hourly"
        />
      </div>
    </div>
  </section>
</template>