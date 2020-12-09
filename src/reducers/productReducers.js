import {
  FETCH_PRODUCTS,
  FILTER_PRODUCTS_FROM_PRICE,
  FILTER_PRODUCTS_TO_PRICE,
  FILTER_PRODUCTS_BY_KEYWORD,
  RESET_FILTERS,
} from "../types";

export const productsReducer = (state = {}, action) => {
  switch (action.type) {
    case FILTER_PRODUCTS_FROM_PRICE:
      return {
        ...state,
        priceFrom: action.payload.priceFrom,
        filteredItems: action.payload.items,
      };
    case FILTER_PRODUCTS_TO_PRICE:
      return {
        ...state,
        priceTo: action.payload.priceTo,
        filteredItems: action.payload.items,
      };
    case FILTER_PRODUCTS_BY_KEYWORD:
      return {
        ...state,
        keyword: action.payload.keyword,
        filteredItems: action.payload.items,
      };
    case RESET_FILTERS:
      return {
        ...state,
        priceFrom: "",
        priceTo: "",
        keyword: "",
        filteredItems: action.payload.items,
      };
    case FETCH_PRODUCTS:
      return { items: action.payload, filteredItems: action.payload };
    default:
      return state;
  }
};
