import { FaCartPlus } from "react-icons/fa";
import Button from "../UI/Button";
import { useUI } from "../hooks/useUI";

function Header() {
  const { openModal } = useUI();

  return (
    <div className="w-full h-[15%] flex ">
      <div className="ml-auto">
        <Button variant="large" onClick={() => openModal("add")}>
          <FaCartPlus />
        </Button>
      </div>
    </div>
  );
}

export default Header;
