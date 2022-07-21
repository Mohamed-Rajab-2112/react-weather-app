import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import Error from "components/Error/Error"
import {pickWeatherIcon} from "components/weather-card-body/utils"
import WeatherCardExtraData from "components/weather-card-extra-data/WeatherCardExtraData"
import React from 'react'
import {getCityWeather} from "store/features/weather/asyncActions"
import {ICityWeather} from "store/features/weather/weatherSlice"
import {useAppDispatch} from "store/hooks"

const WeatherCardBody = ({weather}: { weather: ICityWeather }) => {
	
	const dispatch = useAppDispatch()
	
	const retryHandler = () => {
		dispatch(getCityWeather(weather))
	}
	
	const renderCardBody = () => <>
		<h1 className="WeatherCard__temp">{weather?.temp}</h1>
		<FontAwesomeIcon
			className="WeatherCard__icon"
			icon={pickWeatherIcon(weather?.tempDescr as string)} />
		<h2 className="WeatherCard__weatherDescription">{weather?.tempDescr}</h2>
		<WeatherCardExtraData weather={weather} />
	</>
	
	return (
		<>
			{
				weather.isLoading ?
					<p className="WeatherCard__loading">loading...</p>
					:
					weather.isError ?
						<Error
							errorMessage={weather.errorMessage as string}
							containerStyleClass="WeatherCard__error"
							retryHandler={retryHandler} />
						:
						renderCardBody()
			}
		</>
	)
}

export default WeatherCardBody