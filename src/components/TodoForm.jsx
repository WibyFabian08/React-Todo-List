import React from "react";

const TodoForm = function () {
  return (
    <section className="todo-form">
      <form className="input-form">
        <input type="text" className="input-todo"></input>
        <button className="add-todo main-red-color">Add</button>
      </form>
    </section>
  );
};

export default TodoForm;
