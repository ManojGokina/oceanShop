import {
  GET_ALL_PRODUCTS_LIST_REQUEST,
  GET_ALL_PRODUCTS_LIST_SUCCESS,
  GET_ALL_PRODUCTS_LIST_FAILURE,
  GET_MENS_CLOTHING_REQUEST,
  GET_MENS_CLOTHING_SUCCESS,
  GET_MENS_CLOTHING_FAILURE,
  GET_WOMENS_CLOTHING_REQUEST,
  GET_WOMENS_CLOTHING_SUCCESS,
  GET_WOMENS_CLOTHING_FAILURE,
  GET_ELECTRONICS_REQUEST,
  GET_ELECTRONICS_SUCCESS,
  GET_ELECTRONICS_FAILURE,
  GET_JEWELERY_ITEMS_REQUEST,
  GET_JEWELERY_ITEMS_SUCCESS,
  GET_JEWELERY_ITEMS_FAILURE,
} from "../Action/ProductAction";

const initialState = {
  productList: [],
  mensClothingList: [],
  womensClothingList: [],
  electonicsItemsList: [],
  jeweleryItemsList: [],
  loading: false,
  message: "No Products Found!",
  successStatus: false,
};

export const products = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_PRODUCTS_LIST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_ALL_PRODUCTS_LIST_SUCCESS:
      return {
        ...state,
        productList: payload,
        loading: false,
      };

    case GET_ALL_PRODUCTS_LIST_FAILURE:
      return {
        ...state,
        loading: false,
        message: payload.error ? payload.error : state.message,
      };
    case GET_MENS_CLOTHING_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_MENS_CLOTHING_SUCCESS:
      return {
        ...state,
        loading: false,
        mensClothingList: payload,
      };
    case GET_MENS_CLOTHING_FAILURE:
      return {
        ...state,
        loading: false,
        message: payload.error ? payload.error : state.message,
      };
    case GET_WOMENS_CLOTHING_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_WOMENS_CLOTHING_SUCCESS:
      return {
        ...state,
        loading: false,
        womensClothingList: payload,
      };

    case GET_WOMENS_CLOTHING_FAILURE:
      return {
        ...state,
        loading: false,
        message: payload.error ? payload.error : state.message,
      };
    case GET_ELECTRONICS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_ELECTRONICS_SUCCESS:
      return {
        ...state,
        loading: false,
        electonicsItemsList: payload,
      };
    case GET_ELECTRONICS_FAILURE:
      return {
        ...state,
        loading: false,
        message: payload.error ? payload.error : state.message,
      };

    case GET_JEWELERY_ITEMS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_JEWELERY_ITEMS_SUCCESS:
      return {
        ...state,
        loading: false,
        electonicsItemsList: payload,
      };
    case GET_JEWELERY_ITEMS_FAILURE:
      return {
        ...state,
        loading: false,
        message: payload.error ? payload.error : state.message,
      };
    default:
      return {
        ...state,
      };
  }
};
