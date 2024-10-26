import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

let initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Charger", quantity: 12, packed: false },
];

export interface ItemType {
  id: number;
  description: string;
  quantity: number;
  packed: boolean;
}

export default function App() {
  const [items, setItems] = useState<ItemType[]>(initialItems);

  function handleAddItems(item: ItemType) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id: number) {
    setItems((items) => items.filter((each) => each.id !== id));
  }

  function handlePackItem(id: number) {
    setItems((items) =>
      items.map((each) =>
        each.id === id ? { ...each, packed: !each.packed } : each
      )
    );
  }

  function handleClearAll() {
    if (!window.confirm("Are you sure you want to clear all the items?"))
      return;
    setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onPackItem={handlePackItem}
        onClearAll={handleClearAll}
      />
      <Stats items={items} />
    </div>
  );
}
