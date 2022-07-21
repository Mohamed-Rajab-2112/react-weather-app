import Header from 'components/header/Header'
import WeatherCardsList from 'components/weather-cards-list/WeatherCardsList'
import {BackendFactory} from "dnd-core"
import {DndProvider} from "react-dnd"
import {HTML5Backend} from "react-dnd-html5-backend"
import {TouchBackend} from "react-dnd-touch-backend"
import './weather.scss'

const isTouchDevice = () => {
	return "ontouchstart" in window
	
}

const backendForDND: BackendFactory = isTouchDevice() ? TouchBackend : HTML5Backend

const Weather = () => {
	return (
		<div className="Weather">
			<Header />
			<h3 className="Weather__title">Weather In Europe</h3>
			<DndProvider backend={backendForDND}>
				<WeatherCardsList />
			</DndProvider>
		
		</div>
	)
}

export default Weather