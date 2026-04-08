import { useItems } from "../hooks/useItems";
import ListItem from "../UI/ListItem";

export default function List() {
  const { state } = useItems();

  return (
    <div>
      <ul>
        {state.items.length ? (
          state.items.map((item) => <ListItem item={item} key={item.id} />)
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <p className="text-4xl mt-20">Add your items you want to buy</p>
          </div>
        )}
      </ul>
    </div>
  );
}
