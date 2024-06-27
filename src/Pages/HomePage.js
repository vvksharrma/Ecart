import React, { useEffect, useState } from "react";
import Product from "../Components/Product";
import "../styles.css";
import axios from "axios";

export default function HomePage({ onAdd }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        console.log("Error fetching Data", error);
      }
    }
    fetchProducts();
  }, []);

  return (
    <div className="home">
      <h2>Products</h2>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error: {error}</div>
      ) : (
        <div className="product-list">
          {products.map((product) => (
            <Product product={product} onAdd={() => onAdd(product)} />
          ))}
        </div>
      )}
    </div>
  );
}
