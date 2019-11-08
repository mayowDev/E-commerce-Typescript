import React, { Component} from "react";
import ContextInterface from './interfaces/ContextInterface'
import { storeProducts, detailProduct } from "./data";
import {Mystate} from './interfaces/ContextInterface';




// const ProductContext = React.createContext(); // my original way

const ProductContext = React.createContext<ContextInterface | null>(null); //typescript way


// provider
class ProductProvider extends Component <ContextInterface>{
  state:Mystate = {
    products: [],
    cart: [], 
    detailProduct: detailProduct,
    modal: false,
    modalProduct: detailProduct,
    cartSubTotal: 0,
    cartTax: 0,
    cartTotal: 0
  };

  // componentDidMount
  componentDidMount() {
    this.setProducts();
  }

  // setProducts
  setProducts = () => {
    let copyProducts: any[] =[];
    storeProducts.forEach(item => {
      const singleItem = { ...item };
      copyProducts = [...copyProducts, singleItem];
    });

    this.setState({ products: copyProducts });
  };
  // getItem
  getItem = (id: string) => {
    
    const product = this.state.products.find(item => item.id === id);
    return product;
  };

  // addToCart
  addToCart = (id: string ) => {
    const { products, cart } = this.state;
    let copyProducts = [...products];
    const getitem: any =this.getItem(id)
    const index = copyProducts.indexOf(getitem);
    const product:any = copyProducts[index];
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;
    this.setState(
      () => {
        return { products: copyProducts, cart: [...cart, product] };
      },
      // callback to call addTotals white addTocart
      () => {
        this.addTotals();
      }
    );
  };
  // openModal when we click icon cart plus
  openModal = (id:string) => {
    const product = this.getItem(id);
    this.setState(() => {
      return { modalProduct: product, modalOpen: true };
    });
  };

  // closeModal
  closeModal = () => {
    this.setState(() => {
      return { modalOpen: false };
    });
  };
  // handleDetail
  handleDetail = (id:string) => {
    const product = this.getItem(id);
    this.setState(() => {
      return { detailProduct: product };
    });
  };

  // incremant
  increment = (id:string) => {
    let copycart = [...this.state.cart];
    // find index of our selecteditem
    const selecteditem:any = copycart.find((item:any) => item.id === id);
    const index = copycart.indexOf(selecteditem);
    const product:any = copycart[index];

    // change count and total based on incremented item
    product.count = product.count + 1;
    product.total = product.count * product.price;

    this.setState(
      () => {
        return {
          cart: [...copycart]
        };
      },
      () => {
        this.addTotals();
      }
    );
  };
  // decrement
  decrement = (id:string) => {
    let copycart:any = [...this.state.cart];
    const selecteditem:any = copycart.find((item:any)=> item.id === id);
    const index = copycart.indexOf(selecteditem);
    const product:any = copycart[index];

    // change count and total based on incremented item
    product.count = product.count - 1;

    // check if product is less than 0 then remove

    if (product.count === 0) {
      this.removeProduct(id);
    } else {
      product.total = product.count * product.price;

      this.setState(
        () => {
          return {
            cart: [...copycart]
          };
        },
        () => {
          this.addTotals();
        }
      );
    }
  };

  // removeproduct
  removeProduct = (id:string) => {
    let tempproduct = [...this.state.products];
    let tempcart = [...this.state.cart];

    // filterout selected item
    tempcart = tempcart.filter((item:any) => item.id !== id);
    // find selcted/removed item from products
    const getitem:any=this.getItem(id)
    const index = tempproduct.indexOf(getitem);
    let removedProduct:any = tempproduct[index];
    removedProduct.inCart = false;
    removedProduct.count = 0;
    removedProduct.total = 0;

    // set our states to new changes
    this.setState(
      () => {
        return {
          cart: [...tempcart],
          products: [...tempproduct]
        };
      },
      () => {
        this.addTotals();
      }
    );
  };
  // clearCart
  clearCart = () => {
    this.setState(
      () => {
        return { cart: [] };
      },
      () => {
        this.setProducts();
        this.addTotals();
      }
    );
  };

  // addtotals
  addTotals = () => {
    let subtotal = 0;
    this.state.cart.map((item:any) => (subtotal += item.total));
    const temptax = subtotal * 0.1;
    const Tax = parseFloat(temptax.toFixed(2));
    const total = subtotal + Tax;
    this.setState(() => {
      return {
        cartSubTotal: subtotal,
        cartTax: Tax,
        cartTotal: total
      };
    });
  };
  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart,
          openModal: this.openModal,
          closeModal: this.closeModal,
          increment: this.increment,
          decrement: this.decrement,
          removeProduct: this.removeProduct,
          clearCart: this.clearCart
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}
const ProductConsumer = ProductContext.Consumer;
// const Provider=ProductContext.Consumer;
export  { ProductConsumer, ProductProvider };
