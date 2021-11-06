import { combineReducers } from "redux";
import GetData from "./GetDataReducer";
import GetDetailReducer from "./GetDetailReducer";

export default combineReducers({
  sku_product: GetDetailReducer,
  products: GetData
});
