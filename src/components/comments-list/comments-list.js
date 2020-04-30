import React from "react";
import CommentsListItem from "../comments-list-item";
import "./comments-list.css";

const CommentsList = ({ posts, onDelete, onToggleLiked }) => {
  const elements = posts.map((item) => {
    const { id, ...itemProps } = item;
    return (
      <li key={id} className="list-group-item">
        <CommentsListItem
          {...itemProps}
          onDelete={() => {
            onDelete(id);
          }}
          onToggleLiked={() => {
            onToggleLiked(id);
          }}
        />
      </li>
    );
  });

  return <ul className="app-list list-group">{elements}</ul>;
};

export default CommentsList;
