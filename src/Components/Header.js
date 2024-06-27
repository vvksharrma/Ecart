import React from "react";
import { Link } from "react-router-dom";

const Header = ({ cartItems }) => {
  return (
    <div>
      <nav
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <h3>
          <Link style={{ textDecoration: "none", color: "inherit" }} to="/">
            Home
          </Link>
        </h3>
        <h3>
          <Link style={{ textDecoration: "none", color: "inherit" }} to="/cart">
            🛒{cartItems.length}
          </Link>
        </h3>
      </nav>
    </div>
  );
};

export default Header;
