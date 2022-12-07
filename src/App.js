import React, { useState } from 'react';
import './App.css';

//importing components
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
      <header>
        <h2>Target for the day</h2>
      </header>
      <Form
        todos={todos}
        setTodos={setTodos}
        setInputValue={setInputValue}
        inputValue={inputValue}
      />
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
