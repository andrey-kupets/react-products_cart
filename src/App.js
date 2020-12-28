import React, { useEffect, useCallback } from "react";
import { useSelector } from "react-redux";
import {Header} from "./components/header";
import {ProductList} from "./components/product-list";
import {useServices} from "./services";
import './App.css';


// react devtools extension
// redux devtools extension

// install all libs
// redux, react-redux, redux-thunk

// prepare proper redux structure
// store
// reducers
// action-types
// action-creators

// create basic components
// header
// productList
// productItem

// products
// cart
// wishlist

function App() {
  const {cart, wishlist, products} = useSelector(
      ({cart: {cart}, wishlist: {wishlist}, products: {products}}) => ({
    cart,
    wishlist,
    products
  }));

  const {productService} = useServices();

  const fetchData = useCallback(() => {

  }, [])

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="App">
      <Header/>
      <ProductList/>
      <h2>{cart.length} {wishlist.length} {products.length}</h2>
    </div>
  );
}

export default App;
