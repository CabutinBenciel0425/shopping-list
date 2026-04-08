import { useContext } from "react";
import { UIContext } from "../context/UIContext";
import type { ItemsType } from "../data/Items";

export function useUI() {
  const { state, dispatch } = useContext(UIContext);

  function openModal(
    type: "add" | "update" | "delete",
    payload?: ItemsType | number | null,
  ) {
    dispatch({
      type: "OPEN_MODAL",
      payload: {
        type,
        payload,
      },
    });
  }

  function closeModal() {
    dispatch({ type: "CLOSE_MODAL" });
  }

  return { state, openModal, closeModal };
}
