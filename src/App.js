import React from "react";
import "./styles.css";

import Paper from "./components/Paper";

export default function App() {
  return (
    <Paper>
      <section className="header">
        <button className="header-button main-black-color">Add</button>
        <h1 className="header-title">Todo List</h1>
        <button className="header-button main-red-color"> Clear</button>
      </section>

      <section className="todo-form">
        <form className="input-form">
          <input type="text" className="input-todo"></input>
          <button className="add-todo main-red-color">Add</button>
        </form>
      </section>

      <section className="todos">
        <div className="todo">
          <span className="todo-text">Learning Todo</span>
        </div>
        <div className="todo">
          <span className="todo-text">Learning Todo</span>
        </div>
        <div className="todo">
          <span className="todo-text">Learning Todo</span>
        </div>
        <div className="todo">
          <span className="todo-text">Learning Todo</span>
        </div>
        <div className="todo">
          <span className="todo-text">Learning Todo</span>
        </div>
        <div className="todo">
          <span className="todo-text">Learning Todo</span>
        </div>
        <div className="todo">
          <span className="todo-text">Learning Todo</span>
        </div>
        <div className="todo">
          <span className="todo-text">Learning Todo</span>
        </div>
        <div className="todo">
          <span className="todo-text">Learning Todo</span>
        </div>
        <div className="todo">
          <span className="todo-text">Learning Todo</span>
        </div>
      </section>
    </Paper>
  );
}
