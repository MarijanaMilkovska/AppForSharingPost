import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FlipMove from "react-flip-move";
import { useDispatch, useSelector } from "react-redux";
import { deletePost } from "../redux/action/posts.action";

function ListItems() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.items);

  const listItems = items.map((item) => {
    return (
      <div className="list" key={item.key}>
        <p>
          <input type="text" id={item.key} value={item.text} />
          <span>
            <FontAwesomeIcon
              className="faicons"
              onClick={() => {
                dispatch(deletePost(item.key));
              }}
              icon="trash"
            />
          </span>
        </p>
      </div>
    );
  });
  return (
    <div>
      <FlipMove duration={300} easing="ease-in-out">
        {listItems}
      </FlipMove>
    </div>
  );
}

export default ListItems;
