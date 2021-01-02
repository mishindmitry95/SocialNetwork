import {PhotosType, ProfileType} from '../types/types';
import {instance, APIResponseType} from './api';

type SavePhotoResponseDataType = {
	photos: PhotosType
};

export const profileAPI = {
	getProfile: (id: number) => instance.get<ProfileType>(`profile/${id}`).then(result => result.data),
	getStatus: (id: number) => instance.get<string>(`profile/status/${id}`).then(result => result.data),
	updateStatus: (status: string) => instance.put<APIResponseType>('profile/status', {status}).then(result => result.data),
	savePhoto: (photo: any) => {
		const formData = new FormData();
		formData.append('image', photo);
		return instance.put<APIResponseType<SavePhotoResponseDataType>>(`profile/photo`, formData, {
			headers: {
				'Content-Type': 'multipart/form-data'
			}
		}).then(result => result.data);
	},
	saveProfile: (data: ProfileType) => instance.put<APIResponseType>(`profile`, data).then(result => result.data)
};