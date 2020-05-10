import React from "react";
import LoginForm from "../forms/LoginForm/LoginForm";

const Login = () => {
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