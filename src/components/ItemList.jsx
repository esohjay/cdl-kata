import React from "react";

function ItemList({ items, handleAddToBasket, clearItemList }) {
  return (
    <>
      {items.length > 0 && (
        <section className="item-container">
          <h3>Items</h3>
          {items.map((item) => (
            <article className="item-wrap" key={item.id}>
              <div className="item">
                <p>{item.name}</p>
                <div>
                  <p>{item.price}</p>
                  {item.multiPrice > 0 && (
                    <span>
                      &#40;{item.multiPriceQty} for &#163;{item.multiPrice}&#41;
                    </span>
                  )}
                </div>
              </div>
              <button
                className="btn btn-small"
                onClick={() => handleAddToBasket(item)}
              >
                Buy
              </button>
            </article>
          ))}
          <button className="btn" onClick={clearItemList}>
            Remove all
          </button>
        </section>
      )}
    </>
  );
}

export default ItemList;
