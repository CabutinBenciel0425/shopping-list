import { HiPencil } from "react-icons/hi2";
import { FaTrashCan } from "react-icons/fa6";
import Button from "./Button";
import { useUI } from "../hooks/useUI";

function Actions({ id }: { id: number }) {
  const { openModal } = useUI();
  return (
    <div className="flex items-center gap-4">
      <Button
        variant="medium"
        onClick={() => console.log("Clicked update button")}
      >
        <HiPencil />
      </Button>
      <Button variant="danger" onClick={() => openModal("delete", id)}>
        <FaTrashCan />
      </Button>
    </div>
  );
}

export default Actions;
