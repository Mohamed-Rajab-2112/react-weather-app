import {IconDefinition} from "@fortawesome/fontawesome-common-types"
import {faCloud, faCloudShowersWater, faSnowflake, faSun} from "@fortawesome/free-solid-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import Error from "components/Error/Error"
import WeatherCardActions from "components/weather-card-actions/WeatherCardActions"
import WeatherCardExtraData from "components/weather-card-extra-data/WeatherCardExtraData"
import React from "react"
import {getCityWeather, ICityWeather} from "store/features/weather/weatherSlice"
import {useAppDispatch} from "store/hooks"
import './weatherCard.scss'

enum WeatherStates {
	snow = 'snow',
	clouds = 'clouds',
	rain = 'rain'
}

const WeatherCard = ({
	weather
}: { weather: ICityWeather }) => {
	
	const dispatch = useAppDispatch()
	
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
		<div className="WeatherCard">
			<WeatherCardActions weather={weather} />
			<h3 className="WeatherCard__name">{weather.name}</h3>
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
		</div>
	)
}

export default React.memo(WeatherCard)