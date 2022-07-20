import {ICityWeather} from "store/features/weather/weatherSlice"

const selectWeatherIndex = (weathers: ICityWeather[], id: string) => {
	let selectedWeatherIndex = 0
	for (let i = 0, l = weathers.length; i < l; i++) {
		if (weathers[i].id === id) {
			selectedWeatherIndex = i
			break
		}
	}
	
	return selectedWeatherIndex
}

const DEFAULT_EXTRA_DATA_SHOW_VALUES = {
	showMinMaxTemp: false,
	showSunriseSunsetTime: false,
	showWindSpeed: false
}

export {selectWeatherIndex, DEFAULT_EXTRA_DATA_SHOW_VALUES}