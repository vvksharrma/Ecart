import React from "react";
import "../styles.css";

export default function Product({ product ,onAdd}) {
  function handleGoToDetailPage() {
    window.location.href = `/product/${product.id}`;
  }

  return (
    <>
      <div key={product.id} className="product">
        <div onClick={handleGoToDetailPage}>
        <h3>{product.title}</h3>
        <img src={product.image} alt={product.title} />
        </div>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <p><b>${product.price}</b></p>
          <button className="cart-btn" onClick={()=>onAdd(product)}>Add to Cart</button>
        </div>
      </div>
    </>
  );
}
