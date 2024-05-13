export function Item({ item, onDeleteItems, onCheckedItems }) {
  return (
    <div>
      <li>
        <input
          type="checkbox"
          value={item.packed}
          className="box"
          onChange={() => onCheckedItems(item.id)}
        />
        <span style={item.packed ? { textDecoration: `line-through` } : {}}>
          {item.quantity} {item.description}
        </span>
        <button className="delete" onClick={() => onDeleteItems(item.id)}>
          &#10005;
        </button>
      </li>
    </div>
  );
}
