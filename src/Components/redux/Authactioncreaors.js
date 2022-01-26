import axios from "axios";
import * as ActionType from "./ActionType";

export const authSuccess = (token, userId) => {
  return {
    type: ActionType.AUTH_SUCCESS,
    payload: {
      token: token,
      userId: userId,
    },
  };
};

export const auth = (email, password, mode) => (dispatch) => {
  const authData = {
    email: email,
    password: password,
    returnSecureToken: true,
  };
  let authURL = null;
  if (mode === "SingUP") {
    authURL = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=";
  } else {
    authURL =
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=";
  }
  const API_KEY = "AIzaSyBi4brC_9RXSnjiivnSqheYKLqxkuc7Ms4";
  axios.post(authURL + API_KEY, authData).then((response) => {
    localStorage.setItem("token", response.data.idToken);
    localStorage.setItem("userId", response.data.localId);
    const expireTime = new Date(
      new Date().getTime() + response.data.expiresIn * 1000
    );
    localStorage.setItem("exprireTime", expireTime);
    dispatch(authSuccess(response.data.idToken, response.data.localId));
  });
};
export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("userId");
  localStorage.removeItem("exprireTime");
  return {
    type: ActionType.AUTH_LOGOUT,
  };
};

export const authCheck = () => (dispatch) => {
  const token = localStorage.getItem("token");
  if (!token) {
    // Logout
    dispatch(logout());
  } else {
    const expirationTime = new Date(localStorage.getItem("exprireTime"));
    if (expirationTime <= new Date()) {
      // Logout
      dispatch(logout());
    } else {
      const userId = localStorage.getItem("userId");
      dispatch(authSuccess(token, userId));
    }
  }
};
