import React from "react";
import Classes from './Dialogs.module.css'
import {NavLink} from 'react-router-dom';

const Dialogs = () => {
	return (
		<div className={Classes.DialogsContainer}>
			<ul className={Classes.Dialogs}>
				<li className={Classes.Dialog}><NavLink to='/#' className={Classes.Link} >Anna</NavLink></li>
				<li className={Classes.Dialog}><NavLink to='/#' className={Classes.Link} >Kolya</NavLink></li>
				<li className={Classes.Dialog}><NavLink to='/#' className={Classes.Link} >Vasya</NavLink></li>
				<li className={Classes.Dialog}><NavLink to='/#' className={Classes.Link} >Oleg</NavLink></li>
			</ul>
			<ul className={Classes.Messages}>
				<li className={Classes.Message}>Hello</li>
				<li className={Classes.Message}>How are u?</li>
				<li className={Classes.Message}>Fins</li>
			</ul>
		</div>
	);
}

export default Dialogs;