import {
	PRODUCT_LIST_FAIL,
	PRODUCT_LIST_SUCCESS,
	PRODUCT_LIST_REQUEST,
} from '../contstants'

const initialState = {
	products: [],
}

export const productListReducer = (state = initialState, action) => {
	switch (action.type) {
		case PRODUCT_LIST_REQUEST:
			return { loading: true, products: [] }
		case PRODUCT_LIST_SUCCESS:
			return { products: action.payload, loading: false }
		case PRODUCT_LIST_FAIL:
			return { loading: false, error: action.payload }
		default:
			return state
	}
}
