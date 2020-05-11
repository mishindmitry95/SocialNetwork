import React from "react";

const Spacer = (props) => {
	return (
		<div
			style={{
				width: `${props.width}px`,
				display: 'inline-block'
			}}
		/>
	)
}

export default Spacer;