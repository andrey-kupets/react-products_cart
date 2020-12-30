import React from "react";
import {useSelector} from "react-redux";
import { useMemo } from 'react';

export const Header = (props) => {
    const { cart, wishlist, totalPricesWL, totalPricesCart} = useSelector(({cart: {cart, totalPricesCart}, wishlist: {wishlist, totalPricesWL}}) =>
        ({cart, wishlist, totalPricesWL, totalPricesCart}))

    const totalPricesWLMemo = useMemo(() => {
        return totalPricesWL
    }, []) // difference in dependencies

    const totalPricesCartMemo = useMemo(() => {
        return totalPricesCart
    }, [totalPricesCart]) // difference in dependencies

    return (
        <header className='d-flex justify-between align-center'>
            <h2>Wellcome to ...shop</h2>
            <div className='d-flex justify-between'>
                <div className='mx-10' title={totalPricesWLMemo}>wishlist: {wishlist.length}</div>
                <div className='mx-10' title={totalPricesCartMemo}>cart: {cart.length}</div>
            </div>

        </header>
    );
};
