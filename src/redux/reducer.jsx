import { ADD_ITEM, DELETE_ITEM } from "./action";

const initialState = {
  items: [
    {
      name: "item1",
      id: Math.random(),
    },
    {
      name: "item2",
      id: Math.random(),
    },
  ],
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        items: [...state.items, action.payload],
      };
    case DELETE_ITEM:
      return {
        items: state.items.filter((item) => {
          return item.id !== action.payload.id;
        }),
      };
    default:
      return state;
  }
};
