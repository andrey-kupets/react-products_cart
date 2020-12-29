import { SET_PRODUCTS, TOGGLE_ITEM_TO_CART, TOGGLE_ITEM_TO_WISHLIST } from '../action-types';
import { services } from "../../services";

const { productService } = services;

export const setProducts = () => async (dispatch) => {
      const response = await productService.getProducts();
      const json = await response.json();

      dispatch(({type: SET_PRODUCTS, payload: json}));
};

export const toggleItemInCart = (product) => ({type: TOGGLE_ITEM_TO_CART, payload: product});
export const toggleItemInWishList = (product) => ({type: TOGGLE_ITEM_TO_WISHLIST, payload: product});