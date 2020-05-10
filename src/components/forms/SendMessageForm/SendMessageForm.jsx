import React from "react";
import { Field, reduxForm } from 'redux-form';
import Button from "../../UI/Button/Button";

let SendMessageForm = (props) => {
	const { handleSubmit } = props;
	return (
		<form onSubmit={ handleSubmit }>
			<div>
				<Field
					name='messageText'
					component='textarea'
					type='text'
					placeholder='Enter text'
					className="textarea"
				/>
			</div>
			<div>
				<Button
					caption='Send message'
					theme='default'
				/>
			</div>
		</form>
	);
}

SendMessageForm = reduxForm({
	form: 'SendMessageForm'
})(SendMessageForm);

export default SendMessageForm;