import {
  GET_MENS_PRODUCTS,
  GET_MENS_PRODUCTS_SUCCESS,
  GET_MENS_PRODUCTS_FAILED,
} from "../constants/action-type";

import { BASE_URL } from "../../Products/baseApi";

export const menClothingItems = () => (dispatch) => {
  const API_URL = `${BASE_URL}/products/category/men's clothing`;
  console.log(API_URL);
  dispatch({ type: GET_MENS_PRODUCTS });
  fetch(API_URL)
    .then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson);
      dispatch({ type: GET_MENS_PRODUCTS_SUCCESS, payload: responseJson });
    })
    .catch((err) => dispatch({ type: GET_MENS_PRODUCTS_FAILED, payload: err }));
};
