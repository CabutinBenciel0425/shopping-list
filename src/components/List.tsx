import ListItem from "../UI/ListItem";
import { Items } from "../data/Items";

export default function List() {
  return (
    <div>
      <ul>
        {Items.map((item) => (
          <ListItem item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
}
