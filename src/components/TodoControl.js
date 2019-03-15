import React, {Component} from "react";
import FilterConfig from './FilterConfig';

class TodoControl extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  setVisibilityToAll() {
    this.props.updateVisibility(FilterConfig.VISIBILITY_ALL);
  }

  setVisibilityToActive() {
    this.props.updateVisibility(FilterConfig.VISIBILITY_ACTIVE);
  }

  setVisibilityToCompleted() {
    this.props.updateVisibility(FilterConfig.VISIBILITY_COMPLETED);
  }

  removeCompletedTodos() {
    this.props.removeCompletedTodos();
  }

  render() {
    return (
      <div>
        <ul className="filters">
          <li>
            <a href="#/all" onClick={this.setVisibilityToAll.bind(this)}>All</a>
          </li>
          <li>
            <a href="#/all" onClick={this.setVisibilityToActive.bind(this)}>Active</a>
          </li>
          <li>
            <a href="#/all" onClick={this.setVisibilityToCompleted.bind(this)}>Completed</a>
          </li>
        </ul>
        <button className="clear-completed" onClick={this.removeCompletedTodos.bind(this)}>Clear completed</button>
      </div>
    );
  };
}

export default TodoControl;
