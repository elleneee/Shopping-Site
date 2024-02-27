import React from "react";
import PropTypes from "prop-types";

export default function ShoppingCart({ products, onDeletFromCart }) {

  const onDelete = (event) => {
    onDeletFromCart(+event.target.value);
  };
  const renderProducts = (product, i) => {
    return (
      <div className=" mb-2 p-1" key={i}>
        <img src={product.image} alt={product.name}/>
        <span className="text-center m-2">{product.name}</span>
        <span className="text-center m-2">Price: {product.price}</span>
        <button className="btn btn-sm btn-outline-danger" value={product.id} onClick={onDelete}> - </button>
      </div>
    );
  };

  return (
    <div>
      <h3>Shopping Cart</h3>
      {products.map(renderProducts)}
    </div>
  );
}

ShoppingCart.propTypes = {
  products: PropTypes.array.isRequired,
  onDeletFromCart: PropTypes.func.isRequired,
};