import React, { Component } from "react";
import formatCurrency from "../util";
import Fade from "react-reveal/Fade";
import { connect } from "react-redux";
import { fetchProducts } from "../actions/productActions";
import { Link } from "react-router-dom";

import "./Products.css";

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null,
    };
  }
  componentDidMount() {
    this.props.fetchProducts();
  }
  render() {
    return (
      <div>
        <Fade bottom cascade>
          {!this.props.products ? (
            <div>Loading...</div>
          ) : (
            <ul className="products">
              {this.props.products.map((product) => (
                <li key={product._id}>
                  <div className="product">
                    <Link
                      to={{
                        pathname: `/product-description/${product._id}`,
                        state: product,
                      }}
                    >
                      <img src={product.image} alt={product.title}></img>
                      <p>{product.title}</p>
                    </Link>
                    <div className="product-category">
                      <p>Category: {product.category}</p>
                    </div>
                    <div className="product-price">
                      <div>{formatCurrency(product.price)}</div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </Fade>
      </div>
    );
  }
}
export default connect(
  (state) => ({ products: state.products.filteredItems }),
  {
    fetchProducts,
  }
)(Products);
