import 'components/auto-complete-list/autoCompleteResult.scss'
import {getCityWeather} from "store/features/weather/weatherSlice"
import {useAppDispatch} from "store/hooks"

export interface IAutoCompleteCity {
	id: string;
	name: string;
	coordinates: {
		latitude: number;
		longitude: number;
	};
	country: string;
	gov: string;
}

interface AutoCompleteResultProps {
	cities: IAutoCompleteCity[];
	onSelectCity: () => void;
	error: string;
}

const AutoCompleteResult = ({
	cities,
	error,
	onSelectCity
}: AutoCompleteResultProps) => {
	
	const dispatch = useAppDispatch()
	
	if (!cities.length && !error) {
		return null
	}
	
	const handleSelectCity = (city: IAutoCompleteCity) => {
		onSelectCity()
		dispatch(getCityWeather({id: city.id, name: city.name}))
	}
	
	return (
		<div className="AutoCompleteResult">
			{error ? (
				<p className="AutoCompleteResult__error">{error}</p>
			) : (
				<ul
					aria-label="suggested cities"
					className="AutoCompleteResult__citiesList">
					{cities.map((city, i) => (
						<li
							onClick={() => handleSelectCity(city)}
							className="AutoCompleteResult__city"
							key={i}
						>
							<h3 className="AutoCompleteResult__cityName">{city.name}</h3>
							<span className="AutoCompleteResult__countryAndGov">{city.country}, {city.gov}</span>
						</li>
					))}
				</ul>
			)}
		</div>
	)
}

export default AutoCompleteResult