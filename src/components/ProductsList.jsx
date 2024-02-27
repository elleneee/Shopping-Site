import React from "react";
import PropTypes from "prop-types";
import Product from "./Product";

export default function ProductsList({products, onAddProduct, onAddToCart}) {

  const onAdd = () => {
    onAddProduct();
  };

  return (
    <div>
      <h3>Products</h3>
      <div className="row">
        {products.map((p, i) => <Product key={i} product={p} onAddToCart={onAddToCart}/>)}
      </div>
      <button className="btn btn-outline-primary" onClick={onAdd}>Add Product</button>
    </div>
  );
}

ProductsList.propTypes = {
  products: PropTypes.array.isRequired,
  onAddProduct: PropTypes.func.isRequired,
  onAddToCart: PropTypes.func.isRequired,
};