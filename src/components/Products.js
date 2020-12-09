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
      showFetchButton: true,
      product: null,
    };
  }

  loadProducts = () => {
    this.props.fetchProducts();
    this.setState({ showFetchButton: false });
  };

  render() {
    return (
      <div>
        {this.state.showFetchButton ? (
          <button onClick={this.loadProducts}>Load Products</button>
        ) : (
          <div>
            {!this.props.products ? (
              <div>Loading...</div>
            ) : (
              <Fade bottom cascade>
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
              </Fade>
            )}
          </div>
        )}
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
