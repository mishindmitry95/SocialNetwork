import React from "react";
import Classes from './Dialogs.module.css'
import DialogsList from "./DialogsList/DialogsList";
import MessagesList from "./MessagesList/MessagesList";

const Dialogs = (props) => {
	return (
		<div className={Classes.ContentContainer}>
			<DialogsList dialogs={ props.dialogs } />
			<MessagesList dialogs={ props.dialogs } />
		</div>
	);
}

export default Dialogs;