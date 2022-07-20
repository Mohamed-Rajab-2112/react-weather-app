import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit'
import {getWeatherByCityId} from "api/weather"
import axios from 'axios'
import {DEFAULT_EXTRA_DATA_SHOW_VALUES, selectWeatherIndex} from "store/features/weather/utils"
import {RootState} from "store/store"

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

export const getCityWeather = createAsyncThunk<ICityWeather, ICityWeather, { rejectValue: ICityWeather, state: RootState }>(
	'weather/getCityWeather',
	async (city: ICityWeather, thunkAPI) => {
		try {
			thunkAPI.dispatch(addWeather(city))
			return await getWeatherByCityId({id: city.id})
		} catch (error) {
			let errorMessage = 'Unexpected Error, Please try again.'
			if (axios.isAxiosError(error)) {
				errorMessage = error.message
			}
			return thunkAPI.rejectWithValue({...city, errorMessage})
		}
	}
)

export const weatherSlice = createSlice({
	name: 'weather',
	initialState,
	reducers: {
		addWeather: (state, {payload}: PayloadAction<ICityWeather>) => {
			const weather = state.citiesWeather.find(({id}) => payload.id === id)
			if (weather) {
				weather.isLoading = true
				return
			}
			state.citiesWeather.push({...payload, isLoading: true})
		},
		removeWeather: (state, {payload}: PayloadAction<ICityWeather>) => {
			state.citiesWeather = state.citiesWeather.filter(({id}) => id !== payload.id)
		},
		editWeather: (state, {payload}: PayloadAction<ICityWeather>) => {
			let selectedWeatherIndex = selectWeatherIndex(state.citiesWeather, payload.id)
			state.citiesWeather[selectedWeatherIndex] = {...state.citiesWeather[selectedWeatherIndex], ...payload}
		}
	},
	extraReducers: (builder) => {
		builder
		.addCase(getCityWeather.fulfilled,
			(state, {payload}) => {
				let selectedWeatherIndex = selectWeatherIndex(state.citiesWeather, payload.id)
				state.citiesWeather[selectedWeatherIndex] = {...payload, isLoading: false, ...DEFAULT_EXTRA_DATA_SHOW_VALUES}
			})
		.addCase(getCityWeather.rejected,
			(state, {payload}) => {
				if (payload) {
					let selectedWeatherIndex = selectWeatherIndex(state.citiesWeather, payload.id)
					state.citiesWeather[selectedWeatherIndex] = {...payload, isError: true, isLoading: false}
				}
			})
	}
})

export const {addWeather, removeWeather, editWeather} = weatherSlice.actions

export default weatherSlice.reducer