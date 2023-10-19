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
      <h3 style={{ textAlign: "center" }}>
        You have {cartItems.length} items in your cart
      </h3>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          margin: "2rem",
          // width: "50%%",
          // gap: "2.6rem",
        }}
      >
        {cartItems?.map((item) => (
          <div key={item.id} className="cartCard">
            <img src={item.image} alt="" />
            <h5>{item.title.substring(0, 20)}...</h5>
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
