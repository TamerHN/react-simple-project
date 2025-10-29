import { useMemo, useState } from "react";
import ProductCard from "../components/ProductCard";
import { useAppContext } from "../context/AppContext";

const ProductsPage = () => {
  const { products, categories, addProductToPOS } = useAppContext();
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categoryOptions = useMemo(
    () => [{ id: "all", name: "All" }, ...categories],
    [categories]
  );

  const visibleProducts = useMemo(() => {
    if (selectedCategory === "all") {
      return products;
    }
    return products.filter((product) => product.categoryId === Number(selectedCategory));
  }, [products, selectedCategory]);

  return (
    <div className="container">
      <h2>Products</h2>
      <div className="form-field" style={{ maxWidth: "240px" }}>
        <label htmlFor="categoryFilter">Filter by Category</label>
        <select
          id="categoryFilter"
          value={selectedCategory}
          onChange={(event) => setSelectedCategory(event.target.value)}
        >
          {categoryOptions.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>

      <div className="card-grid">
        {visibleProducts.map((product) => {
          const category = categories.find((item) => item.id === product.categoryId);
          return (
            <ProductCard
              key={product.id}
              product={product}
              categoryName={category ? category.name : undefined}
              onAdd={addProductToPOS}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProductsPage;
