import {
  ADD_TO_CART,
  CLEAR_CART,
  COUNT_CART_TOTALS,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
  UPDATE_ORDER_DETAILS,
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
        }
        return cartItem;
      });

      return { ...state, cart: tempCart };
    } else {
      const newItem = {
        id: product.id + variant.id,
        product_id: product.id,
        variant_id: variant.id,
        brand: product.brand,
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

  if (action.type === TOGGLE_CART_ITEM_AMOUNT) {
    const { id, value } = action.payload;
    const tempCart = state.cart
      .map((item) => {
        if (item.id === id) {
          if (value === "inc") {
            let newAmount = item.amount + 1;
            if (newAmount > item.max) {
              newAmount = item.max;
            }
            return { ...item, amount: newAmount };
          }
          if (value === "dec") {
            let newAmount = item.amount - 1;
            // if newAmount = 0, item will be removed afterwards with filter
            return { ...item, amount: newAmount };
          }
        }
        return item;
      })
      .filter((item) => item.amount > 0);
    return { ...state, cart: tempCart };
  }

  if (action.type === COUNT_CART_TOTALS) {
    const { total_items, total_amount } = state.cart.reduce(
      (total, cartItem) => {
        const { amount, price } = cartItem;
        total.total_items += amount;
        total.total_amount += price * amount;
        return total;
      },
      {
        total_items: 0,
        total_amount: 0,
      }
    );
    return { ...state, total_items, total_amount };
  }

  if (action.type === UPDATE_ORDER_DETAILS) {
    return {
      ...state,
      order_details: { ...state.order_details, ...action.payload },
    };
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};
export default cart_reducer;
