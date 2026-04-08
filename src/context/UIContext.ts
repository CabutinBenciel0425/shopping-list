import { createContext } from "react";
import type { ItemsType } from "../data/Items";

export type UIState = {
  modal: {
    isOpen: boolean;
    type: "add" | "update" | "delete" | null;
    payload?: ItemsType | number | null;
  };
};

export type UIActions =
  | {
      type: "OPEN_MODAL";
      payload: {
        type: "add" | "update" | "delete";
        payload?: ItemsType | number | null;
      };
    }
  | { type: "CLOSE_MODAL" };

export const UIContext = createContext<{
  state: UIState;
  dispatch: React.Dispatch<UIActions>;
}>({
  state: {
    modal: {
      isOpen: false,
      type: null,
      payload: null,
    },
  },
  dispatch: () => {},
});
