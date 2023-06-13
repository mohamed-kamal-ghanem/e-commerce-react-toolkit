import { cartActions } from "../slices/CartSlice";

// add Item To Cart

export function addToCart(newItem) {
  return (dispatch, getState) => {
    dispatch(cartActions.addItemToCart(newItem));
    const { cart } = getState();
    localStorage.setItem("cartItems", JSON.stringify(cart.cartItems));
  };
}

// remove Item From Cart

export function removeFromCart(id) {
  return (dispatch, getState) => {
    dispatch(cartActions.removeItemFromCart(id));
    const { cart } = getState();
    localStorage.setItem("cartItems", JSON.stringify(cart.cartItems));
  };
}
