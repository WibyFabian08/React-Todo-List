import React, { useState } from "react";
import PropTypes from "prop-types";

const TodoForm = function ({ addTodo }) {
  const [inputUser, setInputUser] = useState("");

  const handleFormSubmit = function (event) {
    event.preventDefault();

    if (!inputUser) {
      return alert("Todo Tidak Boleh Kosong!!!!!");
    }

    addTodo(inputUser);
    alert(inputUser);
    setInputUser("");
  };

  return (
    <section className="todo-form">
      <form className="input-form" onSubmit={handleFormSubmit}>
        <input
          type="text"
          className="input-todo"
          value={inputUser}
          onChange={(event) => setInputUser(event.target.value)}
        ></input>
        <button className="add-todo main-red-color">Add</button>
      </form>
    </section>
  );
};

TodoForm.propTypes = {
  addTodo: PropTypes.func.isRequired
};

export default TodoForm;
