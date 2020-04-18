import React from 'react'
import Classes from './DialogsList.module.css'
import Dialog from "./Dialog/Dialog";

const DialogsList = (props) => {
	let dialogElements = props.dialogs.map( d => <Dialog key={ d.id } name={ d.name } /> );

	return (
		<ul className={Classes.DialogsList}>
			{ dialogElements }
		</ul>
	);
}

export default DialogsList;