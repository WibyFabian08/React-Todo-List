import React, { useState } from "react";

import Paper from "../components/Paper";
import Header from "../components/Header";
import TodoForm from "../components/TodoForm";
import Todos from "../components/Todos";

const TodoList = function () {
  const [todos, setTodos] = useState([
    {
      text: "Daftar Kegiatan yang Harus Dilakukan",
      isCompleted: false
    },
    {
      text: "Daftar Kegiatan yang Harus Dilakukan",
      isCompleted: false
    },
    {
      text: "Daftar Kegiatan yang Harus Dilakukan",
      isCompleted: false
    }
  ]);

  const [showAdd, setShowAdd] = useState(false);

  const addTodo = function (value) {
    const addedTodo = [...todos, { text: value, isCompleted: false }];

    if (todos.length > 10) {
      alert("Todo Sudah Penuh!!!!!!");
    } else {
      setTodos(addedTodo);
    }
  };

  const showAddTogle = function () {
    setShowAdd(!showAdd);
  };

  const completeTodo = function (index) {
    const addedTodo = [...todos];
    addedTodo[index].isCompleted = !addedTodo[index].isCompleted;

    setTodos(addedTodo);
  };

  const clearTodos = function () {
    !showAdd && setTodos([]);
  };

  return (
    <Paper>
      <Header
        showAddTogle={showAddTogle}
        showAdd={showAdd}
        clearTodos={clearTodos}
      />
      <TodoForm addTodo={addTodo} showAdd={showAdd} />
      <Todos todos={todos} completeTodo={completeTodo} />
    </Paper>
  );
};

export default TodoList;
