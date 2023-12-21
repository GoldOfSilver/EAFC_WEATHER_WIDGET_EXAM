<script setup>
import { ref, onMounted } from 'vue';

const props = defineProps({
  favori: Object,
});

const locationName = ref('');

onMounted(() => {
  // Récupérer le contenu du localStorage
  const favoritesFromLocalStorage = JSON.parse(localStorage.getItem('favorites')) || [];
  
  // Trouver le favori correspondant dans le localStorage
  const matchingFavorite = favoritesFromLocalStorage.find(favorite => favorite.id === props.favori.id);
  
  // Si le favori correspondant est trouvé, mettre à jour locationName
  if (matchingFavorite) {
    locationName.value = matchingFavorite.content;
  }
});
</script>

<template>
  <div class="bg-gray-200 hover:bg-blue-500 hover:text-white rounded-lg p-4 flex justify-between items-center">
    <router-link
      :to="{
        name: 'home',
        query: {
          lat: props.favori.lat,
          lon: props.favori.lon,
        },
      }"
    >
      <!-- Afficher le contenu du localStorage dans le span -->
      <span>{{ locationName }}</span>
    </router-link>
    <div>
      <button
        class="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline"
        @click="$emit('delete', favori.id)"
      >
        Supprimer
      </button>
    </div>
  </div>
</template>
