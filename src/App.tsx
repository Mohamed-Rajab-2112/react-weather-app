import {ErrorBoundary} from "components/error-boundary/ErrorBoudary"
import Weather from 'pages/weather/Weather'

function App() {
	return (
		<ErrorBoundary>
			<Weather />
		</ErrorBoundary>
	
	)
}

export default App