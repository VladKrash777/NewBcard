import { useCallback, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useAxiosInterceptors from '../../hooks/useAxiosInterceptors'
import ROUTES from '../../routes/routesModel'
import { Login, TokenType } from '../models/types/userTypes'
import { useUser } from '../providers/UserProvider'
import {
	getUser,
	removeToken,
	setTokenInLocalStorage,
} from '../services/localStorage'
import { login } from '../services/userApi'

type ErrorType = null | string

const useHandleUser = () => {
	const [isLoading, setLoading] = useState(false)
	const [error, setError] = useState<ErrorType>(null)
	const { setUser, setToken, user } = useUser()

	useAxiosInterceptors()

	const navigate = useNavigate()

	const requestStatus = (
		loading: boolean,
		errorMessage: ErrorType,
		user: null | TokenType
	) => {
		setLoading(loading)
		setError(errorMessage)
		setUser(user)
	}

	const handleLogin = useCallback( async ( user: Login) => {
			try {
				setLoading(true)
				const token = await login(user)
				setTokenInLocalStorage(token)
				setToken(token)
				const userFromLocalStorage = getUser()
				requestStatus(false, null, userFromLocalStorage)
				navigate(ROUTES.ROOT)
			} catch (error) {
				if (typeof error === 'string') requestStatus(false, error, null)
			}
		},	[setToken])
	
	

	const handleLogout = useCallback(() => {
		removeToken()
		setUser(null)
		navigate(ROUTES.ROOT)
	}, [setUser])

	const value = useMemo(() => {
		return { isLoading, error, user }
	}, [isLoading, error, user])

	return {
		value,
		handleLogin,
		handleLogout,
		// handleSignup
	}
}

export default useHandleUser
