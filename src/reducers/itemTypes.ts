import type { ItemsType } from "../data/Items";

export type itemState = {
  items: ItemsType[];
};

export type itemActions =
  | { type: "ADD_ITEM"; payload: ItemsType }
  | { type: "DELETE_ITEM"; payload: number }
  | { type: "TOGGLE_ITEM"; payload: number }
  | { type: "INCREASE_QUANTITY"; payload: number }
  | { type: "DECREASE_QUANTITY"; payload: number }
  | {
      type: "UPDATE_ITEM";
      payload: {
        id: number;
        item: string;
      };
    };
