import { useState } from "react";

const CategoryForm = ({ onSubmit }) => {
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!name.trim()) {
      return;
    }
    onSubmit(name.trim());
    setName("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: "1.5rem" }}>
      <div className="form-field">
        <label htmlFor="categoryName">Add Category</label>
        <input
          id="categoryName"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="New category name"
        />
      </div>
      <button
        type="submit"
        style={{
          background: "#16a34a",
          border: "none",
          color: "#fff",
          padding: "0.5rem 1rem",
          borderRadius: "4px"
        }}
      >
        Save Category
      </button>
    </form>
  );
};

export default CategoryForm;
