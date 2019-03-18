import React, {Component} from "react";
import FilterConfig from './FilterConfig';

class TodoControl extends Component {
  counterCompleted;

  constructor(props) {
    super(props);
    this.state = {
      visibility: props.visibility || FilterConfig.VISIBILITY_ALL,
    };
  }

  setVisibilityToAll = () => {
    this.setState({visibility: FilterConfig.VISIBILITY_ALL});
    this.props.updateVisibility(FilterConfig.VISIBILITY_ALL);
  };

  setVisibilityToActive = () => {
    this.setState({visibility: FilterConfig.VISIBILITY_ACTIVE});
    this.props.updateVisibility(FilterConfig.VISIBILITY_ACTIVE);
  };

  setVisibilityToCompleted = () => {
    this.setState({visibility: FilterConfig.VISIBILITY_COMPLETED});
    this.props.updateVisibility(FilterConfig.VISIBILITY_COMPLETED);
  };

  removeCompletedTodos = () => {
    this.props.removeCompletedTodos();
    this.setVisibilityToAll();
  };

  render() {
    return (
      <div>
        <ul className="filters">
          <li>
            <a href="#/all"
               className={this.state.visibility === FilterConfig.VISIBILITY_ALL ? "selected" : ""}
               onClick={this.setVisibilityToAll}>All</a>
          </li>
          <li>
            <a href="#/all"
               className={this.state.visibility === FilterConfig.VISIBILITY_ACTIVE ? "selected" : ""}
               onClick={this.setVisibilityToActive}>Active</a>
          </li>
          {this.props.counterCompleted > 0 &&
          <li>
            <a href="#/all"
               className={this.state.visibility === FilterConfig.VISIBILITY_COMPLETED ? "selected" : ""}
               onClick={this.setVisibilityToCompleted}>Completed</a>
          </li>
          }
        </ul>
        <button className="clear-completed" onClick={this.removeCompletedTodos}>Clear completed</button>
      </div>
    );
  };
}

export default TodoControl;
