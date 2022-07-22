import './error.scss'

interface ErrorProps {
	errorMessage: string
	containerStyleClass?: string
	retryHandler: () => void
}

const Error = ({errorMessage, containerStyleClass, retryHandler}: ErrorProps) => {
	return (
		<div className={`Error ${containerStyleClass}`}>
			<p className="Error__message">{errorMessage}</p>
			<button
				onClick={retryHandler}
				className="Error__retryButton">Retry
			</button>
		</div>
	)
}

export default Error