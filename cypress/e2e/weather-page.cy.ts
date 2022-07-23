import {weatherPage} from "./../pages/weather-page"

const cityName = 'Cairo'

describe('Weather Page', () => {
	it('when search for city, expect to add it to the weather list', () => {
		weatherPage.navigateToWeatherPage()
		weatherPage.searchForCity(cityName)
		weatherPage.getCityWeather(cityName).should('be.visible')
	})
})