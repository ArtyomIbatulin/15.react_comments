import React from "react";
import "./app-header.css";

const AppHeader = ({ liked, allComments }) => {
  return (
    <div className="app-header d-flex">
      <h3>Оставлено комментариев: {allComments}</h3>
      <h3>Понравилось комментариев: {liked}</h3>
    </div>
  );
};

export default AppHeader;
