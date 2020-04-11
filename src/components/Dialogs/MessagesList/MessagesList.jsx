import React from "react";
import Classes from "./MessagesList.module.css";
import Message from "./Message/Message";

const MessagesList = (props) => {
	let messageElements = props.dialogs.map( d => {
		return d.messages.map( m => {
			return <Message text={ m }/>
		})
	})

	return (
		<ul className={Classes.MessagesList}>
			{ messageElements }
		</ul>
	);
}

export default MessagesList;