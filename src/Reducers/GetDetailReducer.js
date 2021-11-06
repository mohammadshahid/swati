import { actionTypes } from "../Actions";

const GetDetailReducer = (products = [], action) => {
  switch (action.type) {
      case actionTypes.GET_DATA:
        return action.payload;
    default:
      return products;
  }
};

export default GetDetailReducer;
