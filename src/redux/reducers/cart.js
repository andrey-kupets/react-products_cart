import {TOGGLE_ITEM_TO_CART} from "../action-types";

const initialState = {
    cart: [],
    totalPricesCart: 0
}

export default (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_ITEM_TO_CART: {
            const updatedCart = state.cart.filter(
                itemInCart => itemInCart.id !== action.payload.id);
            console.log('updatedCart')
            console.log(updatedCart)
            console.log('state.cart')
            console.log(state.cart)
            if (updatedCart.length === state.cart.length) {
                updatedCart.push(action.payload);
            }

            const totalPricesCart = updatedCart.reduce((acc, el) => acc + el.price, 0).toFixed(2);

            return {...state, cart: updatedCart, totalPricesCart};
        }
        default: {
            return state;
        }
    }
};