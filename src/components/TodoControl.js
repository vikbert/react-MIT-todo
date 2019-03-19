import React, {Component} from "react";
import * as Filter from './FilterConfig';
import {connect} from 'react-redux';
import {removeCompletedTodos, updateVisibility} from "../redux/actions/todoActions";
import PropTypes from 'prop-types';

class TodoControl extends Component {
  handleClick = event => {
    this.props.updateVisibility(event.target.getAttribute('data-visibility'));
  };

  removeCompletedTodos = () => {
    this.props.removeCompletedTodos();
    this.props.updateVisibility('all');
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
               data-visibility={Filter.VISIBILITY_ALL}
               className={this.props.visibility === Filter.VISIBILITY_ALL ? "selected" : ""}
               onClick={this.handleClick}>All</a>
          </li>
          {this.props.counterCompleted > 0 &&
          <li>
            <a href="#/all"
               data-visibility={Filter.VISIBILITY_ACTIVE}
               className={this.props.visibility === Filter.VISIBILITY_ACTIVE ? "selected" : ""}
               onClick={this.handleClick}>Active</a>
          </li>
          }
          {this.props.counterCompleted > 0 &&
          <li>
            <a href="#/all"
               data-visibility={Filter.VISIBILITY_COMPLETED}
               className={this.props.visibility === Filter.VISIBILITY_COMPLETED ? "selected" : ""}
               onClick={this.handleClick}>Completed</a>
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
