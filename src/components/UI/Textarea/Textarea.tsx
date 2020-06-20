import React from "react";
import {WrappedFieldProps} from "redux-form";


const Textarea: React.FC<WrappedFieldProps > = (props) => {
	const { input, meta, ...restProps } = props;
	const hasError = meta.touched && meta.error;
	return (
		<div>
			<textarea
				{...input}
				className={`textarea ${ hasError && `control_error` }`}
				{...restProps}
			/>
			{
				hasError &&
				<div className='text_theme_error'>{meta.error}</div>
			}
		</div>
	)
}

export default Textarea;