import React from 'react'
import Styles from './DialogsList.module.css'
import Dialog from "./Dialog/Dialog";

const DialogsList = (props) => {
	let dialogElements = props.dialogs.map( d => <Dialog key={ d.id } name={ d.name } id={ d.id }/> );

	return (
		<ul className={Styles.DialogsList}>
			{ dialogElements }
		</ul>
	);
}

export default DialogsList;