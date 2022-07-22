import {createAsyncThunk} from "@reduxjs/toolkit"
import {getWeatherByCityId} from "api/weather"
import axios from "axios"
import {addWeather, ICityWeather} from "store/features/weather/weatherSlice"
import {RootState} from "store/store"

export const getCityWeather = createAsyncThunk<ICityWeather, ICityWeather, { rejectValue: ICityWeather, state: RootState }>(
	'weather/getCityWeather',
	async (city: ICityWeather, thunkAPI) => {
		try {
			thunkAPI.dispatch(addWeather(city))
			return await getWeatherByCityId({id: city.id})
		} catch (error) {
			let errorMessage = 'Unexpected error, Please try again.'
			if (axios.isAxiosError(error)) {
				errorMessage = error.message
			}
			return thunkAPI.rejectWithValue({...city, errorMessage})
		}
	}
)