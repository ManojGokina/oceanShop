import {
    GET_JEWELERY_PRODUCTS,
    GET_JEWELERY_PRODUCTS_SUCCESS,
    GET_JEWELERY_PRODUCTS_FAILED
} from '../constants/JeweleryTypes';

import { BASE_URL } from "../../Products/baseApi";
  
export const jeweleryItems = () => (dispatch) => {
  const API_URL = `${BASE_URL}/products/category/jewelery`;
  dispatch({ type: GET_JEWELERY_PRODUCTS });
  fetch(API_URL)
    .then((response) => response.json())
    .then((responseJson) => {
      dispatch({ type: GET_JEWELERY_PRODUCTS_SUCCESS, payload: responseJson });
    })
    .catch((err) => dispatch({ type: GET_JEWELERY_PRODUCTS_FAILED, payload: err }));
};