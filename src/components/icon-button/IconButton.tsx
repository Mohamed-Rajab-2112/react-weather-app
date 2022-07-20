import {IconProp} from "@fortawesome/fontawesome-svg-core"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import React from 'react'

interface IconButtonProps {
	onClickHandler: () => void
	icon: IconProp
	styleClass?: string
	ariaLabel?: string
	
}

const IconButton = ({onClickHandler, icon, styleClass = '', ariaLabel = ''}: IconButtonProps) => {
	return (
		<button
			onClick={onClickHandler}
			className={styleClass}
			type="button"
			aria-label={ariaLabel}
		>
			<FontAwesomeIcon icon={icon} />
		</button>
	)
}

export default IconButton