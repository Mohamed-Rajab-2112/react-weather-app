import 'components/weather-card-extra-data/weatherCardExtraData.scss'
import {ICityWeather} from "store/features/weather/weatherSlice"

type DataGroupType = {
	title: string,
	key: 'tempMin' | 'tempMax' | 'windSpeed' | 'sunriseTime' | 'sunsetTime'
}

type BooleanFlagType = 'showMinMaxTemp' | 'showSunriseSunsetTime' | 'showWindSpeed'

const WeatherCardExtraData = ({weather}: { weather: ICityWeather }) => {
	
	if (!weather.showMinMaxTemp && !weather.showSunriseSunsetTime && !weather.showWindSpeed) {
		return null
	}
	
	const renderDataGroup = (dataGroup: DataGroupType[], booleanFlag: BooleanFlagType) => weather[booleanFlag] ?
		<div className="WeatherCardExtraData__dataGroup">
			{dataGroup.map((data, i) => <div
				key={i}
				className="WeatherCardExtraData__row">
				<h4 className="WeatherCardExtraData__field">{data.title} : </h4>
				<h4 className="WeatherCardExtraData__data">{weather[data.key]}</h4>
			</div>)}
		</div> : null
	
	return (
		<div className="WeatherCardExtraData">
			{
				renderDataGroup(
					[{
						title: 'Min Temperature',
						key: 'tempMin'
					}, {
						title: 'Max Temperature',
						key: 'tempMax'
					}],
					'showMinMaxTemp'
				)
			}
			{
				renderDataGroup(
					[{
						title: 'Sunset',
						key: 'sunsetTime'
					}, {
						title: 'Sunrise',
						key: 'sunriseTime'
					}],
					'showSunriseSunsetTime'
				)
			}
			{
				renderDataGroup(
					[{
						title: 'Wind',
						key: 'windSpeed'
					}],
					'showWindSpeed'
				)
			}
		</div>
	)
}

export default WeatherCardExtraData