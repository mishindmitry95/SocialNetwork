import React from "react";
import LoginForm from "../forms/LoginForm/LoginForm";
import { connect } from "react-redux";
import { login } from "../../redux/reducers/authReducer";
import { Redirect } from "react-router-dom";

const Login = (props) => {
	const submitHandle = (values) => {
		const { email, password, rememberMe, captcha } = values;
		props.login(email, password, rememberMe, captcha);
	}

	if (props.isAuth) {
		return (
			<Redirect to='/profile' />
		);
	}

    return (
        <>
			<LoginForm onSubmit={submitHandle} errorText={props.errorText} captchaUrl={props.captchaUrl}/>
		</>
    );
}

const mapStateToProps = state => ({
	isAuth: state.auth.isAuth,
	errorText: state.auth.errorText,
	captchaUrl: state.auth.captchaUrl
})

export default connect(mapStateToProps,{ login })(Login);