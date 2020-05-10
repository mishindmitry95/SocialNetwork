import { Field, reduxForm } from 'redux-form';
import Button from '../../UI/Button/Button';
import React from 'react';
import Styles from './LoginForm.module.css'

let LoginForm = props => {
	const { handleSubmit } = props;
	return (
		<form onSubmit={ handleSubmit } className={Styles.formContainer}>
			<div>
				<Field
					name='login'
					placeholder='Login'
					component='input'
					type='text'
					className='input'
				/>
			</div>
			<div>
				<Field
					name='password'
					placeholder='Password'
					component='input'
					type='password'
					className='input'
				/>
			</div>
			<div className={Styles.checkboxContainer}>
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