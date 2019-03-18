import React from 'react';

const TodoCounter = (props) => (
  <span className="todo-count">
    <strong>{props.counterActive}</strong> items left
  </span>
);

export default TodoCounter;
