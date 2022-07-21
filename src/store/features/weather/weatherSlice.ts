import {createSlice} from '@reduxjs/toolkit'
import {extraReducers} from "store/features/weather/extraReducers"
import {reducers} from "store/features/weather/reducers"

export interface ICityWeather {
	id: string
	name: string
	isLoading?: boolean
	temp?: string
	tempMin?: string
	tempDescr?: string
	tempMax?: string
	windSpeed?: string
	sunriseTime?: string
	sunsetTime?: string
	showMinMaxTemp?: boolean
	showSunriseSunsetTime?: boolean
	showWindSpeed?: boolean
	isError?: boolean
	errorMessage?: string
}

export interface IWeatherState {
	citiesWeather: ICityWeather[];
}

const initialState: IWeatherState = {
	citiesWeather: []
}

export const weatherSlice = createSlice({
	name: 'weather',
	initialState,
	reducers,
	extraReducers
})

export const {
	addWeather,
	removeWeather,
	editWeather,
	reorderWeather
} = weatherSlice.actions

export default weatherSlice.reducer