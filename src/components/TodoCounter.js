import React, {Component} from "react";

class TodoCounter extends Component {
  counterActive;

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <span className="todo-count">
        <strong>{this.props.counterActive}</strong> items left
      </span>
    );
  }
}

export default TodoCounter;
