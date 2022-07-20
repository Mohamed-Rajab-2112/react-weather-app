import Header from 'components/header/Header'
import WeatherCardsList from 'components/weather-cards-list/WeatherCardsList'
import './weather.scss'

const Weather = () => {
	return (
		<div className="Weather">
			<Header />
			<h3 className="Weather__title">Weather In Europe</h3>
			<WeatherCardsList />
		</div>
	)
}

export default Weather