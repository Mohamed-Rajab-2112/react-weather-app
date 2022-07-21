import {PayloadAction} from "@reduxjs/toolkit"
import {selectWeatherIndex} from "store/features/weather/utils"
import {ICityWeather, IWeatherState} from "store/features/weather/weatherSlice"

export const reducers = {
	addWeather: (state: IWeatherState, {payload}: PayloadAction<ICityWeather>) => {
		const weather = state.citiesWeather.find(({id}) => payload.id === id)
		if (weather) {
			weather.isLoading = true
			return
		}
		state.citiesWeather.push({...payload, isLoading: true})
	},
	removeWeather: (state: IWeatherState, {payload}: PayloadAction<ICityWeather>) => {
		state.citiesWeather = state.citiesWeather.filter(({id}) => id !== payload.id)
	},
	editWeather: (state: IWeatherState, {payload}: PayloadAction<ICityWeather>) => {
		let selectedWeatherIndex = selectWeatherIndex(state.citiesWeather, payload.id)
		state.citiesWeather[selectedWeatherIndex] = {...state.citiesWeather[selectedWeatherIndex], ...payload}
	},
	reorderWeather: (state: IWeatherState, {payload}: PayloadAction<{
		dragIndex: number, dropIndex: number
	}>) => {
		const {dragIndex, dropIndex} = payload
		const citiesWeather = [...state.citiesWeather]
		const drag = state.citiesWeather[dragIndex]
		citiesWeather.splice(dragIndex, 1)
		citiesWeather.splice(dropIndex, 0, drag)
		state.citiesWeather = citiesWeather
	}
}