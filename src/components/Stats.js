export function Stats({ items }) {
  if (!items.length)
    return (
      <p className="footer">
        <em>Start adding packing items to your list.</em>
      </p>
    );

  const numItems = items.length;
  const numPacked = items.filter((items) => items.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);

  return (
    <div>
      <footer className="footer">
        {percentage === 100
          ? "Everything is packed, well done!"
          : `You have ${numItems} items, you have packed ${numPacked} item (
          ${percentage}%)`}
      </footer>
    </div>
  );
}
