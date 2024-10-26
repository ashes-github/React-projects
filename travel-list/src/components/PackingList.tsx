import { useState } from "react";
import { ItemType } from "./App";
import Item from "./Item";

export default function PackingList(props: any) {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;
  if (sortBy === "input") sortedItems = props.items;
  else if (sortBy === "description") {
    sortedItems = props.items
      .slice()
      .sort((a: ItemType, b: ItemType) =>
        a.description.localeCompare(b.description)
      );
  } else if (sortBy === "packed") {
    sortedItems = props.items
      .slice()
      .sort((a: ItemType, b: ItemType) => Number(a.packed) - Number(b.packed));
  }

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item: ItemType) => (
          <Item
            item={item}
            key={item.id}
            onDeleteItem={props.onDeleteItem}
            onPackItem={props.onPackItem}
          />
        ))}
      </ul>

      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={() => props.onClearAll()}>Clear list</button>
      </div>
    </div>
  );
}
