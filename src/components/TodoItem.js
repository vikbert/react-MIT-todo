import React, {Component} from "react";

class TodoItem extends Component {
  index;
  todo;

  constructor(props) {
    super(props);
    this.state = {
      completed: this.props.todo.completed,
    };
  }

  onChange(event) {
    const isCompleted = event.target.checked;
    this.setState({
      completed: isCompleted,
    });

    const oldTodo = this.props.todo;
    this.props.replaceTodoByIndex(this.props.index, {
      id: oldTodo.id,
      title: oldTodo.title,
      starred: oldTodo.starred,
      completed: isCompleted,
    });
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
        </div>
        <input className="edit" type="text"/>
      </li>
    );
  }
}

export default TodoItem;
