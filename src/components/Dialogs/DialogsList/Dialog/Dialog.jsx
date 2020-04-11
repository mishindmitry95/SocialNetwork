import React from "react";
import Classes from "./Dialog.module.css";
import {NavLink} from "react-router-dom";

const Dialog = (props) => {
	return (
		<li className={Classes.Dialog}>
			<NavLink to={ `dialogs/${props.id}` } className={Classes.Link} >
				{ props.name }
			</NavLink>
		</li>
	);
}

export default Dialog;