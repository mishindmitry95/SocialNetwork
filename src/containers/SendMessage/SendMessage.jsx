import Button from "../../components/UI/Button/Button";
import React from "react";

const SendMessage = (props) => {
	const textRef = React.createRef();
	return (
		<div>
			<textarea
				className="textarea"
				ref={textRef}
			/>
			<Button
				caption='Отправить сообщение'
				theme='default'
				onClick={() => {
					props.onSendMessage(textRef.current.value);
					textRef.current.value = '';
				}}
			/>
		</div>
	);
}

export default SendMessage;