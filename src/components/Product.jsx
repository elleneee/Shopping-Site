import React from "react";
import PropTypes from "prop-types";

export default function Product({product, onAddToCart, onDeleteProduct}) {

  const onAdd = (event) => {
    onAddToCart(+event.target.value);
  };

  const onDelete = (event) => {
    onDeleteProduct(+event.target.value);
  };

  return (
    <div className="col-4">
      <div className="card mb-2 p-1">
        <img src={product.image} alt={product.name}/>
        <span className="text-center m-1">{product.name}</span>
        <button className="btn btn-sm btn-primary mb-1" value={product.id} onClick={onAdd}>Add to cart</button>
        <button className="btn btn-sm btn-outline-danger" value={product.id} onClick={onDelete}> X </button>
      </div>
    </div>
  );
}

Product.propTypes = {
  product: PropTypes.object.isRequired,
  onAddToCart: PropTypes.func.isRequired,
  onDeleteProduct: PropTypes.func.isRequired,
};