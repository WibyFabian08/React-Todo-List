import React from "react";
import PropTypes from "prop-types";

const Todo = function (inputText) {
  return (
    <div className="todo">
      <span className="todo-text">{inputText.text}</span>
    </div>
  );
};

Todo.propTypes = {
  text: PropTypes.string.isRequired
};

export default Todo;
