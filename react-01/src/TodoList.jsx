import React, { useState } from 'react';

function TodoList() {
  const [todos, setTodos] = useState([]); // Initial value empty array
  const [newTodo, setNewTodo] = useState(''); // New todo input field

  const handleAddTodo = () => {
    if (newTodo.trim() !== '') { // Agar input empty nahi hai
      setTodos([...todos, newTodo]); // Naya todo existing todos mein add karo
      setNewTodo(''); // Input field ko clear karo
    }
  };

  const handleDeleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index); // Is index ke todo ko remove karo
    setTodos(updatedTodos);
  };

  return (
    <div>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add a new todo"
      />
      <button onClick={handleAddTodo}>Add Todo</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => handleDeleteTodo(index)} style={{ marginLeft: '10px' }}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;