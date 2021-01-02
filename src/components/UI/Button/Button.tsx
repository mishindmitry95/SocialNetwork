import React from 'react';
import './Button.css'

type TButtonProps = {
	theme: string,
	disabled?: boolean,
	onClick?: () => void,
	caption: string
}

const Button: React.FC<TButtonProps> = (props) => {
	return (
		<button
			className={`button button_theme_${props.theme} ${props.disabled ? '_disabled' : ''}`}
			onClick={props.onClick}
			disabled={props.disabled ? props.disabled : false}
		>
			{props.caption}
		</button>
	);
};

export default Button;