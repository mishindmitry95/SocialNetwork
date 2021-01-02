import {APIResponseType, GetItemsTypes, instance} from './api';
import {AxiosPromise} from 'axios';

export const userAPI = {
	getUsers: (page = 1, count = 5) => instance.get<GetItemsTypes>(`users?page=${page}&count=${count}`)
		.then(response => response.data),
	userFollow: (id: number) => instance.post<APIResponseType>(`follow/${id}`).then(result => result.data),
	userUnfollow: (id: number) => instance.delete(`follow/${id}`).then(result => result.data) as AxiosPromise<APIResponseType>
};