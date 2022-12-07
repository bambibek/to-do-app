import React, { useState, useEffect } from 'react';
import './App.css';

//importing components
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  //STATES
  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);

  //USE EFFECT
  useEffect(() => {
    filterHandler();
  }, [todos, status]);

  //FUNCTION EVENTS
  const filterHandler = () => {
    switch (status) {
      case 'completed':
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };
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
        setStatus={setStatus}
      />
      <TodoList
        filteredTodos={filteredTodos}
        todos={todos}
        setTodos={setTodos}
      />
    </div>
  );
}

export default App;
