import axios from 'axios';
import {UserType} from '../types/types';

export const instance = axios.create({
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	withCredentials: true,
	headers: {
		'API-KEY': 'e26f2b9e-6475-49af-a1d9-dbf7214597f5'
	}
});

export enum ApiResultCode {
	success = 0,
	error = 1,
}

export enum ApiResultCodeForCaptcha {
	captchaIsRequired = 10
}

export type GetItemsTypes = {
	items: Array<UserType>
	totalCount: number
	error: string | null
}

export type APIResponseType<D = {}, RC = ApiResultCode> = {
	data: D
	messages: Array<string>
	resultCode: RC
}