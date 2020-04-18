import React from "react";
import Classes from "./MessagesList.module.css";
import Message from "./Message/Message";
import SendMessage from "../../../containers/SendMessage/SendMessage";

const MessagesList = (props) => {
	const messageElements = props.messages.map( m => {
		return <Message text={ m.message } key={m.id}/>
	})

	return (
		<div>
			<ul className={Classes.MessagesList}>
				{ messageElements }
			</ul>
			<SendMessage onSendMessage={ props.onSendMessage }/>
		</div>
	);
}

export default MessagesList;