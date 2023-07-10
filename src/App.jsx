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
    //reset final price before updating basket
    setFinalPrice(0);
    //update basket
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

  const deleteBasketItem = (id) => {
    //reset final price before updating basket
    setFinalPrice(0);
    setBasketItems((currentItems) =>
      currentItems.filter((item) => item.id !== id)
    );
  };
  const increaseQty = (item) => {
    //reset final price before updating basket
    setFinalPrice(0);
    setBasketItems((currentItems) =>
      currentItems.filter((basketItem) =>
        basketItem.id === item.id
          ? { ...item, itemQty: item.itemQty++ }
          : basketItem
      )
    );
  };
  const decreaseQty = (item) => {
    //reset final price before updating basket
    setFinalPrice(0);
    setBasketItems((currentItems) =>
      currentItems.filter((basketItem) =>
        basketItem.id === item.id && item.itemQty > 1
          ? { ...item, itemQty: item.itemQty-- }
          : item
      )
    );
  };

  const clearItemList = () => {
    localStorage.removeItem("items");
    setItems([]);
  };

  // calculate totalPrice when item is added to basket
  useEffect(() => {
    if (basketItems.length) {
      setTotalPrice((prev) =>
        basketItems.reduce((sum, item) => sum + item.price * item.itemQty, 0)
      );
    }
  }, [basketItems]);
  useEffect(() => {
    const storedItems = localStorage.getItem("items");
    if (storedItems) {
      setItems(JSON.parse(storedItems));
    }
  }, []);
  return (
    <main>
      <h2>Kata</h2>
      <article className="add-item-section">
        <AddItem addToItemsList={setItems} />
      </article>
      <article className="item-section">
        <ItemList
          items={items}
          handleAddToBasket={handleAddToBasket}
          clearItemList={clearItemList}
        />
        <BasketItems
          basketItems={basketItems}
          totalPrice={totalPrice}
          finalPrice={finalPrice}
          checkout={checkout}
          deleteBasketItem={deleteBasketItem}
          increaseItemQty={increaseQty}
          decreaseItemQty={decreaseQty}
        />
      </article>
    </main>
  );
}

export default App;
