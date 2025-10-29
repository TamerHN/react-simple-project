import { createContext, useContext, useMemo, useState } from "react";
import { categories as initialCategories, products as initialProducts } from "../data/mockData";

const AppContext = createContext(null);

export const AppProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(() => localStorage.getItem("isAuthenticated") === "true");
  const [categories, setCategories] = useState(initialCategories);
  const [products] = useState(initialProducts);
  const [posItems, setPosItems] = useState([]);
  const [checkoutMessage, setCheckoutMessage] = useState("");

  const login = () => {
    setIsAuthenticated(true);
    localStorage.setItem("isAuthenticated", "true");
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  const addCategory = (name) => {
    const nextId = categories.length ? Math.max(...categories.map((c) => c.id)) + 1 : 1;
    setCategories((prev) => [...prev, { id: nextId, name }]);
  };

  const addProductToPOS = (product) => {
    setPosItems((prev) => [...prev, product]);
  };

  const removePOSItem = (id) => {
    setPosItems((prev) => prev.filter((item) => item.id !== id));
  };

  const checkout = () => {
    setCheckoutMessage("Checkout successful!");
    setPosItems([]);
  };

  const value = useMemo(
    () => ({
      isAuthenticated,
      login,
      logout,
      categories,
      addCategory,
      products,
      posItems,
      addProductToPOS,
      removePOSItem,
      checkout,
      checkoutMessage,
      setCheckoutMessage
    }),
    [isAuthenticated, categories, products, posItems, checkoutMessage]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within AppProvider");
  }
  return context;
};
