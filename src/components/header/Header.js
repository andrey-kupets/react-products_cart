import React from "react";
import {useSelector} from "react-redux";

export const Header = (props) => {
    const { cart, wishlist, totalPrices} = useSelector(({cart: {cart}, wishlist: {wishlist, totalPrices}}) =>
        ({cart, wishlist,totalPrices}))

    return (
        <header className='d-flex justify-between align-center'>
            <h2>Wellcome to ...shop</h2>
            <div className='d-flex justify-between'>
                <div className='mx-10' title={totalPrices}>wishlist: {wishlist.length}</div>
                <div className='mx-10' title='wishlist.reduce()'>cart: {cart.length}</div>
            </div>

        </header>
    );
};
