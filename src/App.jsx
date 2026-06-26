

import { useState, useEffect } from "react";
import {BrowserRouter,Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import "./App.css";
import OrderSuccess from "./pages/OrderSuccess";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Login from "./pages/Login";
import Register from "./pages/Register";
const hideFooter =
  window.location.pathname === "/login" ||
  window.location.pathname === "/register";

function App() {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
  <BrowserRouter>
    <>
      <Navbar cartCount={cart.length} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        <Route
          path="/products"
          element={<Products cart={cart} setCart={setCart} />}
        />

        <Route
          path="/product/:id"
          element={<ProductDetails cart={cart} setCart={setCart} />}
        />

        <Route
          path="/cart"
          element={<Cart cart={cart} setCart={setCart} />}
        />

        <Route
          path="/checkout"
          element={<Checkout cart={cart} />}
        />

        <Route path="/order-success" element={<OrderSuccess />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>

      {!hideFooter && <Footer />}
    </>
  </BrowserRouter>
);

      
}

export default App;