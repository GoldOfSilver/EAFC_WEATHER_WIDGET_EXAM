<script setup>
import { defineProps } from 'vue';

const props = defineProps(["hourly"]);

function getFormatedHour(value) {
  return value.dt_txt.slice(-8);
}

const weatherIconUrl = `https://openweathermap.org/img/wn/${props.hourly.weather[0].icon}@2x.png`
</script>

<template>
  <div class="text-center">
    <p class="text-lg">{{ getFormatedHour(props.hourly) }}</p>
    <div class="w-10 h-10 bg-blue-300 rounded-full mx-auto my-2" :style="{ backgroundImage: `url(${weatherIconUrl})`, backgroundSize: 'cover' }"></div>
    <p class="text-lg">{{ props.hourly.main.temp }}°C</p>
  </div>
</template>
