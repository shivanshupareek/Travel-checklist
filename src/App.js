import { useState } from "react";

const initialItems = [
  {
    id: 1,
    description: "Passports",
    quantity: 2,
    packed: false,
  },
  {
    id: 2,
    description: "Socks",
    quantity: 12,
    packed: false,
  },
  {
    id: 2,
    description: "Pants",
    quantity: 4,
    packed: true,
  },
];

export default function App() {
  return (
    <div>
      <Logo />
      <Form />
      <List />
      <Stats />
    </div>
  );
}

function Logo() {
  return (
    <div className="header">
      <img className="icon" src="app icon.svg" alt="app logo" />
      <header className="title">TRAVEL PLANNER</header>
    </div>
  );
}

function Form() {
  const [description, setDescription] = useState(``);
  const [quantity, setQuantity] = useState(1);
  const [items, setItems] = useState([]);

  function handleItems(item) {
    setItems((items) => [...items, item]);
  }

  function HandleSubmit(e) {
    e.preventDefault();

    if (!description) return;

    const newItem = { description, quantity, packed: false, id: Date.now() };
    console.log(newItem);

    handleItems(newItem);
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
          <button>Add</button>
        </div>
      </form>
    </div>
  );
}

function List() {
  return (
    <div>
      <div>
        <p className="unpacked">UNPACKED</p>
        <hr className="line" />
        <ul className="list">
          {initialItems.map((items) => (
            <Item item={items} key={items.id} />
          ))}
        </ul>
      </div>
    </div>
  );
}

function Item({ item }) {
  return (
    <div>
      <div>
        <li>
          <span style={item.packed ? { textDecoration: `line-through` } : {}}>
            {item.quantity} {item.description}
          </span>
          <button className="delete">&#10005;</button>
        </li>
      </div>
    </div>
  );
}

function Stats() {
  return (
    <div>
      <footer className="footer"> You have 2/5 items (40%)</footer>
    </div>
  );
}
