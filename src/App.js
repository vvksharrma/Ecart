import { useState } from "react";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import Cart from "./Pages/Cart";
import HomePage from "./Pages/HomePage";
import "./styles.css";

export default function App() {
  const [cartItems, setCartItems] = useState([]);
  return (
    <BrowserRouter>
      <div className="App">
        <nav
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Link style={{ textDecoration: "none", color: "inherit" }} to="/">
            Home
          </Link>
          <Link style={{ textDecoration: "none", color: "inherit" }} to="/cart">
            🛒{cartItems.length}
          </Link>
        </nav>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/cart" element={<Cart />} />
          <Route
            path="*"
            element={
              <div>
                404 not found<Link to="/">Home</Link>
              </div>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
