import { Field, reduxForm } from 'redux-form';
import Button from '../../UI/Button/Button';
import React from 'react';
import Styles from './LoginForm.module.css'
import Input from "../../UI/Input/Input";
import { required } from "../../../Utils/Utils";
import SubmitFormError from "../../UI/SubmitFormError/SubmitFormError";

let LoginForm = props => {
	const { handleSubmit } = props;
	return (
		<form onSubmit={ handleSubmit } className={ Styles.formContainer }>
			<div>
				<Field
					name='email'
					placeholder='Email'
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
			{ props.captchaUrl && <img src={ props.captchaUrl } alt='captcha' /> }
			{ props.errorText && <SubmitFormError errorText={ props.errorText } /> }
			{
				props.captchaUrl &&
				<Field
					name='captcha'
					component={ Input }
					validate={ [required] }
				/>
			}
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