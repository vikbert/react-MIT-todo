import React, {Component} from "react";
import TodoStarIcon from './TodoStarIcon';
import {connect} from 'react-redux'
import {updateTodo} from "../redux/actions/todoActions";

class TodoItem extends Component {
  state = {
    completed: this.props.todo.completed,
  };

  handleChange = event => {
    const isCompleted = event.target.checked;
    this.setState({
      completed: isCompleted,
    });

    const newTodo = {...this.props.todo, completed: isCompleted};

    this.props.updateTodo(newTodo, this.props.todo);
  };

  render() {
    return (
      <li className={this.state.completed ? 'todo completed' : 'todo'}>
        <div className="view">
          <input className="toggle" type="checkbox"
                 onChange={this.handleChange}
                 defaultChecked={this.state.completed}
          />
          <label>{this.props.todo.title}</label>
          <TodoStarIcon todo={this.props.todo}
                        replaceTodo={this.replaceTodo}
          />
        </div>
        <input className="edit" type="text"/>
      </li>
    );
  }
}

export default connect(null, {updateTodo})(TodoItem);
