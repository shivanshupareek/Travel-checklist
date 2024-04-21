import { useState } from "react";
import { Logo } from "./logo";
import { Form } from "./Form";
import { List } from "./List";
import { Stats } from "./Stats";

export default function App() {
  const [items, setItems] = useState([]);

  function handleItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItems(id) {
    setItems((items) => items.filter((items) => items.id !== id));
  }

  function handleCheckedItems(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleDeleteAll() {
    const confirm = window.confirm(
      `Are you sure you want to delete all items?`
    );
    if (confirm) setItems([]);
  }

  return (
    <div>
      <Logo />
      <Form onAddItems={handleItems} />
      <List
        items={items}
        onDeleteItems={handleDeleteItems}
        onCheckedItems={handleCheckedItems}
        onDeleteAll={handleDeleteAll}
      />
      <Stats items={items} />
    </div>
  );
}
