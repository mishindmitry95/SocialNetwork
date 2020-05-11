import React from "react";

const Textarea = ({textarea, meta, placeholder, ...props}) => {
	const { touched, error } = meta;
	const hasError = touched && error;
	return (
		<div>
			<textarea
				{...textarea}
				placeholder={ hasError ? null : placeholder }
				className={`textarea ${ hasError && `control_error` }`}
				{...props}
			/>
			{
				hasError &&
				<div className='text_theme_error'>{error}</div>
			}
		</div>
	)
}

export default Textarea;