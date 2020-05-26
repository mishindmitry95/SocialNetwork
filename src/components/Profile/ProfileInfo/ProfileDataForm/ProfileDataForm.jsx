import React from "react";
import {Field, reduxForm} from "redux-form";
import Button from "../../../UI/Button/Button";
import Styles from './ProfileDataForm.module.css'
import Input from "../../../UI/Input/Input";
import Textarea from "../../../UI/Textarea/Textarea";
import SubmitFormError from "../../../UI/SubmitFormError/SubmitFormError";

let ProfileDataForm = (props) => {
	return <form className={Styles.FormContainer} onSubmit={props.handleSubmit}>
		<div>
			<label htmlFor='fullName' style={{fontSize: '13px'}}><b>Full Name:</b></label>
			<Field
				name='fullName'
				component={ Input }
				type='input'
				id='fullName'
			/>
		</div>
		<div>
			<label htmlFor='aboutMe' style={{fontSize: '13px'}}><b>About me:</b></label>
			<Field
				name='aboutMe'
				component={ Textarea }
				type='textarea'
				id='aboutMe'
			/>
		</div>
		<div>
			<label htmlFor="lookingForAJob" style={{fontSize: '13px'}}><b>Looking for a job</b></label>
			<div style={{display: 'inline-block'}}>
				<Field
					name='lookingForAJob'
					component={ Input }
					type='checkbox'
					id='lookingForAJob'
				/>
			</div>
		</div>
		<div>
			<label htmlFor='lookingForAJobDescription' style={{fontSize: '13px'}}><b>Job description:</b></label>
			<Field
				name='lookingForAJobDescription'
				component={ Textarea }
				type='textarea'
				id='lookingForAJobDescription'
				placeholder='Description'
			/>
		</div>
		{
			Object.keys(props.contacts).map(contact => <ContactFormField title={contact} value={props.contacts[contact]} key={contact} />)
		}
		{
			props.error && <SubmitFormError errorText={ props.error } />
		}
		<Button
			caption='Save'
			theme='success'
		/>
	</form>
}

const ContactFormField = ({ title }) => {
	return <div>
		<label htmlFor={title} style={{fontSize: '13px'}}><b>{title + ':'}</b></label>
		<Field
			name={ 'contacts.' + title }
			component={ Input }
			type='input'
			id={ title }
		/>
	</div>
}

ProfileDataForm = reduxForm({
	form: 'profileEdit'
})(ProfileDataForm)

export default ProfileDataForm;