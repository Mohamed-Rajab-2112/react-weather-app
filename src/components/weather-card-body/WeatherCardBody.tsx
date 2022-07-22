import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import Error from "components/error/Error"
import {pickWeatherIcon} from "components/weather-card-body/utils"
import WeatherCardExtraData from "components/weather-card-extra-data/WeatherCardExtraData"
import React from 'react'
import {getCityWeather} from "store/features/weather/asyncActions"
import {ICityWeather} from "store/features/weather/weatherSlice"
import {useAppDispatch} from "store/hooks"
import './weatherCardBody.scss'

const WeatherCardBody = ({weather}: { weather: ICityWeather }) => {
	
	const dispatch = useAppDispatch()
	
	const retryHandler = () => {
		dispatch(getCityWeather(weather))
	}
	
	const renderCardBody = () => <>
		<h1 className="WeatherCardBody__temp">{weather?.temp}</h1>
		<FontAwesomeIcon
			className="WeatherCardBody__icon"
			icon={pickWeatherIcon(weather?.tempDescr as string)} />
		<h2 className="WeatherCardBody__weatherDescription">{weather?.tempDescr}</h2>
		<WeatherCardExtraData weather={weather} />
	</>
	
	return (
		<div className="WeatherCardBody">
			<h3 className="WeatherCardBody__name">{weather.name}</h3>
			{
				weather.isLoading ?
					<p className="WeatherCardBody__loading">loading...</p>
					:
					weather.isError ?
						<Error
							errorMessage={weather.errorMessage as string}
							containerStyleClass="WeatherCardBody__error"
							retryHandler={retryHandler} />
						:
						renderCardBody()
			}
		</div>
	)
}

export default WeatherCardBody