import React from "react";
import './Button.css'

const Button = (props) => {
	return (
		<button
			className={`button button_theme_${props.theme} ${props.disabled ? '_disabled' : ''}`}
			onClick={props.onClick}
			disabled={props.disabled ? props.disabled : false}
		>
			{props.caption}
		</button>
	);
}

export default Button;