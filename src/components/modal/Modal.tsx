import {faClose} from "@fortawesome/free-solid-svg-icons"
import IconButton from "components/icon-button/IconButton"
import React from 'react'
import ReactModal from 'react-modal'
import './modal.scss'

export type ActionButtonType = {
	name: string
	callback: () => void
}

interface IModal {
	isOpen: boolean;
	closeModal: () => void
	children: JSX.Element
	title: string
}

const Modal = ({
	isOpen,
	closeModal,
	children,
	title
}: IModal) => {
	
	const renderModalHeader = () => <div className="Modal__header">
		<h3 className="Modal__title">{title}</h3>
		<IconButton
			onClickHandler={closeModal}
			styleClass="Modal__headerCloseButton"
			icon={faClose} />
	</div>
	
	return (
		<ReactModal
			className="Modal"
			isOpen={isOpen}
			onRequestClose={closeModal}
			contentLabel="editModal"
			overlayClassName="Modal__overlay"
		>
			{renderModalHeader()}
			{children}
		</ReactModal>
	)
}

export default Modal