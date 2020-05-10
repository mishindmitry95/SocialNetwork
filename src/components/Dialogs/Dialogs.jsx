import React from "react";
import Styles from './Dialogs.module.css'
import DialogsList from "./DialogsList/DialogsList";
import MessagesList from "./MessagesList/MessagesList";

const Dialogs = (props) => {
	return (
		<div className={Styles.ContentContainer}>
			<DialogsList
				dialogs={ props.dialogs }
			/>
			<MessagesList
				messages={ props.messages }
				onSendMessage={ props.sendMessage }
			/>
		</div>
	);
}

export default Dialogs;