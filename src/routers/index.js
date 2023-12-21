import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Favorite from "@/views/Favorite.vue";

const routes = [
  { path: "/", name: "home", component: Home },
  { path: "/favoritesWeather", name: "favorite", component: Favorite },
];

const router = createRouter({
  history: createWebHistory(
    process.env.NODE_ENV === "production" ? "/EAFC_WEATHER_WIDGET_SITE/" : "/"
  ),
  routes,
});

export default router;
