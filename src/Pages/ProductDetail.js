import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles.css";

const ProductDetail = ({onAdd}) => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams(); 
  const roundedRating = Math.floor(product?.rating?.rate );
  
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          `https://fakestoreapi.com/products/${id}`
        );
        setProduct(response.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchProducts();
  }, [id]);

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error: {error}</div>
      ) : (
        <div>
          <h2>{product.title}</h2>
          <div className="product-detail">
            <div>
              <img src={product.image} alt="product image" />
            </div>
            <div>
              <p>{product.description}</p>
              <p>
                Price: ${product.price} <br />
                <span>{[...Array(roundedRating)].map((_,i)=><>⭐</>)}</span>
              </p>

              <button onClick={()=>onAdd(product)}>Add to Cart</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
