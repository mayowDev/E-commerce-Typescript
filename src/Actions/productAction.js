import { SET_PRODUCTS,GET_ITEM,REMOVE_PRODUCT}from './Types'
import { storeProducts} from "./data";




// setProducts
export const setProduct=()=>async dispatch=>{
    
    let copyProducts=[];
    storeProducts.forEach(item => {
        const singleItem = { ...item };
        copyProducts = [...copyProducts, singleItem];
        });
    //   set products to copyproducts
    dispatch({
        type:SET_PRODUCTS,
        payload:copyProducts
    })

}

    //getItem
export const getItem=(id)=>async dispatch=>{
    
    dispatch({
        type:GET_ITEM,
        
    })

} 