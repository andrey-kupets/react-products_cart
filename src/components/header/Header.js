import React from "react";
import {useSelector} from "react-redux";

export const Header = (props) => {
    const { cart, wishlist, totalPricesWL, totalPricesCart} = useSelector(({cart: {cart, totalPricesCart}, wishlist: {wishlist, totalPricesWL}}) =>
        ({cart, wishlist, totalPricesWL, totalPricesCart}))

    return (
        <header className='d-flex justify-between align-center'>
            <h2>Wellcome to ...shop</h2>
            <div className='d-flex justify-between'>
                <div className='mx-10' title={totalPricesWL}>wishlist: {wishlist.length}</div>
                <div className='mx-10' title={totalPricesCart}>cart: {cart.length}</div>
            </div>

        </header>
    );
};
