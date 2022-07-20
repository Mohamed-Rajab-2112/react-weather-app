import axiosInstance from "api/axios"
import {ICityWeather} from "store/features/weather/weatherSlice"
import {reformatWeatherApiResult} from "utils/utilMethods"

export interface IWeatherApi {
	id: number
	name: string
	main: {
		temp: number
		temp_min: number
		temp_max: number
	}
	wind: {
		speed: number
	}
	sys: {
		sunrise: number
		sunset: number
	}
	weather: [{
		main: string
	}]
	timezone: number
}

export const UNITS = {
	celsius: {
		name: 'metric',
		symbol: '˚C'
	}
}

function getWeatherByCityId({id, units = UNITS.celsius.name}: { id: string, units?: string }): Promise<ICityWeather> {
	return axiosInstance.get<IWeatherApi>('/weather', {
		baseURL: process.env.REACT_APP_WEATHER_API_URL,
		params: {
			id,
			units,
			APPID: process.env.REACT_APP_WEATHER_AUTH_KEY
		}
	}).then(reformatWeatherApiResult as any)
}

export {getWeatherByCityId}