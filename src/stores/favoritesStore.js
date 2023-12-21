import { reactive } from 'vue';

export const favoritesStore = reactive({
    favorites: JSON.parse(localStorage.getItem('favorites'))|| [], 
    findAll() {
        return this.favorites;
    },
    save(data){
        localStorage.setItem('favorites', JSON.stringify(data));
    }
});

async function getCoordinatesForFavorite(newFavoriContent) {
    const url = `https://api.openweathermap.org/geo/1.0/direct?q=${encodeURIComponent(newFavoriContent)}&limit=1&appid=416f3c78e80b8332406a7102b2bf4f8e`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data && data.length > 0) {
            return {
                content: data[0].name,
                lat: data[0].lat,
                lon: data[0].lon
            };
        } else {
            // Lancez une nouvelle Error avec un message spécifique pour une ville non trouvée
            throw new Error(`Aucun résultat trouvé pour '${newFavoriContent}'`);
        }
    } catch (error) {
        // Propagez cette erreur pour qu'elle puisse être gérée par le composant appelant
        throw error;
    }
}

export { getCoordinatesForFavorite };