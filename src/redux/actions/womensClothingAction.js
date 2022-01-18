import {
    GET_WOMENS_PRODUCTS,
    GET_WOMENS_PRODUCTS_SUCCESS,
    GET_WOMENS_PRODUCTS_FAILED
} from '../constants/womensClothingAction-type';

  
  import { BASE_URL } from "../../Products/baseApi";
  
  export const womenClothingItems = () => (dispatch) => {
    const API_URL = `${BASE_URL}/products/category/women's clothing`;
    console.log(API_URL);
    dispatch({ type: GET_WOMENS_PRODUCTS });
    fetch(API_URL)
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        dispatch({ type: GET_WOMENS_PRODUCTS_SUCCESS, payload: responseJson });
      })
      .catch((err) => dispatch({ type: GET_WOMENS_PRODUCTS_FAILED, payload: err }));
  };