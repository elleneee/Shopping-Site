import React, { useEffect, useState } from "react";
import ProductsList from "./components/ProductsList";
import ShoppingCart from "./components/ShoppingCart";
import {myFirebase} from "./models/MyFirebase.js";
import NewProduct from "./components/NewProduct.jsx";

export default function App() {
  const [products, setProducts] = useState([]);

  const [productsInCart, setProductsInCart] = useState([]);

  // Get products from db at the beginning
  useEffect(() => {
    const setData = async () => {
      await refreshProducts();
      await refreshCart();
    };
    setData();
  }, []);


  // Get products from db and refresh
  const refreshProducts = async () => {
    setProducts(await myFirebase.getProducts());
  };

  // Add new product to db
  const onAddProduct = async (product) => {
    product.id = products.at(-1)?.id + 1;
    product.image = "https://via.placeholder.com/150";
    await myFirebase.addProduct(product);
    await refreshProducts();
  };

  // Modify product
  const onModifyProduct = async (product) => {
    await myFirebase.updateProduct(product);
    await refreshProducts();
  };

  // Delete Product from db
  const onDeleteProduct = async (id) => {
    await myFirebase.deleteProduct(id);
    await refreshProducts();
  };

  // Get products of cart from db and refresh
  const refreshCart = async () => {
    setProductsInCart(await myFirebase.getCart());
  };

  // Add product to cart
  const onAddToCart = async (id) => {
    await myFirebase.addToCart(products.find((p) => p.id === id));
    await refreshCart();
  };

  // Delete product from cart
  const onDeletFromCart = async (id) => {
    await myFirebase.deleteFromCart(id);
    await refreshCart();
  };

  return (
    <div>
      <h1>Shopping Site</h1>
      <div className="row">
        <div className="col-8">
          <ProductsList 
            products={products} 
            onAddProduct={onAddProduct} 
            onAddToCart={onAddToCart} 
            onDeleteProduct={onDeleteProduct}
            onModifyProduct={onModifyProduct}/>
          <NewProduct onAddProduct={onAddProduct}/>
        </div>
        <div className="col-4">
          <ShoppingCart products={productsInCart} onDeletFromCart={onDeletFromCart}/>
        </div>
      </div>
    </div>
  );
}

