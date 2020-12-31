import { createContext } from "react";
export const AppContext = createContext();
export const initState = {
  items: [],
};

export const postsReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_POST":
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case "DELETE_POST":
      const newItems = state.items.filter(
        (item) => item.key !== action.payload
      );
      return {
        ...state,
        items: newItems,
      };
    default:
      return state;
  }
};
