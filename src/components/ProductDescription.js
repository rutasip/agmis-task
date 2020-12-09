import React from "react";
import formatCurrency from "../util";
import { useLocation } from "react-router-dom";
import "./ProductDescription.css";

function ProductDescription() {
  const { state } = useLocation();

  return (
    <section>
      <div className="product-details">
        <img src={state.image} alt={state.title}></img>
        <p>
          <strong>{state.title}</strong>
        </p>
        <p>Description: {state.description}</p>
        <p>In Stock: {state.stock}</p>
        <p>Category: {state.category}</p>
        <p>Price: {formatCurrency(state.price)}</p>
      </div>
    </section>
  );
}

export default ProductDescription;
