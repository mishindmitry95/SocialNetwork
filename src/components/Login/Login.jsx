import React from "react";
import LoginForm from "../forms/LoginForm/LoginForm";

const Login = props => {
	const submitHandle = (values) => {
		console.log(values);
	}
    return (
        <>
			<LoginForm onSubmit={submitHandle}/>
		</>
    );
}

export default Login;