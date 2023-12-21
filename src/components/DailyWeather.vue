<script setup>
import DayWeather from "@/components/DayWeather.vue";

const props = defineProps({
  data: Object,
});
</script>

<template>
    <section class="bg-white bg-opacity-75 rounded-lg shadow p-5 mb-6 grow flex flex-col">
        <h2 class="font-bold text-xl mb-4">Prochains Jours</h2>
        <div class="overflow-x-auto">
          <div v-if="data" class="flex space-x-8">
            <!-- Blocs de prévisions journalières ici -->
            <DayWeather
              v-for="daily in data"
              :key="daily.dt"
              :daily="daily"
            />
          </div>
        </div>
      </section>
</template>