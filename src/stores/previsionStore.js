import { reactive } from 'vue';
import { geolocation } from '@/tools/geolocation.js';

export const previsionStore = reactive({

  // Méthode pour récupérer les prévisions horaires
  async fetchHourlyForecasts() {
    const coords = await geolocation.getCoords();

    if (coords.latitude !== null && coords.longitude !== null) {
      const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${coords.latitude}&lon=${coords.longitude}&units=metric&lang=fr&appid=416f3c78e80b8332406a7102b2bf4f8e`;

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
