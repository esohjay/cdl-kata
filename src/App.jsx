import React, { useState } from "react";
import "./App.css";
import AddItem from "./components/AddItem";
import ItemList from "./components/ItemList";
import BasketItems from "./components/BasketItems";

function App() {
  const [items, setItems] = useState([]);
  const [basketItems, setBasketItems] = useState([]);

  const handleAddToBasket = (item) => {
    setBasketItems((prevState) => {
      //check if the item already exists in the basket
      const itemExist = prevState.find(
        (basketItem) => basketItem.id === item.id
      );

      if (itemExist) {
        // find the item and update the quantity
        const newArray = prevState.filter((basketItem) => {
          if (basketItem.id === item.id) {
            return {
              ...basketItem,
              itemQty: basketItem.itemQty++,
            };
          }
          return basketItem;
        });
        return newArray;
      } else {
        // add the item to the basket if it doesn't exist
        return [...prevState, { ...item, itemQty: 1 }];
      }
    });
  };
  return (
    <main>
      <h2>Kata</h2>
      <AddItem addToItemsList={setItems} />
      <ItemList items={items} handleAddToBasket={handleAddToBasket} />
      <BasketItems basketItems={basketItems} />
    </main>
  );
}

export default App;
