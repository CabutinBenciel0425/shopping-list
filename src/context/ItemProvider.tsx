import { useEffect, useReducer } from "react";
import { itemReducer } from "../reducers/itemReducer";
import { ItemContext } from "./ItemContext";
import type { itemState } from "../reducers/itemTypes";

export function ItemProvider({ children }: { children: React.ReactNode }) {
  const storedList = localStorage.getItem("list");

  const initialState: itemState = storedList
    ? { items: JSON.parse(storedList) }
    : { items: [] };

  const [state, dispatch] = useReducer(itemReducer, initialState);

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(state.items));
  }, [state.items]);

  return (
    <ItemContext.Provider value={{ state, dispatch }}>
      {children}
    </ItemContext.Provider>
  );
}
