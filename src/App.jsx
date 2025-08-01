import React, { useState } from 'react';
import './App.css'
import Header from './Header';
import ToDoList from './ToDoList';

function App() {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (newTodoText) => {
    const newTodo = {
      id: Date.now(),
      text: newTodoText,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const handleToggleCompleted = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const handleEditTodo = (id, newText) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, text: newText } : todo
    ));
  };


  return (
    <div className="app">
      <Header />
      <div className="todo-input-container">
        <input 
          type="text" 
          placeholder="Add a new to-do" 
          onKeyDown={(e) => {
            if (e.key === 'Enter' && e.target.value.trim() !== '') {
              handleAddTodo(e.target.value.trim());
              e.target.value = '';
            }
          }}
        />
      </div>
      <ToDoList 
        todos={todos} 
        onDeleteTodo={handleDeleteTodo} 
        onToggleCompleted={handleToggleCompleted} 
        onEditTodo={handleEditTodo}
      />
    </div>
  );
}

export default App;
