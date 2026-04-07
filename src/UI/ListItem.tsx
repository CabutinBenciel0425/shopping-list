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
  const { id, item: product, quantity } = item;
  return (
    <li className="grid grid-cols-[auto_1fr_auto] gap-4 items-center py-2 border-b-2 border-b-cyan-900">
      <Quantity quantity={quantity} id={id} />

      <div>
        <p className="text-4xl">{product}</p>
      </div>

      <Actions id={id} />
    </li>
  );
}
