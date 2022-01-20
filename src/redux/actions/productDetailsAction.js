import {
    GET_PRODUCT_DETAILS,
    GET_PRODUCT_DETAILS_SUCCESS,
    GET_PRODUCT_DETAILS_FAILURE
} from '../constants/productDetailsType';

import { BASE_URL } from "../../Products/baseApi";
  
export const productDetails = (id) => (dispatch) => {
  const API_URL = `${BASE_URL}/products/${id}`;
  console.log(API_URL);
  dispatch({ type: GET_PRODUCT_DETAILS });
  fetch(API_URL)
    .then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson);
      dispatch({ type: GET_PRODUCT_DETAILS_SUCCESS, payload: responseJson });
    })
    .catch((err) => dispatch({ type: GET_PRODUCT_DETAILS_FAILURE, payload: err }));
};