export const required = value => {
	return value ? undefined : 'Required filed';
}

export const maxLengthCreator = (max) => (value) => {
	return value && value.length > max ? `Must be ${max} characters or less` : undefined
}