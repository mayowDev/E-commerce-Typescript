import {  detailProduct } from "./data";
import { SET_PRODUCTS,REMOVE_PRODUCT,GET_ITEM } from "../Actions/Types";

const intialState={
    products: [],
    cart: [],
    detailProduct: detailProduct,
    modal: false,
    modalProduct: detailProduct
}

export default (state=intialState, action)=>{
    switch(action.type){
        case SET_PRODUCTS:
            return {
                ...state,
                products:action.payload
            }
        default:
            return state; 
                  
    }

}