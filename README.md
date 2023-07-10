# The checkout app

## Installation

To run this code locally, clone this repository.

In the project directory, you can run:

### `npm start`

## Structure

- Code was splitted into smaller components for better readability.
- The states and functions in the APP.jsx file are shared accross its child components. This was done for easy management of the code. If i had more time, states would be managed and shared across components better using React Context Api or other ligthwieght state management tools.

- Items are persisted using localstorage to avoid frequent adding of items.

## Usage

- Fill the item form to add an item.
- The multiprice quantity and multiprice amount are optional as all items does not have to be multipriced.
- The multiprice quantity is the quantity that needs to be added to the basket to get the special multiprice cost.
- After adding items, click on the `buy` button to add item to the basket.
- Total amount is calculate as more items are added to basket.
- After adding items to the basket, click `checkout` to get the final price.
- If the basket is modified after clicking checkout, final price resets due to the modification, and final price needs to be calculated again.
