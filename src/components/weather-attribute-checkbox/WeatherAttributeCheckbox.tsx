import {WeatherAttributesState} from "components/toggle-weather-attributes-form/ToggleWeatherAttributesForm"
import React from 'react'
import './weatherAttributeCheckbox.scss'

interface WeatherAttributeCheckboxProps {
	checked: boolean
	name: keyof WeatherAttributesState
	label: string
	handleOnChange: (key: keyof WeatherAttributesState) => void
}

const WeatherAttributeCheckbox = ({checked, name, label, handleOnChange}: WeatherAttributeCheckboxProps) => {
	return (
		<div className="WeatherAttributeCheckbox">
			<div className="WeatherAttributeCheckbox__checkbox">
				<input
					className="WeatherAttributeCheckbox__checkboxInput"
					id={name}
					type="checkbox"
					checked={checked}
					onChange={() => handleOnChange(name)}
					name={name} />
				<label
					className="WeatherAttributeCheckbox__checkboxLabel"
					htmlFor={name}></label>
			</div>
			<label
				htmlFor={name}
				className="WeatherAttributeCheckbox__label">{label}</label>
		</div>
	)
}

export default WeatherAttributeCheckbox