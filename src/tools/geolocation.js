export const geolocation = {
  latitude: null,
  longitude: null,

  async getCoords() {
    if (this.latitude !== null && this.longitude !== null) {
      return { latitude: this.latitude, longitude: this.longitude };
    }

    return new Promise((resolve) => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          this.latitude = position.coords.latitude;
          this.longitude = position.coords.longitude;
          resolve({ latitude: this.latitude, longitude: this.longitude });
        },
        (error) => {
          console.error("Erreur lors de la récupération des coordonnées :", error);

          // Si la récupération des coordonnées échoue, assignez des valeurs par défaut
          this.latitude = 51.5073219;
          this.longitude = -0.1276474;
          console.log('Coordonnées par défaut :', { latitude: this.latitude, longitude: this.longitude });

          return resolve({ latitude: this.latitude, longitude: this.longitude });
        }
      );
    });
  },
};
