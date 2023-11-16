/* eslint-disable react/prop-types */

import { useState } from "react";

/* eslint-disable react/jsx-key */

function App() {
  const [items, setItems] = useState([]);

  function handleRemoveItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggle(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  return (
    <div className="app">
      <Logo />
      <Form setItems={setItems} />
      <PackingList
        items={items}
        handleRemoveItem={handleRemoveItem}
        handleToggle={handleToggle}
      />
      <Stats items={items} />
    </div>
  );
}

function Logo() {
  return <h1> Far Away🌴🚢</h1>;
}

function Form({ setItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleAddNewItem(item) {
    setItems((items) => [...items, item]);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newItem = {
      id: Date.now(),
      description,
      quantity,
      packed: false,
    };

    handleAddNewItem(newItem);
  }

  return (
    <form onSubmit={handleSubmit} className="add-form">
      <h3>What do you need for the Tour</h3>

      <select
        name=""
        id=""
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((ele) => {
          return (
            <option value={ele} key={ele}>
              {ele}
            </option>
          );
        })}
      </select>
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Items..."
      />
      <button type="submit">Add</button>
    </form>
  );
}

function PackingList({ items, handleRemoveItem, handleToggle }) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => {
          return (
            <Item
              item={item}
              handleRemoveItem={handleRemoveItem}
              handleToggle={handleToggle}
            />
          );
        })}
      </ul>
    </div>
  );
}

function Item({ item, handleRemoveItem, handleToggle }) {
  return (
    <>
      <li
        style={
          item.packed
            ? {
                textDecoration: "line-through",
              }
            : {}
        }
      >
        <input
          type="checkbox"
          value={item.packed}
          onChange={() => {
            handleToggle(item.id);
          }}
        />
        <span>
          {item.quantity} {item.description}
        </span>
        <button onClick={() => handleRemoveItem(item.id)}>❌</button>
      </li>
    </>
  );
}

function Stats({ items }) {
  const itemsPacked = items.length;
  const packed = items.filter((item) => item.packed).length;
  return (
    <footer className="stats">
      You have {itemsPacked} items on your list and you already packed {packed}{" "}
      items
    </footer>
  );
}
export default App;
