import React, { Component } from "react";
import "./comments-add-form.css";

export default class CommentsAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      comment: "",
    };
    this.onNameChange = this.onNameChange.bind(this);
    this.onValueChange = this.onValueChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onNameChange(event) {
    this.setState({
      name: event.target.value,
    });
  }
  onValueChange(event) {
    this.setState({
      comment: event.target.value,
    });
  }
  onSubmit(event) {
    event.preventDefault();
    this.props.onAdd(this.state.name, this.state.comment);
    this.setState({
      name: "",
      comment: "",
    });
  }

  render() {
    return (
      <form className="bottom-panel d-flex" onSubmit={this.onSubmit}>
        <input
          type="text"
          required
          placeholder="Введите свое имя"
          className="form-control name-label"
          onChange={this.onNameChange}
          value={this.state.name}
        />
        <textarea
          type="text"
          required
          placeholder="Напишите комментарий"
          className="form-control new-comment-label"
          onChange={this.onValueChange}
          value={this.state.comment}
        ></textarea>
        <button type="submit" className="btn btn-outline-secondary">
          Добавить комментарий
        </button>
      </form>
    );
  }
}
