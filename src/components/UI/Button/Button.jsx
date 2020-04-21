import React from "react";
import './Button.css'

const Button = (props) => {
	return (
		<button
			className={`button button_theme_${props.theme}`}
			onClick={props.onClick}
		>
			{props.caption}
		</button>
	);
}

export default Button;