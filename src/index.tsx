import React from 'react'
import {createRoot} from 'react-dom/client'
import Modal from 'react-modal'
import {Provider} from 'react-redux'
import {store} from 'store/store'
import App from './App'
import './index.css'

const container = document.getElementById('root')!
const root = createRoot(container)
Modal.setAppElement('#root')

root.render(
	<Provider store={store}>
		<App />
	</Provider>
)