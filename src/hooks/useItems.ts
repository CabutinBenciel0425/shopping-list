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

  return { state, dispatch, updateItem };
}
