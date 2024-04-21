import { useState } from "react";
import { Item } from "./Item";

export function List({ items, onDeleteItems, onCheckedItems, onDeleteAll }) {
  const [sortBy, setSortBy] = useState("description");

  let sortedItems;

  if (sortBy === "input") sortedItems = items;
  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (sortBy === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div>
      <div>
        <p className="unpacked">ITEMS</p>
        <hr className="line" />
        <ul className="list">
          {sortedItems.map((items) => (
            <Item
              item={items}
              onDeleteItems={onDeleteItems}
              onCheckedItems={onCheckedItems}
              key={items.id}
            />
          ))}
        </ul>
      </div>
      <div>
        <select
          className="filter"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="input">Sort by input</option>
          <option value="packed">Sort by packed</option>
          <option value="description">Sort by description</option>
        </select>
        <button className="clear" onClick={onDeleteAll}>
          Clear
        </button>
      </div>
    </div>
  );
}
