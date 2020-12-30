import { TOGGLE_ITEM_TO_WISHLIST } from '../action-types';

const initialState = {
    wishlist: [],
    totalPricesWL: 0
}

export default (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_ITEM_TO_WISHLIST: {
            // add if no item in wl
            // remove if it's present
            const updatedWishlist = state.wishlist.filter(
                el => el.id !== action.payload.id);

            console.log('updatedWishlist')
            console.log(updatedWishlist)
            console.log('state.wishlist')
            console.log(state.wishlist)

            if (updatedWishlist.length === state.wishlist.length) {
                updatedWishlist.push(action.payload)
            }

            const totalPricesWL = updatedWishlist.reduce((acc, el) => acc += el.price, 0).toFixed(2);
            console.log(totalPricesWL)

            return {...state, wishlist: updatedWishlist, totalPricesWL };
        }
        default: {
            return state;
        }
    }
};
