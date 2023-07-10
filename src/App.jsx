import React, { useState, useEffect } from "react";
import "./App.css";
import AddItem from "./components/AddItem";
import ItemList from "./components/ItemList";
import BasketItems from "./components/BasketItems";

function App() {
  const [items, setItems] = useState([]);
  const [basketItems, setBasketItems] = useState([]);
  const [finalPrice, setFinalPrice] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

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

  const checkout = () => {
    // sum total price
    const finalPrice = basketItems.reduce((sum, item) => {
      let total = 0;
      // for each item
      const { price, multiPrice, multiPriceQty, itemQty } = item;
      //check if it is a multipriced item
      if (multiPrice && multiPriceQty) {
        const specialQuantityOrdered = Math.floor(itemQty / multiPriceQty);
        const remainder = itemQty % multiPriceQty;
        total = specialQuantityOrdered * multiPrice + remainder * price;
      } else {
        // individually priced items
        total = itemQty * price;
      }
      return sum + total;
    }, 0);
    setFinalPrice(finalPrice);
  };

  // calculate totalPrice when item is added to basket
  useEffect(() => {
    if (basketItems.length) {
      setTotalPrice((prev) =>
        basketItems.reduce((sum, item) => sum + item.price * item.itemQty, 0)
      );
    }
  }, [basketItems]);
  return (
    <main>
      <h2>Kata</h2>
      <AddItem addToItemsList={setItems} />
      <ItemList items={items} handleAddToBasket={handleAddToBasket} />
      <BasketItems
        basketItems={basketItems}
        checkout={checkout}
        totalPrice={totalPrice}
        finalPrice={finalPrice}
      />
    </main>
  );
}

export default App;
