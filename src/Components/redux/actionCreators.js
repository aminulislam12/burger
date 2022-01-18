import * as Actiontype from "./ActionType";

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
