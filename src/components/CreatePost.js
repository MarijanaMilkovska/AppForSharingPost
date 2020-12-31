import React, { useState } from "react";
import ListPost from "./ListPost";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { addPost } from "../redux/action/posts.action";
import { useDispatch } from "react-redux";

library.add(faTrash);

function CreatePost() {
  const dispatch = useDispatch();
  const [currentItem, setCurrentItem] = useState({
    text: "",
    key: "",
  });

  const addItem = (e) => {
    e.preventDefault();
    if (currentItem.text !== "") {
      dispatch(addPost(currentItem));
    }
  };

  const handleInput = (e) => {
    setCurrentItem({
      text: e.target.value,
      key: Date.now(),
    });
  };

  return (
    <div className="CreatePost">
      <header>
        <h1>Share your post</h1>
      </header>
      <form id="to-do-form" onSubmit={addItem}>
        <input
          type="text"
          placeholder="Hello! Share your post"
          value={currentItem.text}
          onChange={(event) => handleInput(event)}
        ></input>
        <button type="submit">Share</button>
      </form>
      <ListPost />
    </div>
  );
}

export default CreatePost;
