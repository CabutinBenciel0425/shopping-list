import { useUI } from "../hooks/useUI";
import Modal from "./Modal";
import AddUpdateItemForm from "./modals/AddUpdateItemForm";
import DeleteItemForm from "./modals/DeleteItemForm";

function ModalRoot() {
  const { state, closeModal } = useUI();
  if (!state.modal.isOpen) return null;

  return (
    <Modal onClose={closeModal} className="w-100">
      {state.modal.type === "add" && <AddUpdateItemForm />}
      {state.modal.type === "delete" && <DeleteItemForm />}
      {state.modal.type === "update" && <AddUpdateItemForm />}
    </Modal>
  );
}

export default ModalRoot;
