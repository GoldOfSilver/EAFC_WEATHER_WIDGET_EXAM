<script setup>
import { ref, onMounted } from "vue";

import CurrentWeather from "@/components/CurrentWeather.vue";
import HourlyWeather from "@/components/HourlyWeather.vue";
import DailyWeather from "@/components/DailyWeather.vue";

import { locationStore } from "@/stores/locationStore.js";
import { previsionStore } from "@/stores/previsionStore.js";
import { useRoute } from "vue-router";

const route = useRoute();
const weatherData = ref(null);
const forecastData = ref(null);

onMounted(() => {
  const { lat, lon } = route.query;

  fetchWeatherData(lat, lon);
  fetchForecastData(lat, lon);
});

async function fetchWeatherData(lat, lon) {
  const data = await locationStore.fetchWeatherData(lat, lon);

  if (data.weather && data.weather[0]) {
    const iconCode = data.weather[0].icon;

    locationStore.backgroundUrl = `backgrounds/${iconCode}.jpg`;
    // Construis l'objet weatherData avec les données appropriées
    // pour éviter d'inclure toute la réponse de l'API
    weatherData.value = {
      cityName: data.name,
      iconUrl: `https://openweathermap.org/img/wn/${iconCode}.png`,
      temp: data.main.temp,
      description: data.weather[0].description,
      currentDateTime: {
        hours: new Date().getHours() % 12 || 12,
        minutes:
          new Date().getMinutes() < 10
            ? "0" + new Date().getMinutes()
            : new Date().getMinutes(),
        period: new Date().getHours() < 12 ? "AM" : "PM",
        day: new Date().getDate(),
        month: new Date().toLocaleString("default", { month: "short" }),
        year: new Date().getFullYear(),
      },
    };
  }
}

async function fetchForecastData(lat, lon) {
  const data = await previsionStore.fetchHourlyForecasts(lat, lon);

  if (data.list && data.list.length > 0) {
    // Construis l'objet forecastData avec les données appropriées
    // pour éviter d'inclure toute la réponse de l'API
    forecastData.value = {
      hourlyList: data.list.slice(0, 10),
      dailyList: data.list.map((item) => {
        return {
          date: item.dt_txt.substring(0, 10),
          tempMin: item.main.temp_min,
          tempMax: item.main.temp_max,
          iconCode: item.weather.icon,
          iconUrl: `https://openweathermap.org/img/wn/${item.weather.icon}.png`,
        };
      })
    }; 
  }
}
</script>

<template>
  <div>
    <!-- Météo instantanée -->
    <current-weather :data="weatherData" />

    <!-- Prévisions par tranches de 2 heures -->
    <hourly-weather :data="forecastData?.hourlyList" />

    <!-- Prévisions pour les jours suivants -->
    <daily-weather :data="forecastData?.dailyList" />

    <div class="fixed inset-x-0 bottom-0 pb-4 flex justify-center">
      <router-link :to="{ name: 'favorite' }">
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white h-16 w-16 leading-8 rounded-full shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out text-4xl"
        >
          +
        </button>
      </router-link>
    </div>
  </div>
</template>