import React, { useState, useRef } from "react";
import "./App.css";

function App() {
  const [items, setItems] = useState([]);
  const itemNameRef = useRef(null);
  const itemPriceRef = useRef(null);
  const multiPriceQtyRef = useRef(null);
  const multiPriceRef = useRef(null);

  const handleAddItem = (event) => {
    event.preventDefault();
    const itemName = itemNameRef.current.value;
    const itemPrice = parseFloat(itemPriceRef.current.value);
    const multiPrice = parseFloat(multiPriceRef.current.value);
    const multiPriceQty = parseFloat(multiPriceQtyRef.current.value);

    const item = {
      id: Date.now(),
      name: itemName,
      price: itemPrice,
      multiPrice: multiPrice,
      multiPriceQty: multiPriceQty,
    };

    setItems((prevState) => [...prevState, item]);

    //clear input fields
    event.target.reset();
  };

  return (
    <main>
      <h2>Kata</h2>
      <form onSubmit={handleAddItem}>
        <div>
          <label htmlFor="">Item name</label>
          <input
            type="text"
            ref={itemNameRef}
            placeholder="Enter item name"
            required
          />
        </div>
        <div>
          <label htmlFor="">Item price &#40;&#163;&#41;</label>
          <input
            type="number"
            ref={itemPriceRef}
            placeholder="Enter item price"
            required
          />
        </div>
        <div>
          <label htmlFor="">Multiprice quantity &#40;Optional&#41;</label>
          <input
            type="number"
            ref={multiPriceQtyRef}
            placeholder="Enter multi price qty"
          />
        </div>
        <div>
          <label htmlFor="">
            Multiprice amount &#40;&#163;&#41; &#40;Optional&#41;
          </label>
          <input
            type="number"
            ref={multiPriceRef}
            placeholder="Enter multi price"
          />
        </div>
        <button type="submit">Add Item</button>
      </form>
      <section>
        <h3>Items</h3>
        {items.map((item) => (
          <article key={item.id}>
            <div>
              <p>{item.name}</p>
              <div>
                <p>{item.price}</p>
                {item.multiPrice && (
                  <span>
                    &#40;{item.multiPriceQty} for &#163;{item.multiPrice}&#41;
                  </span>
                )}
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}

export default App;
