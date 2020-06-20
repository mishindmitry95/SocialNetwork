import React from "react";
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import Button from "../../UI/Button/Button";

export type TextType = {
	messageText: string
}

const SendMessageForm: React.FC<InjectedFormProps<TextType, {}> & {}> = (props) => {
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

export default reduxForm<TextType, {}>({form: 'SendMessageForm'})(SendMessageForm);;