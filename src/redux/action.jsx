export const ADD_ITEM = "ADD_ITEM";
export const DELETE_ITEM = "DELETE_ITEM";

export const addItem = (name) => ({
  type: ADD_ITEM,
  payload: {
    name: name,
    id: Math.random(),
  },
});

export const deleteItem = (itemId) => ({
  type: DELETE_ITEM,
  payload: {
    id: itemId,
  },
});