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
    <form className="addItem-container" onSubmit={handleAddItem}>
      <article className="input-container">
        <div className="field-container">
          <label htmlFor="">Item name</label>
          <input
            type="text"
            ref={itemNameRef}
            className="input-field"
            placeholder="Enter item name"
            required
          />
        </div>
        <div className="field-container">
          <label htmlFor="">Item price &#40;&#163;&#41;</label>
          <input
            type="number"
            ref={itemPriceRef}
            className="input-field"
            placeholder="Enter item price"
            required
          />
        </div>
        <div className="field-container">
          <label htmlFor="">Multiprice quantity &#40;Optional&#41;</label>
          <input
            type="number"
            ref={multiPriceQtyRef}
            className="input-field"
            placeholder="Enter multi price qty"
          />
        </div>
        <div className="field-container">
          <label htmlFor="">
            Multiprice amount &#40;&#163;&#41; &#40;Optional&#41;
          </label>
          <input
            type="number"
            ref={multiPriceRef}
            className="input-field"
            placeholder="Enter multi price"
          />
        </div>
      </article>
      <button type="submit" className="btn">
        Add Item
      </button>
    </form>
  );
}

export default AddItem;
