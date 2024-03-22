import React from "react";
import PropTypes from "prop-types";
import ModifyProduct from "./ModifyProduct";

export default function Product({product, onAddToCart, onDeleteProduct, onModifyProduct}) {

  const onAdd = (event) => {
    onAddToCart(+event.target.value);
  };

  const onDelete = (event) => {
    onDeleteProduct(+event.target.value);
  };

  return (
    <div className="d-flex flex-row mb-3 align-items-center">
      <img className="d-inline-block" src={product.image} alt={product.name}/>
      <span className="col-3 text-center ms-5 me-20">{product.name}</span>
      <span className="text-center ms-5 me-20">$ {product.price}</span>
      <div className="d-flex flex-fill justify-content-end gap-3">
        <button className="btn btn-sm btn-outline-primary" value={product.id} onClick={onAdd}>Add</button>
        <ModifyProduct product={product} onModifyProduct={onModifyProduct}/>
        <button className="btn btn-sm btn-danger" value={product.id} onClick={onDelete}>Delete</button>
      </div>
    </div>
  );
}

Product.propTypes = {
  product: PropTypes.object.isRequired,
  onAddToCart: PropTypes.func.isRequired,
  onDeleteProduct: PropTypes.func.isRequired,
  onModifyProduct: PropTypes.func.isRequired,
};