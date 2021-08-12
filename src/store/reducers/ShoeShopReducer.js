import * as shoesShopConstants from '../constants/shoesShopConstants';
const initialState = {
  shoppingList: [],
};

const shoesShopReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case shoesShopConstants.ADD_TO_SHOPPING_LIST: {
      const shoppingListUpdate = [...state.shoppingList];
      //   // Tìm xem trong mảng đã có sản phẩm đó hay chưa
      const index = shoppingListUpdate.findIndex(
        (item) => item.id === payload.id
      );
      if (index === -1) {
        const newShoe = {
          ...payload,
          quantity: 1,
        };
        shoppingListUpdate.push(newShoe);
      } else {
        shoppingListUpdate[index].quantity += 1;
      }

      return { ...state, shoppingList: shoppingListUpdate };
    }
    case shoesShopConstants.UPDATE_QUANTITY: {
      const {id, type} = payload
      const shoppingListUpdate = [...state.shoppingList];
      const index = shoppingListUpdate.findIndex(
        (item) => item.id === id
      );
      if (type) {
        shoppingListUpdate[index].quantity += 1;
      } else {
        if (shoppingListUpdate[index].quantity > 1)
          shoppingListUpdate[index].quantity -= 1;
      }

      return { ...state, shoppingList: shoppingListUpdate };
    }
    case shoesShopConstants.REMOVE_CART: {
      const {id} = payload;
      const shoppingListUpdate = [...state.shoppingList];
        const index = shoppingListUpdate.findIndex((item) => item.id === id);
        shoppingListUpdate.splice(index, 1);
        return {...state, shoppingList: shoppingListUpdate};
    }
    default:
      return state;
  }
};

export default shoesShopReducer;
