/** @jsx jsx */
import React, { useState } from "react";
import { jsx } from "@emotion/core";
import PropTypes from "prop-types";

// import styles from "./todoForm.module.css";
import * as styles from "./todoFrom.styles";

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
      <section css={styles.todoForm}>
        <form css={styles.inputForm} onSubmit={handleFormSubmit}>
          <input
            type="text"
            css={styles.inputTodo}
            value={inputUser}
            onChange={(event) => setInputUser(event.target.value)}
          ></input>
          <button css={styles.addTodo}>Add</button>
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
