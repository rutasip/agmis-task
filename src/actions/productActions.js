import { FETCH_PRODUCTS } from "../types";
import { FILTER_PRODUCTS_FROM_PRICE } from "../types";
import { FILTER_PRODUCTS_TO_PRICE } from "../types";
import { FILTER_PRODUCTS_BY_KEYWORD } from "../types";
import { RESET_FILTERS } from "../types";

export const fetchProducts = () => async (dispatch) => {
  const res = await fetch(`data.json`);
  const data = await res.json();
  dispatch({
    type: FETCH_PRODUCTS,
    payload: data.products,
  });
};

export const filterProductsFromPrice = (products, priceFrom) => (dispatch) => {
  dispatch({
    type: FILTER_PRODUCTS_FROM_PRICE,
    payload: {
      priceFrom: priceFrom,
      items:
        priceFrom === ""
          ? products
          : products.filter(
              (product) => parseFloat(priceFrom) <= parseFloat(product.price)
            ),
    },
  });
};

export const filterProductsToPrice = (products, priceTo) => (dispatch) => {
  dispatch({
    type: FILTER_PRODUCTS_TO_PRICE,
    payload: {
      priceFrom: priceTo,
      items:
        priceTo === ""
          ? products
          : products.filter(
              (product) => parseFloat(priceTo) >= parseFloat(product.price)
            ),
    },
  });
};

export const filterProductsByKeyword = (products, keyword) => (dispatch) => {
  dispatch({
    type: FILTER_PRODUCTS_BY_KEYWORD,
    payload: {
      keyword: keyword,
      items:
        keyword === ""
          ? products
          : products.filter(
              (product) =>
                product.title.toLowerCase().includes(keyword.toLowerCase()) ||
                product.category.toLowerCase().includes(keyword.toLowerCase())
            ),
    },
  });
};

export const resetFilters = (products) => (dispatch) => {
  dispatch({
    type: RESET_FILTERS,
    payload: {
      priceFrom: "",
      priceTo: "",
      keyword: "",
      items: products,
    },
  });
};
