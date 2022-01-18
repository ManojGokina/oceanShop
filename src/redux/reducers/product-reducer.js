import {
GET_MENS_PRODUCTS,
GET_MENS_PRODUCTS_SUCCESS,
GET_MENS_PRODUCTS_FAILED} 
from '../constants/action-type';
const initialState = {
    products:[],
    loading:false,
    message: "No products Found!",
}
console.log(initialState);
export const menClothes = (state = initialState, { type, payload }) => {
    switch (type) {
      case GET_MENS_PRODUCTS:
        return {
          ...state,
          loading: true,
        }
      case GET_MENS_PRODUCTS_SUCCESS:
        return {
          ...state,
          products: payload,
          loading: false,
        }
      case GET_MENS_PRODUCTS_FAILED:
        return {
          ...state,
          loading: false,
          message: payload.error ? payload.error : state.message,
        }
    
        default:
            return {
              ...state
            }
        }
      }