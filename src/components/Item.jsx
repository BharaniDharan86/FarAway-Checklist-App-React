/* eslint-disable react/prop-types */
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
          checked={item.packed}
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

export default Item;
