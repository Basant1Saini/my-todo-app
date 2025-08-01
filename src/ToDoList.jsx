// src/components/ToDoList.jsx
import React from 'react';
import ToDoItem from './ToDoItem';

function ToDoList({ todos, onDeleteTodo, onToggleCompleted, onEditTodo }) {
  return (
    <ul className="todo-list">
      {todos.map(todo => (
        <ToDoItem 
          key={todo.id}
          todo={todo}
          onDeleteTodo={onDeleteTodo}
          onToggleCompleted={onToggleCompleted}
          onEditTodo={onEditTodo}
        />
      ))}
    </ul>
  );
}

export default ToDoList;