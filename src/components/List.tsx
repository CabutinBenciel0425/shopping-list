import { useItems } from "../hooks/useItems";
import ListItem from "../UI/ListItem";

export default function List() {
  const { state } = useItems();

  return (
    <div>
      <ul>
        {state.items.map((item) => (
          <ListItem item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
}
