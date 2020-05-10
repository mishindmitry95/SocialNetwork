import React from "react";
import { Field, reduxForm } from 'redux-form';
import Button from "../../UI/Button/Button";

let AddPostForm = (props) => {
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

AddPostForm = reduxForm({
	form: 'AddPostForm'
})(AddPostForm);

export default AddPostForm;