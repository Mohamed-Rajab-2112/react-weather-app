import Header from 'components/header/Header'
import WeatherCardsList from 'components/weather-cards-list/WeatherCardsList'
import {BackendFactory} from "dnd-core"
import {DndProvider} from "react-dnd"
import {HTML5Backend} from "react-dnd-html5-backend"
import './weather.scss'

let backendForDND: BackendFactory = HTML5Backend

// drag and drop behaviour not ux friendly on touch screens, so I commented it.
// uncomment next lines to enable drag and drop on touch screens

// const isTouchDevice = () => {
// 	return "ontouchstart" in window
// }

// if (isTouchDevice()) {
// 	backendForDND = TouchBackend
// }

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