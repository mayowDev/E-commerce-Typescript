import React from "react";
import CartItem from "./CartItem";


type val={
  value:any
}
export default function CartList({ value }:val) {
  const { cart } = value;

  return (
    <div className='container-fluid'>
      {cart.map((item:any) => {
        return <CartItem key={item.id} value={value} item={item} />;
      })}
    </div>
  );
}
