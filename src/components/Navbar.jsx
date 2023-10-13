import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { useSelector } from "react-redux";

const Navbar = () => {
  const items = useSelector((state) => state.cart);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: "1rem",
      }}
    >
      <Link to={"/"} style={{ textDecoration: "none", fontWeight: "bold" }}>
        <span>Redux Toolkit</span>
      </Link>
      <div>
        <Link className="navLink" to={"/"} style={{ fontWeight: "bolder" }}>
          Home
        </Link>
        <Link
          className="navLink"
          to={"/cart"}
          style={{ marginRight: "1rem", fontWeight: "bolder" }}
        >
          Cart
        </Link>
        <span style={{ fontWeight: "bolder" }}>items: {items.length}</span>
      </div>
    </div>
  );
};

export default Navbar;
