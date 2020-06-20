import React from "react";

type TSpacerProps = {
	width: string
}

const Spacer: React.FC<TSpacerProps> = (props) => {
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