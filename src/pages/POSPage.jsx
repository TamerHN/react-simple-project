import { useEffect, useState } from "react";
import { useAppContext } from "../context/AppContext";

const POSPage = () => {
  const { posItems, removePOSItem, checkout, checkoutMessage, setCheckoutMessage } = useAppContext();
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const sum = posItems.reduce((running, item) => running + item.price, 0);
    setTotal(sum);
  }, []); // Bug: missing dependency means total never updates after initial render.

  const handleCheckout = () => {
    checkout();
    setTimeout(() => {
      setCheckoutMessage("");
    }, 2000);
  };

  return (
    <div className="container">
      <h2>Point of Sale</h2>
      {posItems.length === 0 ? <p>No items in the POS list.</p> : null}

      <ul>
        {posItems.map((item) => (
          <li key={item.id} style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
            <span>
              {item.name} - ${item.price.toFixed(2)}
            </span>
            <button
              type="button"
              onClick={() => removePOSItem(item.id)}
              style={{
                background: "#ef4444",
                border: "none",
                color: "#fff",
                padding: "0.25rem 0.75rem",
                borderRadius: "4px"
              }}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>

      <div style={{ marginTop: "1rem" }}>
        <strong>Total: ${total.toFixed(2)}</strong>
      </div>

      <button
        type="button"
        onClick={handleCheckout}
        style={{
          marginTop: "1rem",
          background: "#2563eb",
          border: "none",
          color: "#fff",
          padding: "0.5rem 1rem",
          borderRadius: "4px"
        }}
      >
        Checkout
      </button>

      {checkoutMessage ? <p style={{ color: "green", marginTop: "0.75rem" }}>{checkoutMessage}</p> : null}
    </div>
  );
};

export default POSPage;
