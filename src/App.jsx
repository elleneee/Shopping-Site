import React, { useState } from "react";
import ProductsList from "./components/ProductsList";
import ShoppingCart from "./components/ShoppingCart";

export default function App() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Product 1",
      price: 100,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Product 2",
      price: 100,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      name: "Product 3",
      price: 100,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 4,
      name: "Product 4",
      price: 100,
      image: "https://via.placeholder.com/150",
    },
  ]);

  const [productsInCart, setProductsInCart] = useState([
    {
      id: 1,
      name: "Product 1",
      price: 100,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Product 2",
      price: 100,
      image: "https://via.placeholder.com/150",
    },
  ]);

  // Add new product
  const onAddProduct = () => {
    setProducts([
      ...products,
      {
        id: products.at(-1)?.id + 1,
        name: `Product ${products.length + 1}`,
        price: 100,
        image: "https://via.placeholder.com/150",
      },
    ]);
  };

  // Add product to cart
  const onAddToCart = (id) => {
    setProductsInCart([
      ...productsInCart,
      products.find((p) => p.id === id),
    ]);
  };

  // Delete product from cart
  const onDeletFromCart = (id) => {
    setProductsInCart(productsInCart.filter((p) => p.id !== id));
  };

  return (
    <div>
      <h1>Shopping Site</h1>
      <div className="row">
        <div className="col-8">
          <ProductsList products={products} onAddProduct={onAddProduct} onAddToCart={onAddToCart}/>
        </div>
        <div className="col-4">
          <ShoppingCart products={productsInCart} onDeletFromCart={onDeletFromCart}/>
        </div>
      </div>
    </div>
  );
}

