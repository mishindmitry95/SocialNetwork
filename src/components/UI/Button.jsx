import React from "react";
import './Button.css'

const Button = (props) => {
	return (
		<button
			className={`button button_theme_${props.theme}`}
		>
			{props.caption}
		</button>
	);
}

export default Button;