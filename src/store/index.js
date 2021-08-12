// Import func khởi tạo store
import { createStore, combineReducers } from "redux";
import shoesShopReducer from "./reducers/ShoeShopReducer";
import gameXucXacReducer from "./reducers/GameXucXacReducer";
// Khởi tạo root reducer(Quản lý các reducer con)
const rootReducer = combineReducers({
  shoesShopReducer,
  gameXucXacReducer,
});
// Khởi tạo redux store, quản lý rootReducer
const store = createStore(
  rootReducer,
//   config redux dev tool
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
