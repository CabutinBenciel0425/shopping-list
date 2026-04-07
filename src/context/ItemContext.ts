import { createContext } from "react";
import type { itemActions, itemState } from "../reducers/itemTypes";

export type ItemContextType = {
  state: itemState;
  dispatch: React.Dispatch<itemActions>;
};

export const ItemContext = createContext<ItemContextType>({
  state: { items: [] },
  dispatch: () => {},
});
