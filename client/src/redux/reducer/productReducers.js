import {
	PRODUCT_LIST_FAIL,
	PRODUCT_LIST_SUCCESS,
	PRODUCT_LIST_REQUEST,
	PRODUCT_DETAILS_SUCCESS,
	PRODUCT_DETAILS_REQUEST,
	PRODUCT_DETAILS_FAIL,
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

export const productDetailsReducer = (
	state = { product: { reviews: [] } },
	action,
) => {
	switch (action.type) {
		case PRODUCT_DETAILS_REQUEST:
			return { loading: true, product: {} }
		case PRODUCT_DETAILS_SUCCESS:
			return { product: action.payload, loading: false }
		case PRODUCT_DETAILS_FAIL:
			return { loading: false, error: action.payload }
		default:
			return state
	}
}
