import type { UIActions, UIState } from "../context/UIContext";

export function UIReducer(state: UIState, action: UIActions): UIState {
  switch (action.type) {
    case "OPEN_MODAL":
      return {
        ...state,
        modal: {
          isOpen: true,
          type: action.payload.type,
          payload: action.payload.payload ?? null,
        },
      };
    case "CLOSE_MODAL":
      return {
        ...state,
        modal: {
          isOpen: false,
          type: null,
          payload: null,
        },
      };
    default:
      return state;
  }
}
