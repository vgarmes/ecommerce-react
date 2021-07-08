import {
  ADD_TO_CART,
  CLEAR_CART,
  COUNT_CART_TOTALS,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
} from "../actions";

const cart_reducer = (state, action) => {
  if (action.type === ADD_TO_CART) {
    const { product, variant, size, amount } = action.payload;
    const tempItem = state.cart.find(
      (item) => item.id === product.id + variant.id
    );

    if (tempItem) {
      const tempCart = state.cart.map((cartItem) => {
        if (cartItem.id === product.id + variant.id) {
          let newAmount = cartItem.amount + amount;
          if (newAmount > cartItem.max) {
            newAmount = cartItem.max;
          }
          return { ...cartItem, amount: newAmount };
        } else {
          return cartItem;
        }
      });

      return { ...state, cart: tempCart };
    } else {
      const newItem = {
        id: product.id + variant.id,
        product_id: product.id,
        variant_id: variant.id,
        model: product.model,
        color: variant.color,
        hex: variant.hex,
        amount,
        image: variant.image.file.url,
        price: product.price,
        size: size,
        max: variant.stock[size],
      };
      return { ...state, cart: [...state.cart, newItem] };
    }
  }

  if (action.type === REMOVE_CART_ITEM) {
    const tempCart = state.cart.filter((item) => item.id !== action.payload);
    return { ...state, cart: tempCart };
  }

  if (action.type === CLEAR_CART) {
    return { ...state, cart: [] };
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};
export default cart_reducer;
