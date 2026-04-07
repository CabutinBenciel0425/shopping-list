import { useReducer } from "react";
import { itemReducer } from "../reducers/itemReducer";
import { Items } from "../data/Items";
import { ItemContext } from "./ItemContext";
import type { itemState } from "../reducers/itemTypes";

export function ItemProvider({ children }: { children: React.ReactNode }) {
  const initialState: itemState = {
    items: Items,
  };
  const [state, dispatch] = useReducer(itemReducer, initialState);

  return (
    <ItemContext.Provider value={{ state, dispatch }}>
      {children}
    </ItemContext.Provider>
  );
}
