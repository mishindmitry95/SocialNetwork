export type FieldValidatorType = (value: string) => string | undefined

export const required = (value: string) => {
	return value ? undefined : 'Required filed';
}

export const maxLengthCreator = (max: number): FieldValidatorType => (value: string) => {
	return value && value.length > max ? `Must be ${max} characters or less` : undefined
}