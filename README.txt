EAFC WEATHER APP 2023
APIs:
	- Créer une clé gratuite: https://openweathermap.org/price
	- Current: https://openweathermap.org/current
	- Forecasts : https://openweathermap.org/forecast5
	- icons : https://openweathermap.org/weather-conditions#Weather-Condition-Codes-2
	- géolocatisation : https://openweathermap.org/api/geocoding-api
	- mon site : https://goldofsilver.github.io/EAFC_WEATHER_WIDGET_SITE/

- routes:
	- / (Home)
	- /favorites (Favorites)

- views
	- Home (Current, Hourly, Daily)
	- Favorites (AddForm, FavoritesList)

- components
	- Current
	- Hourly (Hour)
	- Hour
	- Daily (Day)
	- Day
	- AddForm
	- FavoritesList (Favorite)
	- Favorite

- stores
	- locationsStore (getLocationCoords, setLocationName, ...)
	- forecastsStore

- App.vue
	On lance la géolocatisation (getLocationCoords)
	...
	<router-view />
	...