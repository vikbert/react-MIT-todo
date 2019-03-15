import React, { Component } from "react";
import "./App.css";
import FilterConfig from "./components/FilterConfig";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";
import TodoControl from "./components/TodoControl";
import TodoCounter from "./components/TodoCounter";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: window.todoStorage.fetch() || [],
      visibility: FilterConfig.VISIBILITY_ALL || "all"
    };
    this.replaceTodo = this.replaceTodo.bind(this);
  }

  componentDidUpdate() {
    window.todoStorage.save(this.state.todos);
  }

  addTodo(todoObj) {
    this.setState({
      todos: [todoObj, ...this.state.todos]
    });
  }

  replaceTodo(oldTodo, newTodo) {
    const todos = this.state.todos;
    const index = todos.indexOf(oldTodo);

    todos[index] = newTodo;

    this.setState({
      todos: todos
    });
  }

  removeCompletedTodos() {
    const onlyActiveTodos = this.sortStarredTodosFirst(this.getActiveTodos());
    this.setState({
      todos: onlyActiveTodos
    });
  }

  updateVisibility(newVisibility) {
    this.setState({
      visibility: newVisibility
    });
  }

  getFilteredTodos() {
    switch (this.state.visibility) {
      case FilterConfig.VISIBILITY_ACTIVE:
        return this.getActiveTodos();
      case FilterConfig.VISIBILITY_COMPLETED:
        return this.getCompletedTodos();
      default:
        return this.getAllTodos();
    }
  }

  getAllTodos() {
    const active = this.getActiveTodos();
    const completed = this.getCompletedTodos();

    return active.concat(completed);
  }

  getCompletedTodos() {
    const filtered = this.state.todos.filter(todo => todo.completed === true);
    return filtered.sort((a, b) => a.id - b.id);
  }

  getActiveTodos() {
    const activeTodos = this.state.todos.filter(todo => todo.completed === false);

    return activeTodos.sort((a, b) => b.starred - a.starred);
  }

  getActiveStarred() {
    const activeTodos = this.getActiveTodos();

    return activeTodos.filter(todo => todo.starred === 1);
  }

  counterActiveStarred() {
    return this.getActiveStarred().length;
  }

  sortStarredTodosFirst(todos) {
    return todos.sort((a, b) => b.starred - a.starred);
  }

  render() {
    return (
      <div id="todo-demo">
        <a
          href="https://github.com/vikbert/react-MIT-todo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="avatar"
            src="https://github.githubassets.com/images/modules/site/logos/desktop-logo.png"
            alt="avatar"
          />
        </a>
        <section className="todoapp">
          <header className="header">
            <h1>M I T Todo</h1>
            {this.state.visibility !== FilterConfig.VISIBILITY_COMPLETED && (
              <TodoForm addTodoHandler={this.addTodo.bind(this)} />
            )}
          </header>

          <section className="main">
            <ul className="todo-list">
              {this.getFilteredTodos().map((todo, index) => {
                return (
                  <TodoItem
                    key={todo.id}
                    index={index}
                    todo={todo}
                    counterActiveStarred={this.counterActiveStarred.bind(this)}
                    replaceTodo={this.replaceTodo}
                  />
                );
              })}
            </ul>
          </section>
          <footer className="footer">
            <TodoCounter counterActive={this.getActiveTodos().length} />
            <TodoControl
              visibility={this.state.visibility}
              counterCompleted={this.getCompletedTodos().length}
              removeCompletedTodos={this.removeCompletedTodos.bind(this)}
              updateVisibility={this.updateVisibility.bind(this)}
            />
          </footer>
        </section>
      </div>
    );
  }
}

export default App;
