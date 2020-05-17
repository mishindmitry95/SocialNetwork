import React, { useState, useEffect } from "react";
import Styles from "./ProfileStatus.module.css";

const ProfileStatus = props => {
	const [editMode, setEditMode] = useState(false);
	const [status, setStatus] = useState(props.status);

	useEffect( () => {
		setStatus(props.status);
	},[props.status])

	const toggleEditMode = () => {
		setEditMode(!editMode);
	}

	const updateStatus = value => {
		setStatus(value);
	}

	return (
		<>
			{
				editMode
					? <input
						className={ Styles.input }
						onBlur={ () => {
							toggleEditMode();
							props.updateStatus(status);
						} }
						autoFocus
						onChange={ e => updateStatus(e.currentTarget.value) }
						value={ status }
						/>
					: <div
						onClick={ toggleEditMode }
						> { status }</div>
			}
		</>
	);
}

export default ProfileStatus;