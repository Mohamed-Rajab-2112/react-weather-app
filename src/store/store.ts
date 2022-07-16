import {Action, configureStore, ThunkAction} from '@reduxjs/toolkit'
import weatherReducer from "store/features/weather/weatherSlice"

export const store = configureStore({
	reducer: {
		weather: weatherReducer
	}
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,
	RootState,
	unknown,
	Action<string>>;