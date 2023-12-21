import { reactive } from 'vue';
import { geolocation } from '@/tools/geolocation.js';

export const locationStore = reactive({
  name: null,

  // Méthode pour récupérer les coordonnées
  async getLocationCoords() {
    return await geolocation.getCoords();
  },  

  // Méthode pour récupérer le nom
  getLocationName() {
    return this.name;
  },

  // Méthode pour mettre à jour le nom
  setLocationName(name) {
    this.name = name;
  },

  backgroundUrl: null,

  // Méthode pour effectuer la requête de données météorologiques
  async fetchWeatherData(lat = null, lon = null) {
    const coords =
      lat && lon
        ? { latitude: lat, longitude: lon }
        : await geolocation.getCoords();

    if (coords.latitude !== null && coords.longitude !== null) {
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.latitude}&lon=${coords.longitude}&units=metric&lang=fr&appid=416f3c78e80b8332406a7102b2bf4f8e`;

      try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
      } catch (error) {
        console.error('Erreur lors de la récupération des données météorologiques :', error);
        return null;
      }
    } else {
      console.error('Latitude ou longitude non définie');
      return null;
    }
  },
});
