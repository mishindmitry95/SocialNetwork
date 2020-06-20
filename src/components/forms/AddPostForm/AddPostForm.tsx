import React from "react";
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import Button from "../../UI/Button/Button";

type PropsType = {}

export type AddPostFormValuesType = {
	postText: string
}

const AddPostForm: React.FC<InjectedFormProps<AddPostFormValuesType,PropsType> & PropsType> = (props) => {
	const { handleSubmit } = props;
	return (
		<form onSubmit={ handleSubmit }>
			<div>
				<Field
					name='postText'
					component='textarea'
					type='text'
					placeholder='Enter text'
					className="textarea"
				/>
			</div>
			<div>
				<Button
					caption='Add post'
					theme='default'
				/>
			</div>
		</form>
	);
}

export default reduxForm<AddPostFormValuesType,PropsType>({form: 'AddPostForm'})(AddPostForm);