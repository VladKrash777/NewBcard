import axios from 'axios'
import UserType, { Login, RegistrationForm, UserRegistered } from '../models/types/userTypes'

const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:8181'

export const login = async (user: Login) => {
	try {
		const { data } = await axios.post<string>(`${apiUrl}/users/login`, user)
		return data
	} catch (error) {
		if (axios.isAxiosError(error)) return Promise.reject(error.message)
		return Promise.reject('An unexpected error occurred!')
	}
}

export const signup = async (normalizedUser: UserType) => {
	try {
		const { data } = await axios.post<UserRegistered>(
			`${apiUrl}/users`,
			normalizedUser
		)
		return data
	} catch (error) {
		if (axios.isAxiosError(error)) return Promise.reject(error.message)
		return Promise.reject('An unexpected error occurred!')
	}
}
export const edit = async (normalizedUser: UserType, userId: string | undefined) => {
	try {
		const { data } = await axios.put<UserRegistered>(
			`${apiUrl}/users/${userId}`,
			normalizedUser
		)
		return data
	} catch (error) {
		if (axios.isAxiosError(error)) return Promise.reject(error.message)
		return Promise.reject('An unexpected error occurred!')
	}
}

export const getUserFullData = async (userId: string | undefined )=> {
	try {
		const { data } = await axios.get<RegistrationForm>(`${apiUrl}/users/fullData/${userId}`)
		return Promise.resolve(data)
	} catch (error) {
		if (axios.isAxiosError(error)) return Promise.reject(error.message)
		return Promise.reject('An unexpected error occurred!')
	}
}