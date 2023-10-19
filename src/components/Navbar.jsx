import React from "react";
import { Link } from "react-router-dom";
import { FiShoppingBag } from "react-icons/fi";
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
        position: "sticky",
        top: "0",
        zIndex: "16",
        padding: "0.8rem",
        backgroundColor: "rgba(255, 255, 255, 0.95)",
        boxShadow:
          "rgba(50, 50, 93, 0.25) 0px 30px 60px -18px, rgba(0, 0, 0, 0.4) 0px 18px 36px -38px",
      }}
    >
      <Link to={"/"} style={{ textDecoration: "none", fontWeight: "bold" }}>
        <span>Redux Toolkit</span>
      </Link>
      <div style={{ display: "flex" }}>
        <Link className="navLink" to={"/"} style={{ fontWeight: "bolder" }}>
          Home
        </Link>
        <Link
          className="navLink"
          to={"/cart"}
          style={{ marginRight: "1rem", fontWeight: "bolder" }}
        >
          <FiShoppingBag size={22} />
          <span
            style={{
              borderRadius: "1rem",
              padding: "0.1rem",
              fontSize: "0.9rem",
            }}
          >
            {items.length}
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
