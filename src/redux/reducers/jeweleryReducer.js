import {
    GET_JEWELERY_PRODUCTS,
    GET_JEWELERY_PRODUCTS_SUCCESS,
    GET_JEWELERY_PRODUCTS_FAILED
} from '../constants/JeweleryTypes';

const initialState = {
    JeweleryList:[],
    loading:false,
    message: "No products Found!",
}
console.log(initialState);
export const jeweleryReducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case GET_JEWELERY_PRODUCTS:
        return {
          ...state,
          loading: true,
        }
      case GET_JEWELERY_PRODUCTS_SUCCESS:
        return {
          ...state,
          JeweleryList: payload,
          loading: false,
        }
      case GET_JEWELERY_PRODUCTS_FAILED:
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