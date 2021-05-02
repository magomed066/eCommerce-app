import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {
	productListReducer,
	productDetailsReducer,
} from './reducer/productReducers'
import { cartReducer } from './reducer/cartReducer'
import { userLoginReducer } from './reducer/userReducer'

const reducer = combineReducers({
	productList: productListReducer,
	productDetails: productDetailsReducer,
	cart: cartReducer,
	userLogin: userLoginReducer,
})

const cartItemsFromStorage = JSON.parse(localStorage.getItem('cartItems')) || []
const userInfoFromStorage = JSON.parse(localStorage.getItem('userInfo')) || {}

const initialState = {
	cart: { cartItems: cartItemsFromStorage },
	userLogin: userInfoFromStorage,
}

const store = createStore(
	reducer,
	initialState,
	composeWithDevTools(applyMiddleware(thunk)),
)

export default store
