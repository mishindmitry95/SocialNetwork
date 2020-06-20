import React from "react";

type TMessageProps = {
	text: string
}

const Message: React.FC<TMessageProps> = (props) => {
	return (
		<div>
			{ props.text }
		</div>
	);
}

export default Message