import {faker} from '@faker-js/faker'

const generateCityName = () => {
	return faker.address.cityName()
}

export {
	generateCityName
}