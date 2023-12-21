<script setup>
import FavoriteWeather from '@/components/FavoriteWeather.vue';

const props = defineProps({
  favorites: Array,
});

function deleteOnebyId(id) {
  props.favorites.splice(
    props.favorites.findIndex((favori) => favori.id == id),
    1
  );
}
</script>

<template>
    <section class="bg-white rounded-lg shadow p-5">
        <h2 class="font-bold text-xl mb-4">Vos Localisations Favorites</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <FavoriteWeather
          v-for="favori in favorites" 
          :key="favori.id"
          :favori="favori"
          @delete="deleteOnebyId"
          />
        </div>
      </section>
</template>