import React from "react";

function ItemList({ items, handleAddToBasket }) {
  return (
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
          <button onClick={() => handleAddToBasket(item)}>Buy</button>
        </article>
      ))}
    </section>
  );
}

export default ItemList;
