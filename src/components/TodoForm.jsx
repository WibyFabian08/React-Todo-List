import React, { useState } from "react";
import PropTypes from "prop-types";

const TodoForm = function ({ addTodo, showAdd }) {
  const [inputUser, setInputUser] = useState("");

  const handleFormSubmit = function (event) {
    event.preventDefault();

    if (!inputUser) {
      return alert("Todo Tidak Boleh Kosong!!!!!");
    }

    if (inputUser.length > 40) {
      alert("Input Terlalu Panjang!!!!");
      setInputUser("");
      return;
    }

    // fungsi untuk add data ke database
    addTodo(inputUser);
    setInputUser("");
  };

  if (showAdd) {
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
  } else {
    return null;
  }
};

TodoForm.propTypes = {
  addTodo: PropTypes.func.isRequired,
  showAdd: PropTypes.bool.isRequired
};

export default TodoForm;
