import React, { useDebugValue, useState } from "react";

import Paper from "../components/Paper";
import Header from "../components/Header";
import TodoForm from "../components/TodoForm";
import Todos from "../components/Todos";

const TodoList = function () {
  const [todos, setTodos] = useState([
    {
      text: "Belajar React"
    },
    {
      text: "Belajar Berenang"
    },
    {
      text: "Belajar Memancing"
    }
  ]);

  const addTodo = function (value) {
    const addedTodo = [...todos, { text: value }];

    if (todos === value) {
      return alert("todo sudah ada dalam list");
    } else {
      setTodos(addedTodo);
    }
  };

  return (
    <Paper>
      <Header />
      <TodoForm addTodo={addTodo} />
      <Todos todos={todos} />
    </Paper>
  );
};

export default TodoList;
