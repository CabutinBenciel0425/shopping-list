import { useItems } from "../../hooks/useItems";
import { useUI } from "../../hooks/useUI";
import Button from "../Button";

export default function DeleteItemForm() {
  const { state, closeModal } = useUI();
  const { dispatch } = useItems();

  const id = state.modal.payload as number;

  function handleDelete() {
    dispatch({
      type: "DELETE_ITEM",
      payload: id,
    });
    closeModal();
  }

  return (
    <div className="flex flex-col gap-4 text-black">
      <h2 className="text-xl font-bold">
        Are you sure you want to delete this item?
      </h2>

      <div className="flex justify-end gap-4">
        <Button variant="small" onClick={closeModal}>
          Cancel
        </Button>

        <Button variant="danger" onClick={handleDelete}>
          Delete
        </Button>
      </div>
    </div>
  );
}
