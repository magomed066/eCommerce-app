import {
	PRODUCT_LIST_FAIL,
	PRODUCT_LIST_SUCCESS,
	PRODUCT_LIST_REQUEST,
} from '../contstants'
import axios from 'axios'

export const listProducts = () => async (dispatch) => {
	try {
		dispatch({ type: PRODUCT_LIST_REQUEST })

		const { data } = await axios.get('http://localhost:5000/api/products')

		dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data })
	} catch (error) {
		dispatch({
			type: PRODUCT_LIST_FAIL,
			payload: error.response.data.message,
		})
	}
}
