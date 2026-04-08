import type { ItemsType } from "../../data/Items";
import { useItems } from "../../hooks/useItems";
import { useUI } from "../../hooks/useUI";
import Button from "../Button";

export default function DeleteItemForm() {
  const { state, closeModal } = useUI();
  const { dispatch } = useItems();

  const currentItem = state.modal.payload as ItemsType;

  function handleDelete() {
    dispatch({
      type: "DELETE_ITEM",
      payload: currentItem.id,
    });
    closeModal();
  }

  return (
    <div className="flex flex-col gap-4 text-black">
      <h2 className="text-xl font-bold">
        Are you sure you want to delete this{" "}
        <span className="font-bold text-2xl">"{currentItem.item}"</span>?
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
