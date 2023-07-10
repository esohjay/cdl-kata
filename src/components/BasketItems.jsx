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
        <section>
          <h3>Basket</h3>
          {basketItems.map((item) => (
            <article key={item.id}>
              <div>
                <p>{item.name}</p>
                <div>
                  <p>{item.price}</p>
                  <span>&#40;x{item.itemQty}&#41;</span>
                </div>
              </div>
              <button onClick={() => increaseItemQty(item)}>+</button>
              <button onClick={() => decreaseItemQty(item)}>-</button>
              <button onClick={() => deleteBasketItem(item.id)}>x</button>
            </article>
          ))}
          <article>
            <div>
              <p>Total:</p>
              <p>&#163;{totalPrice}</p>
            </div>
            <div>
              <p>Total:</p>
              <p>&#163;{finalPrice}</p>
            </div>
            <button onClick={checkout}>Checkout</button>
          </article>
        </section>
      )}
    </>
  );
}

export default BasketItems;
