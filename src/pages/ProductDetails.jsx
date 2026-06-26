import products from "../data/products";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";
import "./ProductDetails.css";
import riceImg from "../assets/rice.jpeg";
import milkImg from "../assets/milk.jpeg";
import breadImg from "../assets/bread.jpeg";

function ProductDetails({ cart, setCart }) {
  const { id } = useParams();

  const products = {
    1: {
      name: "Rice",
      price: 50,
      image: riceImg,
      discount:20,
      description: "Premium quality rice for daily cooking.",
      
    },
    2: {
      name: "Milk",
      price: 30,
      image: milkImg,
      discount:15,
      description: "Fresh and healthy cow milk.",
    },
    3: {
      name: "Bread",
      price: 40,
      image: breadImg,
      discount:10,
      description: "Soft and fresh bakery bread.",
    },
  };

  const product = products[id];

  return (
    <div
      style={{
        textAlign: "center",
        padding: "40px",
      }}
    >
      <div
  style={{
    display: "inline-block",
    background: "#ef4444",
    color: "white",
    padding: "8px 15px",
    borderRadius: "20px",
    fontWeight: "bold",
    marginBottom: "20px",
  }}
>
  🔥 {product.discount}% OFF
</div>
      <img
        src={product.image}
        alt={product.name}
        width="300"
        style={{
          borderRadius: "20px",
        }}
      />

      <h1>{product.name}</h1>

      <p
  style={{
    marginTop: "15px",
    marginBottom: "15px",
  }}
>
  <span
    style={{
      textDecoration: "line-through",
      color: "gray",
      fontSize: "18px",
      marginRight: "10px",
    }}
  >
    ₹{product.price}
  </span>

  <span
    style={{
      color: "green",
      fontSize: "28px",
      fontWeight: "bold",
    }}
  >
    ₹
    {Math.round(
      product.price -
      (product.price * product.discount) / 100
    )}
  </span>
</p>

      <p>{product.description}</p>

      <button
  className="add-cart-btn"
  onClick={() => {
  const existingItem = cart.find(
    (item) => item.id === product.id
  );

  if (existingItem) {
    const updatedCart = cart.map((item) =>
      item.id === product.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );

    setCart(updatedCart);
  } else {
    setCart([
      ...cart,
      {
        ...product,
        quantity: 1,
      },
    ]);
  }

  toast.success(`${product.name} added to cart!`);
}}
>
  🛒 Add to Cart
</button>
    </div>
  );
}

export default ProductDetails;