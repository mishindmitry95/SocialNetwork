import { Field, reduxForm } from 'redux-form';
import Button from '../../UI/Button/Button';
import React from 'react';
import Styles from './LoginForm.module.css'
import Input from "../../UI/Input/Input";
import { required } from "../../../Utils/Utils";

let LoginForm = props => {
	const { handleSubmit } = props;
	return (
		<form onSubmit={ handleSubmit } className={ Styles.formContainer }>
			<div>
				<Field
					name='email'
					placeholder='email'
					component={ Input }
					type='text'
					validate={ [required] }
				/>
			</div>
			<div>
				<Field
					name='password'
					placeholder='Password'
					component={ Input }
					type='password'
					validate={ [required] }
				/>
			</div>
			<div className={ Styles.checkboxContainer }>
				<Field
					name='rememberMe'
					component='input'
					type='checkbox'
					id='rememberMe'
				/>
				<label htmlFor='rememberMe' >Remember me</label>
			</div>
			<div>
				<Button
					caption='Log in'
					theme='default'
				/>
			</div>
		</form>
	);
}

LoginForm = reduxForm({
	form: 'login'
})(LoginForm)

export default LoginForm;