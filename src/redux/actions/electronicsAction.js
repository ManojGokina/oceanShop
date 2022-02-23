import {
    GET_ELECTRONICS_PRODUCTS,
    GET_ELECTRONICS_PRODUCTS_SUCCESS,
    GET_ELECTRONICS_PRODUCTS_FAILED
} from '../constants/electronicsType';
  
  import { BASE_URL } from "../../Products/baseApi";
  
  export const electronicsItems = () => (dispatch) => {
    const API_URL = `${BASE_URL}/products/category/electronics`;
    dispatch({ type: GET_ELECTRONICS_PRODUCTS });
    fetch(API_URL)
      .then((response) => response.json())
      .then((responseJson) => {
        dispatch({ type: GET_ELECTRONICS_PRODUCTS_SUCCESS, payload: responseJson });
      })
      .catch((err) => dispatch({ type: GET_ELECTRONICS_PRODUCTS_FAILED, payload: err }));
  };