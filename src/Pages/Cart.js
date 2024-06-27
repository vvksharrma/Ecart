import React, { useEffect, useState } from "react";
import '../styles.css'
const Cart = ({ cartItems, onRemove }) => {
  const [TotalPrice, setTotalPrice] = useState();

  useEffect(() => {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.price;
      setTotalPrice(total);
    });
  }, [cartItems]);
  function handleGoToDetailPage(id) {
    window.location.href = `/product/${id}`;
  }
  return (
    <div className="cart">
      <h2>Cart</h2>
      <div className="cart-cont">
        {cartItems.map((item) => (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              margin: "40px",
              backgroundColor:'aliceblue',
              padding:'10px',
            }}
            key={item.id}
          >
            <img onClick={()=>handleGoToDetailPage(item.id)} style={{ height: "2.5rem" ,marginLeft:'100px'}} src={item.image} alt="img" />
            <span>
              {item.title} - ${item.price}
            </span>
            <span style={{marginRight:"100px"}} onClick={() => onRemove(item)}>❌</span>
          </div>
        ))}
      </div>
      <div>
      <h2>
        <b>
          Total : <span style={{ color: "green" }}>${TotalPrice}</span> ✅
        </b>
      </h2>
      </div>
    </div>
  );
};

export default Cart;
