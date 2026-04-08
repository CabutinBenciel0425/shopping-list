import type React from "react";
import { UIContext, type UIState } from "./UIContext";
import { UIReducer } from "../reducers/UIReducer";
import { useReducer } from "react";

export function UIProvider({ children }: { children: React.ReactNode }) {
  const initialState: UIState = {
    modal: {
      isOpen: false,
      type: null,
      payload: null,
    },
  };
  const [state, dispatch] = useReducer(UIReducer, initialState);

  return (
    <UIContext.Provider value={{ state, dispatch }}>
      {children}
    </UIContext.Provider>
  );
}
