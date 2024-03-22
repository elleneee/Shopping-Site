import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Pagination from "./Pagination";

export default function ShoppingCart({ products, onDeletFromCart }) {

  // current page of the cart
  const [cartPage, setCartPage] = useState({
    currentPage: 1,
    currentProducts: products.length > 20 ? products.slice(0, 20) : products.slice(0),
    total: Math.ceil(products.length / 20),
  });

  // Keep track on products and change cart page 
  useEffect(() => {
    const totalpages = Math.ceil(products.length / 20);
    setCartPage({
      currentPage: cartPage.currentPage > totalpages ? totalpages : cartPage.currentPage,
      currentProducts: products.length > 20 ? products.slice(0, 20) : products.slice(0),
      total: totalpages,
    });
  }, [products]);

  // Delete product from cart
  const onDelete = (event) => {
    onDeletFromCart(+event.target.value);
  };

  const onChangePage = (num) => {
    const start = 20 * (num - 1);
    const end = products.length > 20 ? 20 * num : products.length;
    setCartPage({
      currentPage: num,
      currentProducts: products.slice(start, end),
      total: Math.ceil(products.length / 20),
    });
  };

  const renderProducts = (product, i) => {
    return (
      <li className="mb-2 p-1" key={i}>
        <div className="d-flex flex-row justify-content-between align-items-center">
          <span className="text-center m-2">{product.name}</span>
          <span className="text-center m-2">$ {product.price}</span>
          <button className="btn btn-sm btn-outline-danger" value={product.id} onClick={onDelete}> - </button>

        </div>
      </li>
    );
  };

  return (
    <div>
      <h3>Shopping Cart</h3>
      <ul>
        {cartPage.currentProducts.map(renderProducts)}
      </ul>
      Total : $ {products.reduce( (pre, curp) => pre + curp.price, 0)}
      <Pagination page={cartPage} onChangePage={onChangePage}/> 
    </div>
  );
}

ShoppingCart.propTypes = {
  products: PropTypes.array.isRequired,
  onDeletFromCart: PropTypes.func.isRequired,
};