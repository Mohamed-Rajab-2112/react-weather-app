import WeatherCard from "components/weather-card/WeatherCard"
import React, {useEffect} from 'react'
import {getCityWeather} from "store/features/weather/weatherSlice"
import {useAppDispatch, useAppSelector} from "store/hooks"
import {RootState} from "store/store"
import './weatherCardsList.scss'

const DEFAULT_CITIES = [
	{
		id: '792680',
		name: 'Belgrade'
	}, {
		id: '2761369',
		name: 'Vienna'
	}, {
		id: '108410',
		name: 'Riyadh'
	}, {
		id: '292223',
		name: 'Dubai'
	}
]

const WeatherCardsList = () => {
	const {citiesWeather} = useAppSelector((state: RootState) => state.weather)
	
	const dispatch = useAppDispatch()
	
	useEffect(() => {
		DEFAULT_CITIES.forEach(city => dispatch(getCityWeather(city)))
	}, [dispatch])
	
	return (
		<div className="WeatherCardsList">
			{
				citiesWeather.length ? citiesWeather.map(weather => <WeatherCard
						key={weather.id}
						weather={weather} />)
					:
					<p className="WeatherCardsList__emptyState">Search for a city to see its weather info here!</p>
			}
		</div>
	)
}

export default WeatherCardsList