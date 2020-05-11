import React from "react";

const SubmitFormError = (props) => {
	return (
		<div
			style={{
				padding: '3px',
				border: '1px solid red',
				borderRadius: '3px',
				color: 'red',
				marginBottom: '5px'
			}}
		>
			{ props.errorText }
		</div>
	)
}

export default SubmitFormError;