import * as axios from 'axios';

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': 'e26f2b9e-6475-49af-a1d9-dbf7214597f5'
    }
});

export const userAPI = {
    getUsers:(page = 1, count = 5) => instance.get(`users?page=${page}&count=${count}`),
    userFollow:(id) => instance.post(`follow/${id}`),
    userUnfollow:(id) => instance.delete(`follow/${id}`)
}

export const profileAPI = {
	getProfile:(id) => instance.get(`profile/${id}`),
	getStatus:(id) => instance.get(`profile/status/${id}`),
	updateStatus:(status) => instance.put('profile/status', { status }),
	savePhoto:(photo) => {
		const formData = new FormData();
		formData.append("image", photo);
		return instance.put(`profile/photo`, formData, {
			headers: {
				'Content-Type': 'multipart/form-data'
			}
		});
	},
	saveProfile:(data) => instance.put(`profile`, data)
}

export const authAPI = {
    me:() => instance.get('auth/me'),
	login:(email, password, rememberMe = false, captcha = null) => instance.post('auth/login', { email, password, rememberMe, captcha }),
	logout:() => instance.delete('auth/login')
}

export const securityAPI = {
	getCaptchUrl: () => instance.get('security/get-captcha-url')
}