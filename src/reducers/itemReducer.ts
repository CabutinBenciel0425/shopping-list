import type { itemActions, itemState } from "./itemTypes";

export function itemReducer(state: itemState, action: itemActions) {
  switch (action.type) {
    case "ADD_ITEM":
      return {
        items: [...state.items, action.payload],
      };

    case "DELETE_ITEM":
      return {
        items: state.items.filter((item) => item.id !== action.payload),
      };

    case "TOGGLE_ITEM":
      return {
        items: state.items.map((item) =>
          item.id === action.payload
            ? { ...item, isPurchased: !item.isPurchased }
            : item,
        ),
      };

    case "DECREASE_QUANTITY":
      return {
        items: state.items.map((item) =>
          item.id === action.payload
            ? { ...item, quantity: Math.max(0, item.quantity - 1) }
            : item,
        ),
      };

    case "INCREASE_QUANTITY":
      return {
        items: state.items.map((item) =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        ),
      };

    case "UPDATE_ITEM":
      return {
        items: state.items.map((item) =>
          item.id === action.payload.id
            ? { ...item, item: action.payload.item }
            : item,
        ),
      };

    default:
      return state;
  }
}
