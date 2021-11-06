import React from 'react';
import apiLink from "../Api/Link";

export const actionTypes = {
  FETCH_DATA: "FETCH_DATA",
  GET_DATA: "GET_DATA"
};

export const fetchReqdata = () => async dispatch => {
  const response = await apiLink.post("https://swati.centraqa.com/api/checkout/products/");
  dispatch({
    type: actionTypes.FETCH_DATA,
    payload: response.data.products
  });
};

export const fetchSkuReq = (sku) => async dispatch => {
 
  const response = await apiLink.get("https://swati.centraqa.com/api/checkout/products/"+ sku);
  dispatch({
    type: actionTypes.GET_DATA,
    payload: response.data.product
  });
};
