import Quantity from "./Quantity";
import Actions from "./Actions";
import type { ItemsType } from "../data/Items";
import { useItems } from "../hooks/useItems";

type ListItemProps = {
  item: ItemsType;
};

export default function ListItem({ item }: ListItemProps) {
  const { id, item: product, isPurchased } = item;
  const { dispatch } = useItems();

  function handleToggle() {
    dispatch({
      type: "TOGGLE_ITEM",
      payload: id,
    });
  }

  return (
    <li className="grid grid-cols-[auto_auto_1fr_auto] gap-4 items-center py-2 border-b-2 border-b-cyan-900">
      <input
        type="checkbox"
        id={`${id}`}
        className="w-6 h-6"
        checked={isPurchased}
        onChange={handleToggle}
      />
      <Quantity item={item} />

      <div>
        <label
          className={`text-4xl cursor-pointer ${isPurchased ? "line-through text-gray-500" : ""}`}
          htmlFor={`${id}`}
        >
          {product}
        </label>
      </div>

      <Actions item={item} />
    </li>
  );
}
