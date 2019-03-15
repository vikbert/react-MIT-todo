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

  cloneObject(original) {
    return JSON.parse(JSON.stringify(original));
  }

  onChange(event) {
    const isCompleted = event.target.checked;
    this.setState({
      completed: isCompleted,
    });

    const newTodo = this.cloneObject(this.props.todo);
    newTodo.completed = isCompleted;

    this.props.replaceTodo(this.props.todo, newTodo);
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
