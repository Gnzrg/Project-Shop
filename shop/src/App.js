import LandingPage from "./pages/LandingPage";
import ProductPage from "./pages/ProductPage";
import ProductDetail from "./components/ProductDetail";
import "./App.css";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App bg-light ">
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/detail" element={<ProductDetail />} />
      </Routes>
    </div>
  );
}

export default App;
