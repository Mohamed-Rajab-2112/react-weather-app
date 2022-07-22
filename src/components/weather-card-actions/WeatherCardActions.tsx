import {faFilter, faTrashCan} from "@fortawesome/free-solid-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import Modal from "components/modal/Modal"
import ToggleWeatherAttributesForm from "components/toggle-weather-attributes-form/ToggleWeatherAttributesForm"
import {useState} from "react"
import {ICityWeather, removeWeather} from "store/features/weather/weatherSlice"
import {useAppDispatch} from "store/hooks"
import './weatherCardActions.scss'

interface WeatherCardActionsProps {
	weather: ICityWeather
}

const WeatherCardActions = ({weather}: WeatherCardActionsProps) => {
	const [isModalOpen, setIsModalOpen] = useState(false)
	const dispatch = useAppDispatch()
	
	const deleteWeather = () => {
		dispatch(removeWeather(weather))
	}
	
	const openEditModal = () => {
		setIsModalOpen(true)
	}
	
	const closeEditModal = () => {
		setIsModalOpen(false)
	}
	
	return (
		<div className="WeatherCardActions">
			<button
				onClick={openEditModal}
				className="WeatherCardActions__filterButton">
				<FontAwesomeIcon
					icon={faFilter} />
			</button>
			<button
				onClick={deleteWeather}
				className="WeatherCardActions__deleteButton">
				<FontAwesomeIcon icon={faTrashCan} />
			</button>
			<Modal
				isOpen={isModalOpen}
				closeModal={closeEditModal}
				title="Select Fields to Display"
			>
				<ToggleWeatherAttributesForm
					onCancel={closeEditModal}
					weather={weather} />
			</Modal>
		</div>
	)
}

export default WeatherCardActions