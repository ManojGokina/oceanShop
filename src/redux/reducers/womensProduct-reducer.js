import {
    GET_WOMENS_PRODUCTS,
    GET_WOMENS_PRODUCTS_SUCCESS,
    GET_WOMENS_PRODUCTS_FAILED
} from '../constants/womensClothingAction-type';

const initialState = {
    womensProductsList:[],
    loading:false,
    message: "No products Found!",
};

export const womenClothesReducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case GET_WOMENS_PRODUCTS:
        return {
          ...state,
          loading: true,
        }
      case GET_WOMENS_PRODUCTS_SUCCESS:
        return {
          ...state,
          womensProductsList: payload,
          loading: false,
        }
      case GET_WOMENS_PRODUCTS_FAILED:
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