import React, { useState, useRef } from "react";

function AddItem({ addToItemsList }) {
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

    addToItemsList((prevState) => [...prevState, item]);

    //clear input fields
    event.target.reset();
  };
  return (
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
  );
}

export default AddItem;
