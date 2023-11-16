/* eslint-disable react/prop-types */
import { useState } from "react";

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
    setDescription("");
    setQuantity(1);
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

export default Form;
