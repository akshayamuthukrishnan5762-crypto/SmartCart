import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import "./Checkout.css";

function Checkout({ cart = [] }) {
  const navigate = useNavigate();

  const total = cart.reduce(
    (sum, item) =>
      sum +
      Math.round(
        item.price -
          (item.price * (item.discount || 0)) / 100
      ) *
        (item.quantity || 1),
    0
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    toast.success("🎉 Order placed successfully!");

    setTimeout(() => {
      navigate("/order-success");
    }, 1500);
  };

  return (
    <div className="checkout-page">
      <div className="checkout-card">
        <h1>Checkout</h1>

        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email Address" required />
          <input type="text" placeholder="Delivery Address" required />
          <input type="tel" placeholder="Mobile Number" required />

          <div className="summary">
            <h2>Order Summary</h2>

            {cart.length === 0 ? (
              <p>No items in cart.</p>
            ) : (
              <>
                {cart.map((item) => (
                  <div className="summary-item" key={item.id}>
                    <span>
                      {item.name} × {item.quantity || 1}
                    </span>

                    <span>
                      ₹
                      {Math.round(
                        item.price -
                          (item.price * (item.discount || 0)) / 100
                      ) *
                        (item.quantity || 1)}
                    </span>
                  </div>
                ))}

                <hr />

                <div className="summary-item total">
                  <span>Total</span>
                  <span>₹{total}</span>
                </div>
              </>
            )}
          </div>

          <button className="checkout-btn" type="submit">
            Place Order
          </button>
        </form>
      </div>
    </div>
  );
}

export default Checkout;