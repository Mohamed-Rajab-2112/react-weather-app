import {render, screen} from '@testing-library/react'
import userEvent from "@testing-library/user-event"
import AutoCompleteInput from "components/auto-complete-input/AutoCompleteInput"
import {mockServer} from 'mocks/server'
import {Provider} from "react-redux"
import {store} from "store/store"

describe('Autocomplete input', () => {
	beforeAll(() => mockServer.listen())
	afterEach(() => mockServer.resetHandlers())
	afterAll(() => mockServer.close())
	
	test('when enter text, expect cancel button to appear', async () => {
		
		render(
			<Provider store={store}>
				<AutoCompleteInput />
			</Provider>
		)
		
		await userEvent.type(screen.getByRole('textbox', {name: /search/i}), 'cairo')
		const cancelButton = await screen.findByRole('button', {name: /cancel/i})
		
		expect(cancelButton).toBeInTheDocument()
	})
	
	test('when click cancel button while input filled, expect input to be cleared', async () => {
		
		render(
			<Provider store={store}>
				<AutoCompleteInput />
			</Provider>
		)
		
		const autoCompleteInput = screen.getByRole('textbox', {name: /search/i})
		await userEvent.type(autoCompleteInput, 'cairo')
		const cancelButton = await screen.findByRole('button', {name: /cancel/i})
		await userEvent.click(cancelButton)
		
		expect(cancelButton).not.toBeInTheDocument()
		expect(autoCompleteInput).toHaveValue('')
	})
	
	test('Integration: when search for city name, expect to show list of suggested cities', async () => {
		
		render(
			<Provider store={store}>
				<AutoCompleteInput />
			</Provider>
		)
		
		const autoCompleteInput = screen.getByRole('textbox', {name: /search/i})
		await userEvent.type(autoCompleteInput, 'cairo')
		
		expect(autoCompleteInput).toHaveValue('cairo')
		expect(await screen.findByRole('list', {name: /suggested cities/i})).toBeInTheDocument()
	})
})

// case: when search for city while  no connection, expect to show friendly error message