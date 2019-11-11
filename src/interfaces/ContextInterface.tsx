export default interface ContextInterface{
    handleDetail: (id: string) => void; 
    addToCart: (id: string) => void;
    openModal: (id: string) => void; 
    closeModal: () => void; 
    increment: (id: string) => void; 
    decrement: (id: string) => void; 
    removeProduct: (id: string) => void;
    clearCart: () => void;
    cartTotal: number; 


    // detailproduct types

    id:any;
    title:string;
    inCart:boolean;
    count:number;
    total:number;
    price:number;
    info:string;
    company:string;
    img:string;
    

}



type Product = {
    id: string,
    name: string,
    price: number
}
// ==== types for state ===
export type Mystate={
    products:Product[],
    cart:string[],
    detailProduct:{
        id: number; title: string; img: string; price: number; company: string; info: string;
        inCart: boolean; count: number; total: number; 
    },
    modal:boolean,
    modalProduct: {
      id: number;
      title: string;
      img: string;
      price: number;
      company: string;
      info: string;
      inCart: boolean;
      count: number;
      total: number;
    },
    cartSubTotal:number, 
    cartTax:number, 
    cartTotal:number, 
  
  }
export type valtype={
  id:any;
    title:string;
    inCart:boolean;
    count:number;
    total:number;
    price:number;
    info:string;
    company:string;
    img:string;
    
}