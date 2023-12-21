<script setup>
import { reactive, watch } from "vue";

import AddformFavorite from '@/components/AddFormFavorite.vue';
import FavoritesList from '@/components/FavoritesList.vue';
import { favoritesStore } from "@/stores/favoritesStore.js";

const props = defineProps({
  favorites: Array,
});

const favorites = reactive(favoritesStore.findAll());

watch(
  () => favorites,
  (newValue) => {
    favoritesStore.save(newValue);
  },
  { deep: true }
);
</script>

<template>
  <div>
    <div class="fixed top-2 right-5 text-4xl text-white">
      <router-link :to="{ name: 'home' }">x</router-link>
    </div>
    <!-- Formulaire d'ajout de localisation -->
    <AddformFavorite :favorites="favorites" />

    <!-- Liste des localisations favorites -->
    <FavoritesList :favorites="favorites"/>
  </div>
</template>