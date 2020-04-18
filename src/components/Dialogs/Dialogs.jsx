import React from "react";
import Classes from './Dialogs.module.css'
import DialogsList from "./DialogsList/DialogsList";
import MessagesList from "./MessagesList/MessagesList";

const Dialogs = (props) => {
	return (
		<div className={Classes.ContentContainer}>
			<DialogsList dialogs={ props.dialogs } />
			<MessagesList
				messages={ props.messages }
				onSendMessage={ props.sendMessage }
			/>
		</div>
	);
}

export default Dialogs;