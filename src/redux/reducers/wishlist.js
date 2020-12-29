import { TOGGLE_ITEM_TO_WISHLIST } from '../action-types';

const initialState = {
    wishlist: []
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

            return {...state, wishlist: updatedWishlist};
        }
        default: {
            return state;
        }
    }
};