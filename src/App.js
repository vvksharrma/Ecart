import { useState } from "react";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import Cart from "./Pages/Cart";
import HomePage from "./Pages/HomePage";
import "./styles.css";
import Header from "./Components/Header";
import ProductDetail from "./Pages/ProductDetail";

export default function App() {
  const [cartItems, setCartItems] = useState([]);

  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
  return (
    <BrowserRouter>
      <div className="App">
        <Header cartItems={cartItems} />
        <Routes>
          <Route exact path="/" element={<HomePage onAdd={onAdd} />} />
          <Route
            path="/cart"
            element={
              <Cart cartItems={cartItems} onRemove={onRemove} />
            }
          />
          <Route
            path="/Product/:id"
            element={<ProductDetail onAdd={onAdd} />}
          />
          <Route
            path="*"
            element={
              <div style={{marginTop:'200px'}}>
                404 not found <Link to="/">Go back Home</Link>
              </div>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
