import React, { useState } from "react";
import PropTypes from "prop-types";
import Pagination from "./Pagination";

export default function ShoppingCart({ products, onDeletFromCart }) {

  // current page of the cart
  const [cartPage, setCartPage] = useState(
    {
      curentPage: 1,
      currentProducts: products.length > 20 ? products.slice(0, 20) : products,
      total: Math.ceil(products.length / 20),
    }
  );

  const onDelete = (event) => {
    onDeletFromCart(+event.target.value);
  };

  const onChangePage = (num) => {
    const start = 20 * (num - 1);
    const end = products.length > 20 ? 20 * num : products.length;
    setCartPage({
      curentPage: num,
      currentProducts: products.slice(start, end),
      total: Math.ceil(products.length / 20),
    });
  };

  const renderProducts = (product, i) => {
    return (
      <div className=" mb-2 p-1" key={i}>
        {/* <img src={product.image} alt={product.name}/> */}
        <span className="text-center m-2">{product.name}</span>
        <span className="text-center m-2">Price: {product.price}</span>
        <button className="btn btn-sm btn-outline-danger" value={product.id} onClick={onDelete}> - </button>
      </div>
    );
  };

  return (
    <div>
      <h3>Shopping Cart</h3>
      <div>
        {cartPage.currentProducts.map(renderProducts)}
      </div>
      <Pagination cartPage={cartPage} onChangePage={onChangePage}/> 
    </div>
  );
}

ShoppingCart.propTypes = {
  products: PropTypes.array.isRequired,
  onDeletFromCart: PropTypes.func.isRequired,
};