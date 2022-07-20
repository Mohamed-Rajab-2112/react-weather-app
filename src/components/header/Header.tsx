import {faArrowsRotate} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import AutoCompleteInput from 'components/auto-complete-input/AutoCompleteInput'
import './header.scss'

const Header = () => {
	return (
		<div className="Header">
			<h1 className="Header__title">Umbrella Forecast</h1>
			<div className="Header__searchContainer">
				<AutoCompleteInput />
				<button className="Header__refresh">
					<FontAwesomeIcon icon={faArrowsRotate} />
					<span className="Header__refreshText">Refresh</span>
				</button>
			</div>
		</div>
	)
}

export default Header