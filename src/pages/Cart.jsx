import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../Redux/Cartslice";
import toast from "react-hot-toast";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(remove(id));
    toast.success("Item removed from the cart");
  };

  return (
    <div style={{ padding: "1rem" }}>
      <h3>Cart Page</h3>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {cartItems?.map((item) => (
          <div className="cartCard">
            <img src={item.image} alt="" />
            <h5>{item.title}</h5>
            <h5>${item.price}</h5>
            <button className="btn" onClick={() => handleRemove(item.id)}>
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
