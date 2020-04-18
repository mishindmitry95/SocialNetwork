import React from 'react'
import Classes from './DialogsList.module.css'
import Dialog from "./Dialog/Dialog";

const DialogsList = (props) => {
	let dialogElements = props.dialogs.map( d => <Dialog key={ d.id } name={ d.name } id={ d.id }/> );

	return (
		<ul className={Classes.DialogsList}>
			{ dialogElements }
		</ul>
	);
}

export default DialogsList;