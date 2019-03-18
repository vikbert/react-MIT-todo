import React, {Component} from 'react';

class TodoForm extends Component {
  state = {todoInput: ''};

  handleChange = event => {
    this.setState({todoInput: event.target.value});
  };

  handleKeyPress = event => {
    if (event.key === 'Enter') {
      const newTodo = {
        id: window.todoStorage.uid++,
        title: this.state.todoInput,
        starred: 0,
        completed: false,
      };

      this.props.addTodoHandler(newTodo);
      this.setState({todoInput: ''});
    }
  };

  render() {
    return (
      <input className="new-todo" type="text" placeholder="What needs to be done?"
             value={this.state.todoInput}
             onChange={this.handleChange}
             onKeyPress={this.handleKeyPress}/>
    );
  }
}

export default TodoForm;
