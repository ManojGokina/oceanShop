import {
    GET_PRODUCT_DETAILS,
    GET_PRODUCT_DETAILS_SUCCESS,
    GET_PRODUCT_DETAILS_FAILURE
} from '../constants/productDetailsType';

const initialState = {
    productDescription:{},
    loading:false,
    message: "Error!",
};

export const productDetailsReducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case GET_PRODUCT_DETAILS:
        return {
          ...state,
          loading: true,
        }
      case GET_PRODUCT_DETAILS_SUCCESS:
        return {
          ...state,
          productDescription: payload,
          loading: false,
        }
      case GET_PRODUCT_DETAILS_FAILURE:
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