import React from "react";

function BasketItems({
  basketItems,
  totalPrice,
  finalPrice,
  checkout,
  deleteBasketItem,
  decreaseItemQty,
  increaseItemQty,
}) {
  return (
    <>
      {basketItems.length > 0 && (
        <section className="basket-container">
          <h3>Basket</h3>
          {basketItems.map((item) => (
            <article className="item-wrap" key={item.id}>
              <div className="item">
                <p>{item.name}</p>
                <div>
                  <p>{item.price}</p>
                  <span>&#40;x{item.itemQty}&#41;</span>
                </div>
              </div>

              <button
                className="btn btn-small"
                onClick={() => increaseItemQty(item)}
              >
                +
              </button>
              <button
                className="btn btn-small"
                onClick={() => decreaseItemQty(item)}
              >
                -
              </button>
              <button
                className="btn btn-small"
                onClick={() => deleteBasketItem(item.id)}
              >
                x
              </button>
            </article>
          ))}
          <article className="total-section">
            <div className="total">
              <p>Total:</p>
              <p>&#163;{totalPrice}</p>
            </div>
            <div className="total">
              <p>Amount to pay:</p>
              <p>&#163;{finalPrice}</p>
            </div>
            <button onClick={checkout} className="btn">
              Checkout
            </button>
          </article>
        </section>
      )}
    </>
  );
}

export default BasketItems;
