import {ILocationApi} from "api/cities"
import {IWeatherApi, UNITS} from "api/weather"
import {IAutoCompleteCity} from "components/auto-complete-list/AutoCompleteResult"
import moment from 'moment'
import {ICityWeather} from "store/features/weather/weatherSlice"

const TIME_FORMAT = 'h:mm a'

function reformatLocationApiResults(locations: ILocationApi[]): IAutoCompleteCity[] {
	return locations.map(({id, name, coordinates, country, adminDivision1}) =>
		({
			id,
			name,
			coordinates,
			country: country.name,
			gov: adminDivision1.name
		})
	)
}

function reformatWeatherApiResult(weatherApiResult: IWeatherApi): Promise<ICityWeather> {
	return Promise.resolve({
		id: `${weatherApiResult.id}`,
		name: weatherApiResult.name,
		windSpeed: `${weatherApiResult.wind.speed}ms`,
		temp: formatDegree(weatherApiResult.main.temp),
		tempDescr: weatherApiResult.weather[0].main,
		tempMax: formatDegree(weatherApiResult.main.temp_max),
		tempMin: formatDegree(weatherApiResult.main.temp_min),
		sunriseTime: formatTime(weatherApiResult.sys.sunrise, weatherApiResult.timezone),
		sunsetTime: formatTime(weatherApiResult.sys.sunset, weatherApiResult.timezone)
	})
}

function formatDegree(temp: number) {
	// floored temperature to look nicer on the UI
	const flooredTemp = Math.floor(temp)
	return `${flooredTemp > 0 ? '+' + flooredTemp : flooredTemp}${UNITS.celsius.symbol}`
}

function formatTime(timeInMilliseconds: number, utcOffsetInSeconds: number) {
	return moment(timeInMilliseconds * 1000).utcOffset(utcOffsetInSeconds / 60).format(TIME_FORMAT)
}

export {
	reformatLocationApiResults,
	reformatWeatherApiResult,
	formatTime
}