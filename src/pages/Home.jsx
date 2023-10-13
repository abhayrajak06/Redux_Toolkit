import React, { useEffect, useState } from "react";
import { add } from "../Redux/Cartslice";
import { useDispatch } from "react-redux";

const Home = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProducts = async () => {
      //   const res = await fetch("https://fakestoreapi.com/products");
      const res = await fetch(
        "https://hub.dummyapis.com/products?noofRecords=10&idStarts=1001&currency=usd"
      );
      const data = await res.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  const handleAdd = (product) => {
    dispatch(add(product));
  };

  return (
    <div className="productsWrapper">
      {products?.map((product) => (
        <div className="card" key={product.id}>
          <img src={product.image} alt="img" />
          <h4>{product.title}</h4>
          <h5>{product.price}</h5>
          <button className="btn" onClick={() => handleAdd(product)}>
            Add to cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Home;
