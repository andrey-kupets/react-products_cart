import { TOGGLE_ITEM_TO_WISHLIST } from '../action-types';

const initialState = {
    wishlist: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_ITEM_TO_WISHLIST: {
            return state;
        }
        default: {
            return state;
        }
    }
};