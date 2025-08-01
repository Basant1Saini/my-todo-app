// src/ToDoItem.jsx
import React, { useState } from 'react';

function ToDoItem({ todo, onDeleteTodo, onToggleCompleted, onEditTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleEditSubmit = () => {
    if (editText.trim() !== '') {
      onEditTodo(todo.id, editText.trim());
      setIsEditing(false);
    }
  };

  const handleEditCancel = () => {
    setEditText(todo.text);
    setIsEditing(false);
  };

  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <div className="todo-content">
        <input 
          type="checkbox" 
          checked={todo.completed}
          onChange={() => onToggleCompleted(todo.id)}
          className="todo-checkbox"
        />
        
        {isEditing ? (
          <div className="edit-container">
            <input 
              type="text" 
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') handleEditSubmit();
                if (e.key === 'Escape') handleEditCancel();
              }}
              className="edit-input"
              autoFocus
            />
            <div className="edit-buttons">
              <button onClick={handleEditSubmit} className="save-btn">Save</button>
              <button onClick={handleEditCancel} className="cancel-btn">Cancel</button>
            </div>
          </div>
        ) : (
          <>
            <span 
              className="todo-text"
              onDoubleClick={() => setIsEditing(true)}
            >
              {todo.text}
            </span>
            <div className="todo-actions">
              <button 
                onClick={() => setIsEditing(true)} 
                className="edit-btn"
              >
                Edit
              </button>
              <button 
                onClick={() => onDeleteTodo(todo.id)} 
                className="delete-btn"
              >
                Delete
              </button>
            </div>
          </>
        )}
      </div>
    </li>
  );
}

export default ToDoItem;
