// @ts-nocheck

class WeatherPage {
	navigateToWeatherPage() {
		cy.visit('http://localhost:3000')
	}
	
	searchForCity(cityName: string) {
		cy.findByRole('textbox', {LabelText: /search/i}).type(cityName)
		cy.findByRole('list', {name: /suggested cities/i})
		.within(() => {
			cy.findAllByRole('heading', {name: cityName}).then((v: any[]) => v[0].click())
		})
	}
	
	getCityWeather(cityName: string) {
		return cy.findByRole('heading', {name: cityName})
	}
}

export const weatherPage = new WeatherPage()