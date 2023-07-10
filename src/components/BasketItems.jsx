import React from "react";

function BasketItems({ basketItems }) {
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
            </article>
          ))}
        </section>
      )}
    </>
  );
}

export default BasketItems;
