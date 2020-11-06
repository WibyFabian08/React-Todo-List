import React, { useDebugValue, useState } from "react";

import Paper from "../components/Paper";
import Header from "../components/Header";
import TodoForm from "../components/TodoForm";
import Todos from "../components/Todos";

const TodoList = function () {
  const [todos, setTodos] = useState([
    {
      text: "Daftar Kegiatan yang Harus Dilakukan"
    }
  ]);

  const [showAdd, setShowAdd] = useState(false);

  const addTodo = function (value) {
    const addedTodo = [...todos, { text: value }];

    if (todos === value) {
      return alert("todo sudah ada dalam list");
    } else {
      setTodos(addedTodo);
    }
  };

  const showAddTogle = function () {
    setShowAdd(!showAdd);
  };

  return (
    <Paper>
      <Header showAddTogle={showAddTogle} showAdd={showAdd} />
      <TodoForm addTodo={addTodo} showAdd={showAdd} />
      <Todos todos={todos} />
    </Paper>
  );
};

export default TodoList;
