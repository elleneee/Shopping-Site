import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import { Modal } from "antd";

export default function ModifyProduct({product, onModifyProduct}) {
  const nameRef = useRef();
  const priceRef = useRef();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    onModifyProduct({
      id: product.id,
      name: nameRef.current.value,
      price: priceRef.current.value,
      image: product.image,
    });
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="col d-inline-grid pe-0">
      <button className="btn btn-sm btn-outline-primary" type="primary" onClick={showModal}>
        Modify
      </button>
      <Modal title="Modify Product" okText="Comfirm" cancelText="Cancle" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <form>
          <label className="form-label" htmlFor="name">Name</label>
          <input className="form-control" type="text" id="name" name="name" ref={nameRef} defaultValue={product.name}></input>
          <label className="form-label" htmlFor="price">Price</label>
          <input className="form-control" type="number" id="price" name="price" ref={priceRef} defaultValue={product.price}></input>
        </form>
      </Modal>
    </div>
  );
}

ModifyProduct.propTypes = {
  product: PropTypes.object.isRequired,
  onModifyProduct: PropTypes.func.isRequired,
};