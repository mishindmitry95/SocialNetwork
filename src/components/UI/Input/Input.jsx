import React from "react";

const Input = ({input, meta, placeholder, ...props}) => {
	const { touched, error } = meta;
	const hasError = touched && error;
	return (
		<div>
			<input
				{...input}
				placeholder={ hasError ? null : placeholder }
				className={`input ${ hasError && `control_error` }`}
				{...props}
			/>
			{
				hasError &&
				<div className='text_theme_error'>{error}</div>
			}
		</div>
	)
}

export default Input;