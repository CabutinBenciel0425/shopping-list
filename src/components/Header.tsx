import { FaCartPlus } from "react-icons/fa";
import Button from "../UI/Button";

function Header() {
  function handleAddBtn() {
    console.log("Clicked Add Btn");
  }

  return (
    <div className="w-full h-[15%] flex ">
      <div className="ml-auto">
        <Button variant="large" onClick={handleAddBtn}>
          <FaCartPlus />
        </Button>
      </div>
    </div>
  );
}

export default Header;
