import React from "react";
import Styles from './ProfileData.module.css'
import Button from "../../../UI/Button/Button";
import { ContactsType } from "../../../../types/types";

type TProfileDataProps = {
	aboutMe: string
	lookingForAJob: boolean
	lookingForAJobDescription: string
	contacts: ContactsType
	isOwner: boolean
	doEditMode: () => void
}

export const ProfileData: React.FC<TProfileDataProps> = (props) => {
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
				Object.keys(props.contacts).map((contact: string) => <Contact title={contact} value={props.contacts[contact as keyof ContactsType]} key={contact} />)
			}
		</div>
		{
			props.isOwner && <Button caption='Edit' onClick={props.doEditMode} theme='default'/>
		}
	</div>
}

type TContactProps = {
	title: string,
	value: string
}

const Contact: React.FC<TContactProps> = ({title, value}) => {
	return <div className={Styles.Contact}><b>{title + ': '}</b>{value}</div>
}