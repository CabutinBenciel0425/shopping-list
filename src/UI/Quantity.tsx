import { IoMdAdd } from "react-icons/io";
import { BsDash } from "react-icons/bs";
import Button from "./Button";
import { useItems } from "../hooks/useItems";
import { useUI } from "../hooks/useUI";
import type { ItemsType } from "../data/Items";

function Quantity({ item }: { item: ItemsType }) {
  const { dispatch } = useItems();
  const { openModal } = useUI();
  const { quantity, id } = item;

  function handleQuantityUpdate(action: string) {
    if (action === "dec" && quantity === 1) {
      openModal("delete", item);
      return;
    }

    if (action === "inc")
      dispatch({
        type: "INCREASE_QUANTITY",
        payload: id,
      });

    if (action === "dec")
      dispatch({
        type: "DECREASE_QUANTITY",
        payload: id,
      });
  }

  return (
    <div className="flex items-center gap-4">
      <Button variant="small" onClick={() => handleQuantityUpdate("inc")}>
        <IoMdAdd />
      </Button>
      <span className="text-3xl">{quantity}</span>
      <Button variant="small" onClick={() => handleQuantityUpdate("dec")}>
        <BsDash />
      </Button>
    </div>
  );
}

export default Quantity;
