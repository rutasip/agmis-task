import React, { Component } from "react";
import { connect } from "react-redux";
import {
  filterProductsFromPrice,
  filterProductsToPrice,
  filterProductsByKeyword,
  resetFilters,
} from "../actions/productActions";
import "./Filter.css";

class Filter extends Component {
  render() {
    return !this.props.filteredProducts ? (
      <div>Loading...</div>
    ) : (
      <div className="filter">
        <div className="filter-result">
          {this.props.filteredProducts.length} Product(s)
        </div>
        <form className="filter-keyword">
          <label>
            Search{" "}
            <input
              type="text"
              name="keyword"
              value={this.props.keyword}
              onChange={(e) =>
                this.props.filterProductsByKeyword(
                  this.props.filteredProducts,
                  e.target.value
                )
              }
            />
          </label>
        </form>
        <div className="filter-price">
          Price From{" "}
          <select
            value={this.props.priceFrom}
            onChange={(e) =>
              this.props.filterProductsFromPrice(
                this.props.filteredProducts,
                e.target.value
              )
            }
          >
            <option value="" selected>
              All
            </option>
            <option value="9">9</option>
            <option value="23">23</option>
            <option value="56">56</option>
            <option value="114">114</option>
          </select>{" "}
          Price To{" "}
          <select
            value={this.props.priceTo}
            onChange={(e) =>
              this.props.filterProductsToPrice(
                this.props.filteredProducts,
                e.target.value
              )
            }
          >
            <option value="" selected>
              All
            </option>
            <option value="23">23</option>
            <option value="56">56</option>
            <option value="114">114</option>
            <option value="700">700</option>
          </select>
        </div>
        <button onClick={() => this.props.resetFilters(this.props.products)}>
          Reset Filters
        </button>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    priceFrom: state.products.priceFrom,
    priceTo: state.products.priceTo,
    keyword: state.products.keyword,
    products: state.products.items,
    filteredProducts: state.products.filteredItems,
  }),
  {
    filterProductsFromPrice,
    filterProductsToPrice,
    filterProductsByKeyword,
    resetFilters,
  }
)(Filter);
