import React from "react";
import PropTypes from "prop-types";
import Product from "./Product";

export default function ProductsList({products, onAddToCart, onDeleteProduct}) {

  return (
    <div>
      <h3>Products</h3>
      <div className="row">
        {products.map((p, i) => <Product key={i} product={p} onAddToCart={onAddToCart} onDeleteProduct={onDeleteProduct}/>)}
      </div>
    </div>
  );
}

ProductsList.propTypes = {
  products: PropTypes.array.isRequired,
  onAddToCart: PropTypes.func.isRequired,
  onDeleteProduct: PropTypes.func.isRequired,
};