import { createStore } from "redux";
import { postsReducer } from "./reducer/posts.reducer";

export const store = createStore(postsReducer);
