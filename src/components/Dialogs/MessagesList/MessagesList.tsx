import React from "react";
import Styles from "./MessagesList.module.css";
import Message from "./Message/Message";
import SendMessageForm, {TextType} from "../../forms/SendMessageForm/SendMessageForm";

type TMessagesListProps = {
	messages: Array<TMessageType>
	onSendMessage: (text: string) => void
}

type TMessageType = {
	id: number
	message: string
}

const MessagesList: React.FC<TMessagesListProps> = (props) => {
	const messageElements = props.messages.map( m => {
		return <Message text={ m.message } key={ m.id }/>
	})

	const sendMessageHandler = (values: TextType) => {
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