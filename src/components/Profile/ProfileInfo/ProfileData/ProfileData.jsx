import React from "react";
import Styles from './ProfileData.module.css'
import Button from "../../../UI/Button/Button";

export const ProfileData = (props) => {
	return <div className={Styles.ProfileDataContainer}>
		<div className={Styles.Item}>
			<b>About me: </b> { props.aboutMe }
		</div>
		<div className={Styles.Item}>
			<b>Looking for a job: </b> { props.lookingForAJob ? 'yes' : 'no' }
		</div>
		<div className={Styles.Item}>
			<b>Job description: </b> { props.lookingForAJobDescription }
		</div>
		<div className={Styles.Item}>
			<b>Contacts:</b>
			{
				Object.keys(props.contacts).map(contact => <Contact title={contact} value={props.contacts[contact]} key={contact} />)
			}
		</div>
		{
			props.isOwner && <Button caption='Edit' onClick={props.doEditMode} theme='default'/>
		}
	</div>
}

const Contact = ({title, value}) => {
	return <div className={Styles.Contact}><b>{title + ': '}</b>{value}</div>
}