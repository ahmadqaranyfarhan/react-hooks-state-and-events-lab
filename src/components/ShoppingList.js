import React from "react";
import Item from "./Item";
import { useState } from "react";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  function handleFilteredItems() {
    return selectedCategory === "All"
      ? items
      : items.filter((item) => item.category === selectedCategory);
  }

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select
          name="filter"
          onChange={handleCategoryChange}
          value={selectedCategory}
        >
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {handleFilteredItems().map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
