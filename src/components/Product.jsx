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
    <div className="col-4">
      <div className="card mb-2 p-1">
        <img src={product.image} alt={product.name}/>
        <span className="text-center m-1">{product.name}</span>
        <button className="btn btn-sm btn-outline-primary mb-1" value={product.id} onClick={onAdd}>Add to cart</button>
        <div className="row">
          <ModifyProduct product={product} onModifyProduct={onModifyProduct}/>
          <div className="col d-inline-grid ps-1">
            <button className="btn btn-sm btn-outline-danger" value={product.id} 
              onClick={onDelete}>
                X 
            </button>
          </div>
        </div>
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