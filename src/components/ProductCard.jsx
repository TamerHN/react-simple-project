const ProductCard = ({ product, categoryName, onAdd }) => {
  return (
    <div className="card">
      <h3>{product.name}</h3>
      <p style={{ fontSize: "0.85rem", color: "#666" }}>Category: {categoryName || "Unknown"}</p>
      <p style={{ fontWeight: "bold" }}>${product.price.toFixed(2)}</p>
      <button
        type="button"
        onClick={() => onAdd(product)}
        style={{
          width: "100%",
          background: "#2563eb",
          border: "none",
          color: "#fff",
          padding: "0.5rem",
          borderRadius: "4px"
        }}
      >
        Add to POS
      </button>
    </div>
  );
};

export default ProductCard;
