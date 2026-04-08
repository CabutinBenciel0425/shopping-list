import { useState } from "react";
import { useUI } from "../../hooks/useUI";
import { useItems } from "../../hooks/useItems";
import Button from "../Button";

export default function AddItemForm() {
  const [value, setValue] = useState("");
  const { addItem } = useItems();
  const { closeModal } = useUI();

  function handleSubmit() {
    if (!value.trim()) return;

    addItem(value);

    closeModal();
  }

  return (
    <div className="flex flex-col gap-4 text-black">
      <h2 className="text-xl font-bold">Add New Item</h2>

      <input
        className="border p-4 rounded "
        placeholder="Enter item name..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      <div className="flex justify-end gap-4">
        <Button variant="small" onClick={closeModal}>
          Cancel
        </Button>

        <Button variant="medium" onClick={handleSubmit}>
          Confirm
        </Button>
      </div>
    </div>
  );
}
