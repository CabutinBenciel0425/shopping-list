import Quantity from "./Quantity";
import Actions from "./Actions";

type ListItemProps = {
  item: {
    id: number;
    item: string;
    quantity: number;
  };
};

export default function ListItem({ item }: ListItemProps) {
  return (
    <li className="grid grid-cols-[auto_1fr_auto] gap-4 items-center py-2 border-b-2 border-b-cyan-900">
      <Quantity />

      <div>
        <p className="text-4xl">Milk</p>
      </div>

      <Actions />
    </li>
  );
}
