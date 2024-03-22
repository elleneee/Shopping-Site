import React from "react";
import PropTypes from "prop-types";

export default function ModifyProduct({product, onModifyProduct}) {

  const onModify = (event) => {
    event.preventDefault();
    const formdata = new FormData(event.target);
    onModifyProduct({
      id: product.id,
      name: formdata.get("name"),
      price: +formdata.get("price"),
      image: product.image,
    });
    event.target.reset();
  };

  return (
    <div>
      <button className="btn btn-sm btn-outline-primary" type="primary" 
        data-bs-toggle="modal" 
        data-bs-target={`#${product.id}`}>
         Modify
      </button>
      <div className="modal" id={product.id} aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-body">
              <h4>Modify Product</h4>
              <form onSubmit={onModify}>
                <label className="form-label" htmlFor="name">Name</label>
                <input className="form-control mb-3" type="text" id="name" name="name" 
                  defaultValue={product.name}></input>
                <label className="form-label" htmlFor="price">Price</label>
                <input className="form-control mb-3" type="number" id="price" name="price" 
                  defaultValue={product.price} ></input>
                <button className="btn btn-sm btn-outline-primary me-3" type="button"
                  data-bs-dismiss="modal">
                    Cancel
                </button>
                <button className="btn btn-sm btn-outline-primary" type="submit"
                  data-bs-dismiss="modal">
                    Comfirm
                </button>
              </form>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

ModifyProduct.propTypes = {
  product: PropTypes.object.isRequired,
  onModifyProduct: PropTypes.func.isRequired,
};