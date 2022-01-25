import axios from "axios";
import * as Actiontype from "./ActionType";
const baseURL =
  "https://burgerbuilder-f94ae-default-rtdb.firebaseio.com/order.json";

export const addIngredient = (ingtype) => {
  return {
    type: Actiontype.ADD_INGREDIENT,
    payload: ingtype,
  };
};

export const removeIngredient = (ingtype) => {
  return {
    type: Actiontype.REMOVE_INGREDIENT,
    payload: ingtype,
  };
};

export const updatePurchesable = () => {
  return {
    type: Actiontype.UPDATE_PUCHESABLE,
  };
};

export const resetIngredient = () => {
  return {
    type: Actiontype.RESET_INGREDIENT,
  };
};

export const loadOrder = (order) => {
  return {
    type: Actiontype.LOAD_ORDER,
    payload: order,
  };
};

export const faildLoad = () => {
  return {
    type: Actiontype.FAIELD_LOAD_ORDER,
  };
};

export const featchOrder = () => (dispatch) => {
  axios
    .get(baseURL)
    .then((response) => dispatch(loadOrder(response.data)))
    .catch((error) => {
      dispatch(faildLoad());
    });
};
