import React from "react";
import { useState } from "react";

function Item({ name, category }) {
  const [addItem, setAddItem] = useState(false);

  function handleClass() {
    const newItem = addItem ? "in-cart" : " ";
    return newItem;
  }

  function handleClick() {
    setAddItem((addItem) => !addItem);
  }

  function handleText() {
    return addItem ? "Remove From Cart" : "Add to Cart";
  }

  function handleColor() {
    return addItem ? "remove" : "add";
  }
  return (
    <li className={handleClass()}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleClick} className={handleColor()}>
        {handleText()}
      </button>
    </li>
  );
}

export default Item;
