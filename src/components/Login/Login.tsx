import React from "react";
import LoginForm from "../forms/LoginForm/LoginForm";
import { connect } from "react-redux";
import { login } from "../../redux/reducers/authReducer";
import { Redirect } from "react-router-dom";
import { AppStateType } from "../../index";

type LoginMapStatePropsType = {
	isAuth: boolean,
	errorText: string | null,
	captchaUrl: string | null
}

type LoginMapDispatchPropsType = {
	login: (email: string, password: string, rememberMe: boolean, captcha: string) => void
}

export type LoginFormValuesType = {
	email: string,
	password: string,
	rememberMe: boolean,
	captcha: string
}

const Login: React.FC<LoginMapStatePropsType & LoginMapDispatchPropsType> = (props) => {
	const submitHandle = (values: LoginFormValuesType) => {
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
			<LoginForm onSubmit={ submitHandle } errorText={props.errorText} captchaUrl={props.captchaUrl}/>
		</>
    );
}

const mapStateToProps = (state: AppStateType): LoginMapStatePropsType => ({
	isAuth: state.auth.isAuth,
	errorText: state.auth.errorText,
	captchaUrl: state.auth.captchaUrl
})

export default connect<LoginMapStatePropsType,LoginMapDispatchPropsType, {}, AppStateType>(mapStateToProps,{ login })(Login);