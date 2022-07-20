import {rest} from 'msw'

export const handlers = [
	rest.get(
		`${process.env.REACT_APP_PLACES_API_URL}/autocomplete`,
		(req, res, ctx) => {
			return res(
				ctx.status(200),
				ctx.json([{
						"name": "Cairo",
						"country": {"name": "Egypt"},
						"adminDivision1": {"name": "Cairo Governorate"},
						"coordinates": {"latitude": 30.0626, "longitude": 31.2497}
					}, {
						"name": "New Cairo",
						"country": {"name": "Egypt"},
						"adminDivision1": {"name": "Cairo Governorate"},
						"coordinates": {"latitude": 30.03, "longitude": 31.47}
					}, {
						"name": "El Cairo",
						"country": {"name": "Colombia"},
						"adminDivision1": {"name": "Departamento del Valle del Cauca"},
						"coordinates": {"latitude": 4.76279, "longitude": -76.221}
					}, {
						"name": "Helwan",
						"country": {"name": "Egypt"},
						"adminDivision1": {"name": "Cairo Governorate"},
						"coordinates": {"latitude": 29.8414, "longitude": 31.3008}
					}, {
						"name": "Cairo",
						"country": {"name": "United States of America"},
						"adminDivision1": {"name": "Georgia"},
						"coordinates": {"latitude": 30.8775, "longitude": -84.2021}
					}]
				)
			)
		}
	)
]