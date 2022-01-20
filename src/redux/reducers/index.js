import {combineReducers} from 'redux';
import {menClothes} from './product-reducer';
import {womenClothesReducer} from './womensProduct-reducer';
import {electronicsReducer} from './electronicsReducer';
import { jeweleryReducer } from './jeweleryReducer';
import { productDetailsReducer } from './productDetailsReducer';

const rootReducer = combineReducers ({
   products:menClothes,
   womensProductsList:womenClothesReducer,
   ElectronicsList:electronicsReducer,
   JeweleryList:jeweleryReducer,
   productDescription:productDetailsReducer
})

export default rootReducer;