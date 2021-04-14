import React from 'react';
import { Form, Formik, Field } from 'formik';
import { FilterType } from '../../../redux/reducers/usersPageReducer';

interface IUserSearchForm {
  term: string;
  friend: "true" | "false" | "null"
}

type UsersSearchFormProps = {
	onChanged: (filter: FilterType) => void
}

export const UsersSearchForm: React.FC<UsersSearchFormProps> = React.memo(({ onChanged }) => {
  const submit = (values: FilterType, { setSubmitting }) => {
  	const filter: FilterType = {
  		term: values.term,
		friend: values.friend === "null" ? null : values.friend === "true"
	};
  	onChanged(filter);
  	setSubmitting(false);
  };

  const usersSearchValidate = (values: IUserSearchForm) => {
    const errors = {};

    if (!values.term) {
      errors.email = 'Required';
    }

    return errors;
  };

  return (
    <div>
      <Formik
        initialValues={{ term: '', friend: 'null' }}
        validate={ usersSearchValidate }
        onSubmit={ submit }
      >
		  {{isSubmitting}} => {
			  <Form>
				  <Field type="text" name="term" />
				  <Field as="select" name="friend">
				  	<option value="null">All</option>
				  	<option value="true">Only followed</option>
				  	<option value="false">Only unfollowed</option>
				  </Field>
				  <button type="submit" disabled={ isSubmitting }> Find </button>
			  </Form>
		  }}
      </Formik>
    </div>
  );
});