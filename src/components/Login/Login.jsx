import React from "react";
import LoginForm from "../forms/LoginForm/LoginForm";
import { connect } from "react-redux";
import { login } from "../../redux/reducers/authReducer";
import { Redirect } from "react-router-dom";

const Login = (props) => {
	const submitHandle = (values) => {
		const { email, password, rememberMe } = values;
		props.login(email, password, rememberMe);
	}

	if (props.isAuth) {
		return (
			<Redirect to='/profile' />
		);
	}

    return (
        <>
			<LoginForm onSubmit={submitHandle} errorText={props.errorText}/>
		</>
    );
}

const mapStateToProps = state => ({
	isAuth: state.auth.isAuth,
	errorText: state.auth.errorText
})

export default connect(mapStateToProps,{ login })(Login);