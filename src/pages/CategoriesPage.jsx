import { useEffect, useState } from "react";
import CategoryForm from "../components/CategoryForm";
import { useAppContext } from "../context/AppContext";

const CategoriesPage = () => {
  const { categories, addCategory } = useAppContext();
  const [localCategories, setLocalCategories] = useState(categories);

  useEffect(() => {
    setLocalCategories(categories);
    // Bug: missing categories dependency causes list to ignore updates.
  }, []);

  return (
    <div className="container">
      <h2>Categories</h2>
      <ul>
        {localCategories.map((category) => (
          <li key={category.id}>{category.name}</li>
        ))}
      </ul>

      <CategoryForm onSubmit={addCategory} />
    </div>
  );
};

export default CategoriesPage;
