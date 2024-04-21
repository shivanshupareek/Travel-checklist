import { useState } from "react";

export default function Form({ onAddItems }) {
  const [description, setDescription] = useState(``);
  const [quantity, setQuantity] = useState(1);
  // const [items, setItems] = useState([]);

  // function handleItems(item) {
  //   setItems((items) => [...items, item]);
  // }

  function HandleSubmit(e) {
    e.preventDefault();

    if (!description) return;

    const newItem = { description, quantity, packed: false, id: Date.now() };
    console.log(newItem);

    onAddItems(newItem);
    setDescription(``);
    setQuantity(``);
  }
  return (
    <div>
      <form onSubmit={HandleSubmit}>
        <div>
          <h1 className="hero">What do you need for your trip?</h1>
        </div>

        <div className="form">
          <select
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
          >
            {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
              <option value={num} key={num}>
                {num}
              </option>
            ))}
          </select>
          <input
            type="text"
            placeholder="  item..."
            required
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button className="add">Add</button>
        </div>
      </form>
    </div>
  );
}
