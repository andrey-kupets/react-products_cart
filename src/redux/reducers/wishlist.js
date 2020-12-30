import { TOGGLE_ITEM_TO_WISHLIST } from '../action-types';

const initialState = {
    wishlist: [],
    totalPrices: 0
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

            const prices = [];

            // for (let i = 0; i < updatedWishlist.length; i++) {
            //     const price = updatedWishlist[i].price;
            //     console.log(price)
            //     prices.push(price)
            //     console.log(prices)
            //     const totalPrices = prices.reduce((acc, el) => acc + el, 0);
            //     // const totalPrices = prices.reduce((acc, el) => (acc += el), 0);
            //
            //     console.log('totalPrices')
            //     console.log(totalPrices)
            // }
            const totalPrices = updatedWishlist.reduce((acc, el) => (acc += el.price), 0);


            return {...state, wishlist: updatedWishlist, totalPrices };
        }
        default: {
            return state;
        }
    }
};
