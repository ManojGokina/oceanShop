import {
    GET_ELECTRONICS_PRODUCTS,
    GET_ELECTRONICS_PRODUCTS_SUCCESS,
    GET_ELECTRONICS_PRODUCTS_FAILED
} from '../constants/electronicsType';

const initialState = {
    ElectronicsList:[],
    loading:false,
    message: "No products Found!",
}
console.log(initialState);
export const electronicsReducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case GET_ELECTRONICS_PRODUCTS:
        return {
          ...state,
          loading: true,
        }
      case GET_ELECTRONICS_PRODUCTS_SUCCESS:
        return {
          ...state,
          ElectronicsList: payload,
          loading: false,
        }
      case GET_ELECTRONICS_PRODUCTS_FAILED:
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