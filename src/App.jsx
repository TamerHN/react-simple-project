import { Navigate, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import { AppProvider, useAppContext } from "./context/AppContext";
import CategoriesPage from "./pages/CategoriesPage";
import LoginPage from "./pages/LoginPage";
import POSPage from "./pages/POSPage";
import ProductsPage from "./pages/ProductsPage";

const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = useAppContext();
  const storedAuth = localStorage.getItem("isAuthenticated") === "true";
  const allowed = isAuthenticated || storedAuth;
  return allowed ? children : <Navigate to="/login" replace />;
};

const AppContent = () => {
  const { isAuthenticated } = useAppContext();
  const storedAuth = localStorage.getItem("isAuthenticated") === "true";
  const authed = isAuthenticated || storedAuth;

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/login" element={authed ? <Navigate to="/products" replace /> : <LoginPage />} />
        <Route
          path="/products"
          element={
            <PrivateRoute>
              <ProductsPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/categories"
          element={
            <PrivateRoute>
              <CategoriesPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/pos"
          element={
            <PrivateRoute>
              <POSPage />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<Navigate to="/products" replace />} />
      </Routes>
    </>
  );
};

const App = () => (
  <AppProvider>
    <AppContent />
  </AppProvider>
);

export default App;
