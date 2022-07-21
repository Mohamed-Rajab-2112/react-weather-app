import {faArrowsRotate} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import AutoCompleteInput from 'components/auto-complete-input/AutoCompleteInput'
import {getCityWeather} from "store/features/weather/asyncActions"
import {useAppDispatch, useAppSelector} from "store/hooks"
import './header.scss'

const Header = () => {
	const {citiesWeather} = useAppSelector(state => state.weather)
	const dispatch = useAppDispatch()
	
	const refresh = () => {
		citiesWeather.forEach(weather => dispatch(getCityWeather(weather)))
	}
	
	return (
		<div className="Header">
			<h1 className="Header__title">Umbrella Forecast</h1>
			<div className="Header__searchContainer">
				<AutoCompleteInput />
				<button
					onClick={refresh}
					className="Header__refresh">
					<FontAwesomeIcon icon={faArrowsRotate} />
					<span className="Header__refreshText">Refresh</span>
				</button>
			</div>
		</div>
	)
}

export default Header