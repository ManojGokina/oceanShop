import {combineReducers} from 'redux';
import {menClothes} from './product-reducer';
import {womenClothesReducer} from './womensProduct-reducer';
import {electronicsReducer} from './electronicsReducer';
import { jeweleryReducer } from './jeweleryReducer';

const rootReducer = combineReducers ({
   products:menClothes,
   womensProductsList:womenClothesReducer,
   ElectronicsList:electronicsReducer,
   JeweleryList:jeweleryReducer,
})

export default rootReducer;