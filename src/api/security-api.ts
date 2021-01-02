import {instance} from './api';

type GetCaptchaUrlResponseType = {
	url: string
};

export const securityAPI = {
	getCaptchUrl: () => instance.get<GetCaptchaUrlResponseType>('security/get-captcha-url').then(result => result.data)
};