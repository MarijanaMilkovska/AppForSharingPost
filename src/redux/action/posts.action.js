export const addPost = (newItem) => ({
  type: "ADD_POST",
  payload: newItem,
});

export const deletePost = (key) => ({
  type: "DELETE_POST",
  payload: key,
});
