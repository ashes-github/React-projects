import { ItemType } from "./App";

export default function Stats(props: any) {
  if (!props.items.length)
    return (
      <footer className="stats">
        <em>Start adding some items to your packing list 🚀</em>
      </footer>
    );

  const numItems = props.items.length;
  const items: ItemType[] = props.items;
  const numPacked = items.filter((each) => each.packed).length;
  const packedPercent = Math.round(100 * (numPacked / numItems));

  return (
    <footer className="stats">
      <em>
        {packedPercent === 100
          ? "You got everything! ready to go ✈️"
          : `You have ${numItems} items on your list, and you already packed ${numPacked} (${packedPercent}%) `}
      </em>
    </footer>
  );
}
