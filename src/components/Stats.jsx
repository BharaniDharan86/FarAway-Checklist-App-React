/* eslint-disable react/prop-types */
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

export default Stats;
