import React, { useState } from "react";

import Paper from "../components/paper/Paper";
import Header from "../components/header/Header";
import TodoForm from "../components/todoFrom/TodoForm";
import Todos from "../components/todos/Todos";

import Container from "../layout/Container";

import useStateWithLocalStorage from "../hooks/useStateWithLocalStorage";

const TodoList = function () {
  // import dari hooks custom
  const [todos, setTodos] = useStateWithLocalStorage("todos");

  // const [todos, setTodos] = useState(
  //   JSON.parse(localStorage.getItem("todos")) || []
  // );

  const [showAdd, setShowAdd] = useState(false);

  // useEffect(() => {
  //   localStorage.setItem("todos", JSON.stringify(todos));
  // }, [todos]);

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
      return alert("Tidak Bisa Menghapus Ketika Sedang ADD Todo");
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
