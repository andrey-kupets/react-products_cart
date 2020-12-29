import React from "react";

export const ProductItem = ({
    isAddedToCart,
    isAddedToWishlist,
    onAddToCart,
    onAddToWishList,
    product,
    product: {id, title, price, description}
}) => {
    return (
        <div>
            <h5>{id}</h5>
            <h5>{title}</h5>
            <h5>{price}</h5>
            <h5>{description}</h5>
            <button
                style={{background: isAddedToWishlist ? 'lightcoral' : 'lightgreen'}}
                onClick={() => onAddToWishList(product)}>
                {isAddedToWishlist ? 'remove from wishlist' :'add to wishlist'}
            </button>
            <button
                style={{background: isAddedToCart ? 'lightcoral' : 'lightgreen'}}
                onClick={() => onAddToCart(product)}>
                {isAddedToCart ? 'remove from cart' : 'add to cart'}
            </button>
            <hr/>
        </div>
    )
}