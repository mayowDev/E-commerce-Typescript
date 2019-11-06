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
    

}


// ==== types for state ===
type Product = {
    id: string,
    name: string,
    price: number
}

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


// export type myMethods={
//     inCart: boolean;
//     count: number;

//   }