import{
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
} from '../Types/ProductsTypes';
import Loader from '../Loader/loader';
import { BASE_URL } from '../../Products/baseApi';


export const mensClothingItems= ()=>(dispatch)=>{
   const API_URL = `${BASE_URL}/products/category/men's clothing`;
   dispatch({type: GET_MENS_CLOTHING_REQUEST});
   fetch(API_URL)
   .then((response) => response.json())
   .then((responseJson)=>
   dispatch({type:GET_MENS_CLOTHING_SUCCESS, payload:responseJson.data})
   )
   .catch((err)=>dispatch({type:GET_MENS_CLOTHING_FAILURE, payload:err}))
};
