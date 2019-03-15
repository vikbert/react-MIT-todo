import React, {Component} from 'react';

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoInput: '',
    };
  }

  handleChange(event) {
    this.setState({todoInput: event.target.value});
  }

  handleKeyPress(event) {
    if (event.key === 'Enter') {
      this.props.addTodoHandler({
        id: window.todoStorage.uid++,
        title: this.state.todoInput,
        starred: 0,
        completed: false,
      });

      this.setState({todoInput: ''});
    }
  }

  render() {
    return (
      <input className="new-todo" type="text" placeholder="What needs to be done?"
             value={this.state.todoInput}
             onChange={this.handleChange.bind(this)}
             onKeyPress={this.handleKeyPress.bind(this)}/>
    );
  }
}

export default TodoForm;
