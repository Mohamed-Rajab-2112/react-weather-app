import axiosInstance from './axios'

export interface ILocationApi {
	id: string;
	name: string;
	coordinates: {
		latitude: number
		longitude: number
	}
	country: {
		name: string
	}
	adminDivision1: {
		name: string
	}
}

function getCities(q: string): Promise<ILocationApi[]> {
	return axiosInstance.get('/autocomplete', {
		baseURL: process.env.REACT_APP_PLACES_API_URL,
		headers: {
			'X-RapidAPI-Key': process.env.REACT_APP_PLACES_AUTH_KEY as string
		},
		params: {
			limit: '5',
			q,
			type: 'CITY'
		}
	})
}

export {getCities}