import {React} from "react";
import PropTypes from "prop-types";

export default function NewProduct({ onNewProduct }) {

  const onNew = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const name = formData.get("name");
    const price = +formData.get("price");
    onNewProduct({
      name: name,
      price: price,
    });
    event.target.reset();
  };

  return (
    <div className="col d-inline-grid pe-0">
      <button className="btn btn-sm btn-primary" type="primary" 
        data-bs-toggle="modal" 
        data-bs-target="#newProductModal">
         New Product
      </button>
      <div className="modal" id="newProductModal" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-body">
              <h4>New Product</h4>
              <form onSubmit={onNew}>
                <label className="form-label" htmlFor="name">Name</label>
                <input className="form-control mb-3" type="text" id="name" name="name" required></input>
                <label className="form-label" htmlFor="price">Price</label>
                <input className="form-control mb-3" type="number" id="price" name="price" required></input>
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
NewProduct.propTypes = {
  onNewProduct: PropTypes.func.isRequired,
};