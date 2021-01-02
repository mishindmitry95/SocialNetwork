import React from 'react';
import Styles from './Dialog.module.css';
import {NavLink} from 'react-router-dom';

type TDialogProps = {
	id: number
	name: string
};

const Dialog: React.FC<TDialogProps> = (props) => {
	return (
		<li className={Styles.Dialog}>
			<NavLink to={`/dialogs/${props.id}`} className={Styles.Link}>
				{props.name}
			</NavLink>
		</li>
	);
};

export default Dialog;