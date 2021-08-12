// import {
//   ADD_TO_SHOPPING_LIST,
//   UPDATE_QUANTITY,
//   REMOVE_CART,
// } from "../constants/shoesShopConstants";
import * as shoesShopConstants from "../constants/shoesShopConstants";
export const actAddToShoppingList = (shoe) => ({
  type: shoesShopConstants.ADD_TO_SHOPPING_LIST,
  payload: shoe,
});

export const actUpdateQuantity = (id, type) => ({
  type: shoesShopConstants.UPDATE_QUANTITY,
  payload: { id, type },
});

export const actRemoveFromShoppingList = (id) => ({
  type: shoesShopConstants.REMOVE_CART,
  payload: id,
});
