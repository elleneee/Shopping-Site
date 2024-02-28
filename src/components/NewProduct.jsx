import React from "react";
import PropTypes from "prop-types";

export default function NewProduct({ onAddProduct }) {

  const onAdd = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    onAddProduct({
      name: formData.get("name"),
      price: formData.get("price"),
    });
    event.target.reset();
  };

  return (
    <div className="mt-3">
      <h3>Create Product</h3>
      <form onSubmit={onAdd}>
        <div className="mb-3 col-4">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" id="name" name="name" className="form-control"></input>
        </div>
        <div className="mb-3 col-4">
          <label htmlFor="price" className="form-label">Price</label>
          <input type="number" id="price" name="price" className="form-control"></input>
        </div>
        <button className="btn btn-primary" type="submit">Comfirm</button>
      </form>
    </div>
  );
}
NewProduct.propTypes = {
  onAddProduct: PropTypes.func.isRequired,
};