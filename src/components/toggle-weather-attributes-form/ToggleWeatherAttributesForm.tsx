import WeatherAttributeCheckbox from "components/weather-attribute-checkbox/WeatherAttributeCheckbox"
import React, {useState} from 'react'
import {editWeather, ICityWeather} from "store/features/weather/weatherSlice"
import {useAppDispatch} from "store/hooks"
import './toggleWeatherAttributesForm.scss'

type WeatherShowAttributesType = {
	name: keyof WeatherAttributesState
	label: string
}

interface ToggleWeatherAttributesFormProps {
	onCancel: () => void
	weather: ICityWeather
}

export type WeatherAttributesState = Pick<ICityWeather,
	"showMinMaxTemp" |
	"showSunriseSunsetTime" |
	"showWindSpeed">

const weatherShowAttributes: WeatherShowAttributesType[] = [
	{
		name: 'showMinMaxTemp',
		label: 'Min / Max Temperature'
	}, {
		name: 'showSunriseSunsetTime',
		label: 'Sunrise / Sunset Time'
	}, {
		name: 'showWindSpeed',
		label: 'Wind'
	}
]

const ToggleWeatherAttributesForm = ({onCancel, weather}: ToggleWeatherAttributesFormProps) => {
	
	const [weatherAttributes, setWeatherAttributes] = useState<WeatherAttributesState>({
		showMinMaxTemp: weather.showMinMaxTemp,
		showSunriseSunsetTime: weather.showSunriseSunsetTime,
		showWindSpeed: weather.showWindSpeed
	})
	
	const dispatch = useAppDispatch()
	
	const onApply = () => {
		dispatch(editWeather({...weather, ...weatherAttributes}))
		onCancel()
	}
	
	const handleOnChange = (name: keyof WeatherAttributesState) => {
		setWeatherAttributes(prev => ({...prev, [name]: !prev[name]}))
	}
	
	return (
		<div className="ToggleWeatherAttributesForm">
			{
				weatherShowAttributes.map(({name, label}) => <WeatherAttributeCheckbox
					key={name}
					name={name}
					label={label}
					handleOnChange={handleOnChange}
					checked={Boolean(weatherAttributes[name])}
				/>)
			}
			<div className="ToggleWeatherAttributesForm__actions">
				<button
					onClick={onCancel}
					className="ToggleWeatherAttributesForm__cancel">
					Cancel
				</button>
				<button
					onClick={onApply}
					className="ToggleWeatherAttributesForm__apply">
					Apply
				</button>
			</div>
		</div>
	)
}

export default ToggleWeatherAttributesForm