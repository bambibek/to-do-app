import React from 'react';

const Form = (props) => {
  //text Handler
  const handleInputChange = (e) => {
    props.setInputValue(e.target.value);
  };
  //submit handler
  const handleTodoSubmit = (e) => {
    e.preventDefault();
    props.setTodos([
      ...props.todos,
      { text: props.inputValue, completed: false, id: Math.random() * 1000 },
    ]);
    props.setInputValue('');
  };

  //ststus Handler
  const statusHandler = (e) => {
    props.setStatus(e.target.value);
  };

  return (
    <>
      <form>
        <input
          onChange={handleInputChange}
          value={props.inputValue}
          type="text"
          className="todo-input"
        />
        <button
          onClick={handleTodoSubmit}
          className="todo-button"
          type="submit"
        >
          <i className="fas fa-plus-square"></i>
        </button>

        {/* STATUS filter */}

        <div className="select">
          <select onChange={statusHandler} name="todos" className="filter-todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>
    </>
  );
};

export default Form;
