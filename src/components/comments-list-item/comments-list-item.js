import React, { Component } from "react";
import "./comments-list-item.css";

export default class CommentsListItem extends Component {
  render() {
    const { name, label, time, onDelete, onToggleLiked, like } = this.props;

    let classNames = "app-comments-item d-flex justify-content-between";
    let clazzNames = "likeit";
    let likeVar = "Нравится";
    if (like) {
      classNames += " like";
      clazzNames += "_dont";
      likeVar = "Больше не нравится";
    }

    return (
      <div className={classNames}>
        <span className="app-comments-item-label">
          <span style={{ color: "#3875c5" }}>{name}</span> :{" "}
          <span style={{ color: "#1c1e21" }}>{label}</span>
          <br />
          <span className="time">{time}</span>{" "}
          <span className={clazzNames} onClick={onToggleLiked}>
            {likeVar}
          </span>
        </span>
        <div className="d-flex justify-content-center align-items-center">
          <button type="button" className="btn-trash btn-sm" onClick={onDelete}>
            <i className="fa fa-trash-o"></i>
          </button>
          <i className="fa fa-heart"></i>
        </div>
      </div>
    );
  }
}
