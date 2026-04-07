import { HiPencil } from "react-icons/hi2";
import { FaTrashCan } from "react-icons/fa6";
import Button from "./Button";

function Actions({ id }: { id: number }) {
  console.log(id);
  return (
    <div className="flex items-center gap-4">
      <Button
        variant="medium"
        onClick={() => console.log("Clicked update button")}
      >
        <HiPencil />
      </Button>
      <Button
        variant="danger"
        onClick={() => console.log("Clicked delete button")}
      >
        <FaTrashCan />
      </Button>
    </div>
  );
}

export default Actions;
