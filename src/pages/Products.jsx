import { useState } from "react";
import products from "../data/products";
import ProductCard from "../components/ProductCard";
import "./Products.css";

function Products({ cart, setCart }) {
  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="products-page">
      <h1>Products</h1>

      <input
  className="search-box"
  type="text"
  placeholder="Search Products..."
  value={search}
  onChange={(e) => setSearch(e.target.value)}
/>

      <div className="products-container">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            cart={cart}
            setCart={setCart}
          />
        ))}
      </div>
    </div>
  );
}

export default Products;