import {instance, ApiResultCodeForCaptcha, ApiResultCode, APIResponseType} from "./api";

type MeResponseDataType = {
	id: number
	email: string
	login: string
}

type LoginResponseDataType = {
	userId: number
}

export const authAPI = {
	me:() => instance.get<APIResponseType<MeResponseDataType>>('auth/me').then(result => result.data),
	login:(email: string, password: string, rememberMe = false, captcha: null | string = null) => {
		return instance.post<APIResponseType<LoginResponseDataType, ApiResultCodeForCaptcha | ApiResultCode>>('auth/login', { email, password, rememberMe, captcha })
			.then(result => result.data)
	},
	logout:() => instance.delete('auth/login').then(response => response.data)
}