import { IoMdAdd } from "react-icons/io";
import { BsDash } from "react-icons/bs";
import Button from "./Button";

function Quantity() {
  return (
    <div className="flex items-center gap-4">
      <Button variant="small" onClick={() => console.log("Increase quantity")}>
        <IoMdAdd />
      </Button>
      <span className="text-3xl">1</span>
      <Button variant="small" onClick={() => console.log("Decrease quantity")}>
        <BsDash />
      </Button>
    </div>
  );
}

export default Quantity;
