import React, { Component } from "react";
// import nextId from "react-id-generator";
import AppHeader from "../app-header";
import CommentsList from "../comments-list";
import CommentsAddForm from "../comments-add-form";
import "./app.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      // data: [
      //   { name: "AAA", label: "first comment", like: false, id: nextId() },
      //   { name: "BBB", label: "second comment", like: false, id: nextId() },
      //   { name: "CCC", label: "third comment", like: false, id: nextId() },
      // ],
    };
    this.deleteItem = this.deleteItem.bind(this);
    this.addItem = this.addItem.bind(this);
    this.onToggleLiked = this.onToggleLiked.bind(this);
  }

  componentDidMount() {
    localStorage.getItem("key") &&
      this.setState({
        data: JSON.parse(localStorage.getItem("key")),
      });
  }

  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem("key", JSON.stringify(nextState.data));
  }

  deleteItem(id) {
    this.setState(({ data }) => {
      const index = data.findIndex((elem) => elem.id === id);

      const newArr = [...data.slice(0, index), ...data.slice(index + 1)];

      return {
        data: newArr,
      };
    });
  }

  addItem(bodyName, bodyComment) {
    const newItem = {
      name: bodyName,
      label: bodyComment,
      time: new Date().toLocaleString(),
      like: false,
      // id: nextId(),
      id: Math.floor(Math.random() * 100000000000 + 1),
    };

    this.setState(({ data }) => {
      const newArr = [...data, newItem];
      return {
        data: newArr,
      };
    });
  }

  onToggleLiked(id) {
    this.setState(({ data }) => {
      const index = data.findIndex((elem) => elem.id === id);
      const old = data[index];
      const newItem = { ...old, like: !old.like };
      const newArr = [
        ...data.slice(0, index),
        newItem,
        ...data.slice(index + 1),
      ];
      return {
        data: newArr,
      };
    });
  }

  render() {
    const { data } = this.state;
    const liked = data.filter((item) => item.like).length;
    const allComments = data.length;

    return (
      <div className="app">
        <AppHeader liked={liked} allComments={allComments} />
        <CommentsList
          posts={this.state.data}
          onDelete={this.deleteItem}
          onToggleLiked={this.onToggleLiked}
        />
        <CommentsAddForm onAdd={this.addItem} />
      </div>
    );
  }
}
