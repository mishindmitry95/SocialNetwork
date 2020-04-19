import React from "react";
import Styles from "./Dialog.module.css";
import {NavLink} from "react-router-dom";

const Dialog = (props) => {
	return (
		<li className={Styles.Dialog}>
			<NavLink to={ `/dialogs/${props.id}` } className={Styles.Link} >
				{ props.name }
			</NavLink>
		</li>
	);
}

export default Dialog;