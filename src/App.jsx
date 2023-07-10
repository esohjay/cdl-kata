import React, { useState, useRef } from "react";
import "./App.css";
import AddItem from "./components/AddItem";
import ItemList from "./components/ItemList";

function App() {
  const [items, setItems] = useState([]);
  return (
    <main>
      <h2>Kata</h2>
      <AddItem addToItemsList={setItems} />
      <ItemList items={items} />
    </main>
  );
}

export default App;
