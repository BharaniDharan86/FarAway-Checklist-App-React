import { useState } from "react";
import Item from "./Item";

/* eslint-disable react/prop-types */
function PackingList({
  items,
  handleRemoveItem,
  handleToggle,
  handleClearList,
}) {
  const [sort, setSort] = useState("input");

  let sortedItems;

  if (sort === "input") sortedItems = items;
  if (sort === "packed")
    sortedItems = items.slice().sort((a, b) => a.packed - b.packed); // Directly compare boolean values

  if (sort === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => {
          return (
            <Item
              key={sortedItems.id}
              item={item}
              handleRemoveItem={handleRemoveItem}
              handleToggle={handleToggle}
            />
          );
        })}
      </ul>

      <div className="actions">
        <select
          name=""
          id=""
          value={sort}
          onChange={(e) => setSort(e.target.value)}
        >
          <option selected value="input">
            Sort by input
          </option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={handleClearList}>Clear List</button>
      </div>
    </div>
  );
}

export default PackingList;
