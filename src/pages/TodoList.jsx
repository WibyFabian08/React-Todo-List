import React, { useState, useEffect } from "react";

import Paper from "../components/paper/Paper";
import Header from "../components/header/Header";
import TodoForm from "../components/todoFrom/TodoForm";
import Todos from "../components/todos/Todos";

import Container from "../layout/Container";

const TodoList = function () {
  // const [todos, setTodos] = useState([
  //   {
  //     text: "Belajar React",
  //     isCompleted: false
  //   },
  //   {
  //     text: "Belajar Javascript",
  //     isCompleted: false
  //   },
  //   {
  //     text: "Belajar Javascript Framework",
  //     isCompleted: false
  //   }
  // ]);

  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );

  const [showAdd, setShowAdd] = useState(false);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

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
    if (showAdd) {
      !showAdd && setTodos([]);
      return alert("Tidak Bisa menghapus ketika sedang ADD todo");
    } else {
      setTodos([]);
    }
  };

  return (
    <Paper>
      <Container
        flexDirection="column"
        justifyContent="space-between"
        height="100%"
      >
        <Header
          showAddTogle={showAddTogle}
          showAdd={showAdd}
          clearTodos={clearTodos}
        />
        <TodoForm addTodo={addTodo} showAdd={showAdd} />
        <Todos todos={todos} completeTodo={completeTodo} />
      </Container>
    </Paper>
  );
};

export default TodoList;
