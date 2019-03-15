import React, {Component} from "react";
import TodoStarIcon from './TodoStarIcon'

class TodoItem extends Component {
  index;
  todo;
  counterActiveStarred;

  constructor(props) {
    super(props);
    this.state = {
      completed: this.props.todo.completed,
    };

    this.replaceTodo = this.replaceTodo.bind(this);
  }

  onChange(event) {
    const isCompleted = event.target.checked;
    this.setState({
      completed: isCompleted,
    });

    const newTodo = JSON.parse(JSON.stringify(this.props.todo));
    newTodo.completed = isCompleted;

    this.props.replaceTodo(this.props.todo, newTodo);
  }

  replaceTodo(oldTodo, newTodo) {
    this.props.replaceTodo(oldTodo, newTodo);
  }

  render() {
    return (
      <li className={this.state.completed ? 'todo completed' : 'todo'}>
        <div className="view">
          <input className="toggle" type="checkbox"
                 onChange={this.onChange.bind(this)}
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

export default TodoItem;
