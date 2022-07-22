import WeatherCardActions from "components/weather-card-actions/WeatherCardActions"
import WeatherCardBody from "components/weather-card-body/WeatherCardBody"
import {useHandleDrop} from "hooks/useHandleDrop"
import React, {useRef} from "react"
import {useDrag} from "react-dnd"
import {ICityWeather} from "store/features/weather/weatherSlice"
import './weatherCard.scss'

const dragType = "WeatherCard"

const WeatherCard = ({
	weather,
	index
}: { weather: ICityWeather, index: number }) => {
	
	const ref = useRef(null)
	const [drop] = useHandleDrop(index, ref, dragType)
	
	const [, drag] = useDrag(() => ({
		type: dragType,
		item: {id: weather.id, index},
		collect: (monitor) => ({
			isDragging: Boolean(monitor.isDragging())
		})
	}), [index])
	
	drag(drop(ref))
	
	return (
		<div
			ref={ref}
			className="WeatherCard">
			<WeatherCardActions weather={weather} />
			<WeatherCardBody weather={weather} />
		</div>
	)
}

export default React.memo(WeatherCard)