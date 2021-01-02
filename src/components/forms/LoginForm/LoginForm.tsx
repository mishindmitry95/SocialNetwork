import {Field, reduxForm} from 'redux-form';
import Button from '../../UI/Button/Button';
import React from 'react';
import Styles from './LoginForm.module.css'
import Input from '../../UI/Input/Input';
import {required} from '../../../Utils/Utils';
import SubmitFormError from '../../UI/SubmitFormError/SubmitFormError';
import {InjectedFormProps} from 'redux-form';
import {LoginFormValuesType} from '../../Login/Login';

type LoginFormOwnProps = {
	errorText: string | null,
	captchaUrl: string | null,
	onSubmit: (values: LoginFormValuesType) => void
}

const LoginForm: React.FC<InjectedFormProps<LoginFormValuesType, LoginFormOwnProps> & LoginFormOwnProps> = ({
				handleSubmit, errorText, captchaUrl}) => {
	return (
		<form onSubmit={handleSubmit} className={Styles.formContainer}>
			<div>
				<Field
					name='email'
					placeholder='Email'
					component={Input}
					type='text'
					validate={[required]}
				/>
			</div>
			<div>
				<Field
					name='password'
					placeholder='Password'
					component={Input}
					type='password'
					validate={[required]}
				/>
			</div>
			<div className={Styles.checkboxContainer}>
				<Field
					name='rememberMe'
					component='input'
					type='checkbox'
					id='rememberMe'
				/>
				<label htmlFor='rememberMe'>Remember me</label>
			</div>
			{captchaUrl && <img src={captchaUrl} alt='captcha'/>}
			{errorText && <SubmitFormError errorText={errorText}/>}
			{
				captchaUrl &&
				<Field
					name='captcha'
					component={Input}
					validate={[required]}
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
};

export default reduxForm<LoginFormValuesType, LoginFormOwnProps, string>({
	form: 'login'
})(LoginForm);