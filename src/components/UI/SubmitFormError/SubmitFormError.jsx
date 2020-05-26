import React from "react";

const SubmitFormError = (props) => {
	return (
		<div>
			<div
				style={{
					padding: '3px',
					border: '1px solid red',
					borderRadius: '3px',
					color: 'red',
					marginBottom: '5px',
					display: 'inline-block',
					fontSize: '11px'
				}}
			>
				{ props.errorText }
			</div>
		</div>
	)
}

export default SubmitFormError;