import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import "./App.css";
import * as FilterConfig from "./components/FilterConfig";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";
import TodoControl from "./components/TodoControl";
import { fetchTodos } from "./redux/actions/todoActions";
import GitHub from './components/Github';

class App extends Component {
  componentWillMount() {
    this.props.fetchTodos();
  }

  getFilteredTodos() {
    switch (this.props.visibility) {
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
    const filtered = this.props.todos.filter(todo => todo.completed === true);
    return filtered.sort((a, b) => a.id - b.id);
  }

  getActiveTodos = () => {
    const activeTodos = this.props.todos.filter(
      todo => todo.completed === false
    );

    return activeTodos.sort((a, b) => b.starred - a.starred);
  };

  getActiveStarred() {
    const activeTodos = this.getActiveTodos();

    return activeTodos.filter(todo => todo.starred === 1);
  }

  counterActiveStarred = () => {
    return this.getActiveStarred().length;
  };

  sortStarredTodosFirst(todos) {
    return todos.sort((a, b) => b.starred - a.starred);
  }

  render() {
    return (
      <div>
        <GitHub></GitHub>
        <section className="todoapp">
          <header className="header">
            <h1>{"M I T Todo"}</h1>
            {this.props.visibility !== FilterConfig.VISIBILITY_COMPLETED && (
              <TodoForm />
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
                    counterActiveStarred={this.counterActiveStarred}
                  />
                );
              })}
            </ul>
          </section>
          <footer className="footer">
            <TodoControl
              counterCompleted={this.getCompletedTodos().length}
              getActiveTodos={this.getActiveTodos}
            />
          </footer>
        </section>
        <span>{"CSS template powered by todomvc.com®"}</span>
      </div>
    );
  }
}

App.propTypes = {
  todos: PropTypes.array.isRequired,
  visibility: PropTypes.string.isRequired,
  fetchTodos: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  todos: state.todoApp.todos,
  visibility: state.todoApp.visibility
});

export default connect(mapStateToProps, {fetchTodos})(App);
