import React, { useContext, useState } from "react";
import { Context } from "../Context";
import CartItem from "../components/CartItem";

function Cart() {
  const { cartItems, PlaceOrder, iscart } = useContext(Context);
  // const [button, setbutton] = useState("Place Order");
  const TotalCost = cartItems.length * 400;
  const cartItemElements = cartItems.map((item) => (
    <CartItem key={item.id} item={item} />
  ));
  function checkCart() {
    if (iscart && cartItems.length) {
      return <h1>Ordering.....</h1>;
    } else if (iscart === false && cartItems.length === 0) {
      return <h1>Enter the item in the cart</h1>;
    }
    return <button onClick={PlaceOrder}>Place Order</button>;
  }
  return (
    <main className="cart-page">
      <h1>Check out</h1>
      {cartItemElements}
      <p className="total-cost">
        Total=
        {TotalCost.toLocaleString("en-IN", {
          style: "currency",
          currency: "INR",
        })}
      </p>
      <div className="order-button">
        {/* {iscart && cartItems.length ? (
          <h1>Ordering...</h1>
        ) : (
          <button onClick={PlaceOrder}>Place Order</button>
        )} */}
        {checkCart()}
        {/* <button onClick={Order}>{button}</button>; */}
      </div>
    </main>
  );
}

export default Cart;
