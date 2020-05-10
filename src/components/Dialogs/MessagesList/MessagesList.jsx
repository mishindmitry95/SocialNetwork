import React from "react";
import Styles from "./MessagesList.module.css";
import Message from "./Message/Message";
import SendMessageForm from "../../forms/SendMessageForm/SendMessageForm";

const MessagesList = (props) => {
	const messageElements = props.messages.map( m => {
		return <Message text={ m.message } key={ m.id }/>
	})

	const sendMessageHandler = (values) => {
		props.onSendMessage(values.messageText);
	}

	return (
		<div>
			<ul className={Styles.MessagesList}>
				{ messageElements }
			</ul>
			<SendMessageForm onSubmit={ sendMessageHandler }/>
		</div>
	);
}

export default MessagesList;