import { HiPencil } from "react-icons/hi2";
import { FaTrashCan } from "react-icons/fa6";
import Button from "./Button";
import { useUI } from "../hooks/useUI";
import type { ItemsType } from "../data/Items";

function Actions({ item }: { item: ItemsType }) {
  const { openModal } = useUI();
  return (
    <div className="flex items-center gap-4">
      <Button variant="medium" onClick={() => openModal("update", item)}>
        <HiPencil />
      </Button>
      <Button variant="danger" onClick={() => openModal("delete", item.id)}>
        <FaTrashCan />
      </Button>
    </div>
  );
}

export default Actions;
