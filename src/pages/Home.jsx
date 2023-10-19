import React, { useEffect } from "react";
import { add } from "../Redux/Cartslice";
import { useDispatch, useSelector } from "react-redux";
import { STATUSES, fetchProducts } from "../Redux/ProductSlice";
import toast from "react-hot-toast";

const Home = () => {
  const dispatch = useDispatch();
  const { data: products, status } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const handleAdd = (product) => {
    dispatch(add(product));
    toast.success("Item added to cart");
  };
  if (status === STATUSES.LOADING) {
    return (
      <h2
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontWeight: "bold",
          marginTop: "20rem",
        }}
      >
        <div className="lds-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </h2>
    );
  }

  return (
    <div className="productsWrapper">
      {products?.map((product) => (
        <div className="card" key={product.id}>
          <img src={product.image} alt="img" />
          <h4>{product.title}</h4>
          <h5>${product.price}</h5>
          <button className="btn" onClick={() => handleAdd(product)}>
            Add to cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Home;
