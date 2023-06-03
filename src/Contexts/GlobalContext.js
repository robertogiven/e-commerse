import React, { createContext, useReducer, useState } from "react";

export const globalContext = createContext();
export const GlobalContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <globalContext.Provider value={[state, dispatch]}>
      {props.children}
    </globalContext.Provider>
  );
};

const initialState = {
  isLogin: false,
  carts: [],
};

const reducer = (state, action) => {
  if (action.type === "PROCESS_LOGIN") {
    return {
      ...state,
      isLogin: true,
    };
  } else if (action.type === "PROCESS_LOGOUT") {
    return {
      ...state,
      isLogin: false,
    };
  } else if (action.type === "ADD_PRODUCT_TO_CART") {
    const checkProductAlreadyExist = state.carts.filter(
      (item) => item.id === action.data.id
    );
    if (checkProductAlreadyExist.length > 0) {
      return {
        ...state,
        carts: state.carts.map((item) =>
          item.id == action.data.id
            ? {
                ...item,
                qty: item.qty + 1,
              }
            : item
        ),
      };
    }
    return {
      ...state,
      carts: [
        ...state.carts,
        {
          ...action.data,
          qty: 1,
        },
      ],
    };
  } else {
    return {
      state,
    };
  }
};
