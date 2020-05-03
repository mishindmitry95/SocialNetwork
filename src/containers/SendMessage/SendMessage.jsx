import Button from "../../components/UI/Button/Button";
import React from "react";

const SendMessage = (props) => {
	const textRef = React.createRef();
	return (
		<div>
			<textarea
				value={props.newMessageText}
				className="textarea"
				ref={textRef}
				onChange={() => {
					props.onUpdateNewMessageText(textRef.current.value)
				}}
			/>
			<Button
				caption='Отправить сообщение'
				theme='default'
				onClick={() => {
					props.onSendMessage(textRef.current.value);
					props.onUpdateNewMessageText('');
				}}
			/>
		</div>
	);
}

export default SendMessage;