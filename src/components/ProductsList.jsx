import {React, useState, useEffect} from "react";
import PropTypes from "prop-types";
import Product from "./Product";
import NewProduct from "./NewProduct.jsx";
import Pagination from "./Pagination.jsx";

export default function ProductsList({products, onAddToCart, onDeleteProduct, onModifyProduct, onNewProduct}) {

  // current page of the cart
  const [page, setPage] = useState({
    currentPage: 1,
    currentProducts: products.length > 20 ? products.slice(0, 20) : products.slice(0),
    total: Math.ceil(products.length / 20),
  });

  // Keep track on products and change cart page 
  useEffect(() => {
    const totalpages = Math.ceil(products.length / 20);
    setPage({
      currentPage: page.currentPage > totalpages ? totalpages : page.currentPage,
      currentProducts: products.length > 20 ? products.slice(0, 20) : products.slice(0),
      total: totalpages,
    });
  }, [products]);

  const onChangePage = (num) => {
    const start = 20 * (num - 1);
    const end = products.length > 20 ? 20 * num : products.length;
    setPage({
      currentPage: num,
      currentProducts: products.slice(start, end),
      total: Math.ceil(products.length / 20),
    });
  };

  return (
    <div>
      <h3 className="d-inline-block me-5">Products</h3>
      <NewProduct onNewProduct={onNewProduct}/>
      <div className="row">
        {page.currentProducts.map((p, i) => 
          <Product key={i} 
            product={p} 
            onAddToCart={onAddToCart} 
            onDeleteProduct={onDeleteProduct}
            onModifyProduct={onModifyProduct}/>)}
      </div>
      <Pagination page={page} onChangePage={onChangePage}/> 
    </div>
  );
}

ProductsList.propTypes = {
  products: PropTypes.array.isRequired,
  onAddToCart: PropTypes.func.isRequired,
  onDeleteProduct: PropTypes.func.isRequired,
  onModifyProduct: PropTypes.func.isRequired,
  onNewProduct: PropTypes.func.isRequired,
};