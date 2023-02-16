import LandingPage from "./pages/LandingPage";
import ProductPage from "./pages/ProductPage";
import ProductDetail from "./components/ProductDetail";
import ServicePage from "./pages/ServicePage";
import AboutPage from "./pages/AboutPage";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import { useState } from "react";
import { Context } from "./contexts/UserContext";
import { UserLogContext } from "./contexts/LogUserContext";
import "./App.css";
import { Routes, Route } from "react-router-dom";
function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState("");
  console.log(user);
  return (
    <Context.Provider value={{ isLogin, setIsLogin }}>
      <UserLogContext.Provider value={{ user, setUser }}>
        <div className="App bg-light ">
          <Routes>
            <Route exact path="/" element={<LandingPage />} />
            <Route path="/products" element={<ProductPage />} />
            <Route path="/detail/:id" element={<ProductDetail />} />
            <Route path="/service" element={<ServicePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
          </Routes>
        </div>
      </UserLogContext.Provider>
    </Context.Provider>
  );
}

export default App;
