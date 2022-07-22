import {faCircleXmark, faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {getCities} from 'api/cities'
import AutoCompleteResult, {IAutoCompleteCity} from "components/auto-complete-list/AutoCompleteResult"
import IconButton from "components/icon-button/IconButton"
import React, {useState} from 'react'
import {useDebouncedCallback} from 'use-debounce'
import {reformatLocationApiResults} from "utils/utilMethods"
import './autoCompleteInput.scss'

const DEBOUNCE_TIME = 500

const AutoCompleteInput = () => {
	const [searchQuery, setSearchQuery] = useState('')
	const [autoCompleteError, setAutoCompleteError] = useState('')
	const [autoCompleteCities, setAutoCompleteCities] = useState<IAutoCompleteCity[]>([])
	
	const queryCities = async (query: string) => {
		if (query) {
			try {
				const apiCities = await getCities(query)
				setAutoCompleteCities(reformatLocationApiResults(apiCities))
				setAutoCompleteError('')
			} catch (error) {
				setAutoCompleteError('error Occurred, please try again later!')
			}
		} else {
			clearSearch()
		}
	}
	
	const debouncedQueryCities = useDebouncedCallback(queryCities, DEBOUNCE_TIME)
	
	const handleChange = (event: React.KeyboardEvent<HTMLInputElement>) => {
		const {value} = event.target
		setSearchQuery(value)
		debouncedQueryCities(value)
	}
	
	const clearSearch = () => {
		setSearchQuery('')
		setAutoCompleteCities([])
		setAutoCompleteError('')
	}
	
	const renderCancelButton = () => Boolean(searchQuery) ? (
		<IconButton
			onClickHandler={clearSearch}
			icon={faCircleXmark}
			ariaLabel="Cancel"
			styleClass="AutoCompleteInput__cancelButton" />
	) : null
	
	return (
		<div className="AutoCompleteInput">
			<div className="AutoCompleteInput__searchInputContainer">
				<FontAwesomeIcon
					icon={faMagnifyingGlass}
					className="AutoCompleteInput__searchIcon"
				/>
				{/*// label is hidden but added for accessibility purposes and better testing capabilities*/}
				<label
					className="AutoCompleteInput__searchInputLabel"
					htmlFor="search">Search</label>
				<input
					placeholder="Search new city"
					type="text"
					id="search"
					name="search"
					onChange={handleChange}
					value={searchQuery}
					className="AutoCompleteInput__searchInput"
				/>
				{renderCancelButton()}
			</div>
			<AutoCompleteResult
				cities={autoCompleteCities}
				onSelectCity={clearSearch}
				error={autoCompleteError} />
		</div>
	)
}

export default AutoCompleteInput