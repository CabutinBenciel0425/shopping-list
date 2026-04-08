import { useContext } from "react";
import { ItemContext } from "../context/ItemContext";

export function useItems() {
  const { state, dispatch } = useContext(ItemContext);

  function updateItem(id: number, item: string) {
    dispatch({
      type: "UPDATE_ITEM",
      payload: {
        id,
        item,
      },
    });
  }

  function addItem(value: string) {
    dispatch({
      type: "ADD_ITEM",
      payload: {
        id: Date.now(),
        item: value,
        quantity: 1,
        date_created: new Date().toISOString(),
        isPurchased: false,
      },
    });
  }

  return { state, dispatch, updateItem, addItem };
}
