import { useUI } from "../hooks/useUI";
import Modal from "./Modal";
import AddItemForm from "./modals/AddItemForm";
import DeleteItemForm from "./modals/DeleteItemForm";

function ModalRoot() {
  const { state, closeModal } = useUI();
  if (!state.modal.isOpen) return null;

  return (
    <Modal onClose={closeModal} className="w-100">
      {state.modal.type === "add" && <AddItemForm />}
      {state.modal.type === "delete" && <DeleteItemForm />}
    </Modal>
  );
}

export default ModalRoot;
