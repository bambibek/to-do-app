import React from "react";
import "./App.css";

import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="App">
      <header>
        <h2>Target for the day</h2>
      </header>
      <Form />
      <TodoList />
    </div>
  );
}

export default App;
