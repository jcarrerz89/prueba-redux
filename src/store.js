import {createStore} from 'redux';

const reducer = (state, action) => {
	console.log(action.type);
	if(action.type === "ADD_TO_CART"){
		return {
			...state,
			cart: state.cart.concat(action.product)
		}
	}

	if(action.type === "DELETE_PRODUCT") {
		// delete producto from Cart
		return{
			...state,
			cart: state.cart.filter(product => { product.id !== action.product.id})
		}

	}

	return state;
};

export default createStore(reducer, { cart: [] });
