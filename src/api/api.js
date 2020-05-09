import * as axios from 'axios';

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': 'e26f2b9e-6475-49af-a1d9-dbf7214597f5'
    }
});

export const userAPI = {
    getUsers:(page = 1, count = 5) => {
        return instance.get(`users?page=${page}&count=${count}`)
            .then(response => response.data);
    },
    userFollow:(id) => {
        return instance.post(`follow/${id}`)
            .then(response => response.data);
    },

    userUnfollow:(id) => {
        return instance.delete(`follow/${id}`)
            .then(response => response.data);
    }
}

export const profileAPI = {
	getProfile:(id) => {
		return instance.get(`profile/${id}`)
			.then(response => response.data);
	},
	getStatus:(id) => {
		return instance.get(`profile/status/${id}`)
			.then(responce => responce.data);
	},
	updateStatus:(status) => {
		return instance.put(`profile/status`, {status});
	}
}

export const authAPI = {
    me:() => {
        return instance.get(`auth/me`)
            .then(response => response.data);
        },
}