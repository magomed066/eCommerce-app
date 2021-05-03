import axios from 'axios'
import {
	USER_LOGIN_REQUEST,
	USER_LOGIN_SUCCESS,
	USER_LOGIN_FAIL,
	USER_LOGOUT,
	USER_REGISTER_REQUEST,
	USER_REGISTER_SUCCESS,
	USER_REGISTER_FAIL,
} from '../contstants'

const url = 'http://localhost:5000/api/users'

export const login = (body) => async (dispatch) => {
	try {
		dispatch({
			type: USER_LOGIN_REQUEST,
		})

		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		}

		const { data } = await axios.post(`${url}/login`, body, config)

		dispatch({
			type: USER_LOGIN_SUCCESS,
			payload: data,
		})

		localStorage.setItem('userInfo', JSON.stringify(data))
	} catch (error) {
		dispatch({
			type: USER_LOGIN_FAIL,
			payload: error.response.data.message,
		})
	}
}

export const register = (body) => async (dispatch) => {
	try {
		dispatch({
			type: USER_REGISTER_REQUEST,
		})

		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		}

		const { data } = await axios.post(`${url}/register`, body, config)

		dispatch({
			type: USER_REGISTER_SUCCESS,
			payload: data,
		})

		dispatch({
			type: USER_LOGIN_SUCCESS,
			payload: data,
		})

		localStorage.setItem('userInfo', JSON.stringify(data))
	} catch (error) {
		dispatch({
			type: USER_REGISTER_FAIL,
			payload: error.response.data.message,
		})
	}
}

export const logout = () => async (dispatch) => {
	localStorage.removeItem('userInfo')

	dispatch({
		type: USER_LOGOUT,
	})
}
