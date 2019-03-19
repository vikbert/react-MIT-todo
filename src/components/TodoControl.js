import React, {Component} from "react";
import * as FilterConfig from './FilterConfig';
import {connect} from 'react-redux';
import {updateVisibility, removeCompletedTodos} from "../redux/actions/todoActions";
import PropTypes from 'prop-types';

class TodoControl extends Component {
  setVisibilityToAll = () => {
    this.props.updateVisibility(FilterConfig.VISIBILITY_ALL);
  };

  setVisibilityToActive = () => {
    this.props.updateVisibility(FilterConfig.VISIBILITY_ACTIVE);
  };

  setVisibilityToCompleted = () => {
    this.props.updateVisibility(FilterConfig.VISIBILITY_COMPLETED);
  };

  removeCompletedTodos = () => {
    this.props.removeCompletedTodos();
    this.setVisibilityToAll();
  };

  render() {
    return (
      <div>
        <span className="todo-count">
          <strong>{this.props.getActiveTodos().length}</strong> items left
        </span>
        <ul className="filters">
          <li>
            <a href="#/all"
               className={this.props.visibility === FilterConfig.VISIBILITY_ALL ? "selected" : ""}
               onClick={this.setVisibilityToAll}>All</a>
          </li>
          <li>
            <a href="#/all"
               className={this.props.visibility === FilterConfig.VISIBILITY_ACTIVE ? "selected" : ""}
               onClick={this.setVisibilityToActive}>Active</a>
          </li>
          {this.props.counterCompleted > 0 &&
          <li>
            <a href="#/all"
               className={this.props.visibility === FilterConfig.VISIBILITY_COMPLETED ? "selected" : ""}
               onClick={this.setVisibilityToCompleted}>Completed</a>
          </li>
          }
        </ul>
        <button className="clear-completed" onClick={this.removeCompletedTodos}>Clear completed</button>
      </div>
    );
  };
}

TodoControl.propTypes = {
  visibility: PropTypes.string.isRequired,
  updateVisibility: PropTypes.func.isRequired,
  removeCompletedTodos: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  visibility: state.todoApp.visibility,
});

export default connect(mapStateToProps, {updateVisibility, removeCompletedTodos})(TodoControl);
