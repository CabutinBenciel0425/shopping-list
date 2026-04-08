import { useState } from "react";
import { useUI } from "../../hooks/useUI";
import { useItems } from "../../hooks/useItems";
import Button from "../Button";
import type { ItemsType } from "../../data/Items";

export default function AddUpdateItemForm() {
  const { addItem, updateItem } = useItems();
  const { state: uiState, closeModal } = useUI();

  const isAddModalType = uiState.modal.type === "add";
  const currentItem = uiState.modal.payload as ItemsType | null;

  const [value, setValue] = useState(() => {
    if (uiState.modal.type === "add") return "";
    const item = uiState.modal.payload as ItemsType | null;
    return item?.item ?? "";
  });

  function handleSubmit() {
    if (!value.trim()) return;
    addItem(value);
    closeModal();
  }

  function handleUpdate() {
    if (!value.trim() || !currentItem) return;
    updateItem(currentItem.id, value);
    closeModal();
  }

  return (
    <div className="flex flex-col gap-4 text-black">
      <h2 className="text-xl font-bold">
        {isAddModalType ? "Add new Item" : "Update Item"}
      </h2>

      <input
        className="border p-4 rounded"
        placeholder="Enter item name..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      <div className="flex justify-end gap-4">
        <Button variant="small" onClick={closeModal}>
          Cancel
        </Button>

        <Button
          variant="medium"
          onClick={isAddModalType ? handleSubmit : handleUpdate}
        >
          {isAddModalType ? "Confirm" : "Save"}
        </Button>
      </div>
    </div>
  );
}
