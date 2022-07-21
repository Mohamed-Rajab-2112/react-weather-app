import {IconDefinition} from "@fortawesome/fontawesome-common-types"
import {faCloud, faCloudShowersWater, faSnowflake, faSun} from "@fortawesome/free-solid-svg-icons"

enum WeatherStates {
	snow = 'snow',
	clouds = 'clouds',
	rain = 'rain'
}

const pickWeatherIcon = (tempDescr: string): IconDefinition => {
	switch (tempDescr.toLowerCase()) {
		case WeatherStates.snow:
			return faSnowflake
		case WeatherStates.clouds:
			return faCloud
		case WeatherStates.rain:
			return faCloudShowersWater
		default:
			return faSun
	}
}

export {pickWeatherIcon}