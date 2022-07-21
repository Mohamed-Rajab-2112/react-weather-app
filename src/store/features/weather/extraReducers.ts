import {getCityWeather} from "store/features/weather/asyncActions"
import {DEFAULT_EXTRA_DATA_SHOW_VALUES, selectWeatherIndex} from "store/features/weather/utils"
import {ICityWeather, IWeatherState} from "store/features/weather/weatherSlice"

export const extraReducers = (builder: any) => {
	builder
	.addCase(getCityWeather.fulfilled,
		(state: IWeatherState, {payload}: { payload: ICityWeather }) => {
			let selectedWeatherIndex = selectWeatherIndex(state.citiesWeather, payload.id)
			state.citiesWeather[selectedWeatherIndex] = {...payload, isLoading: false, ...DEFAULT_EXTRA_DATA_SHOW_VALUES}
		})
	.addCase(getCityWeather.rejected,
		(state: IWeatherState, {payload}: { payload: ICityWeather }) => {
			if (payload) {
				let selectedWeatherIndex = selectWeatherIndex(state.citiesWeather, payload.id)
				state.citiesWeather[selectedWeatherIndex] = {...payload, isError: true, isLoading: false}
			}
		})
}