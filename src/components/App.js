import React from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import { useState } from "react";

function App() {
  const [mode, setMode] = useState(false);

  function changeMode() {
    const newMode = mode ? "App dark" : "App light";
    return newMode;
  }

  function handleClick() {
    setMode((mode) => !mode);
  }

  function handleMode() {
    return mode ? "Dark Mode" : "Light Mode";
  }

  return (
    <div className={changeMode()}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleClick}>{handleMode()}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
