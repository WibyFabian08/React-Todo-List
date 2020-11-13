import React from "react";

import Paper from "../components/paper/PaperClass";
import Header from "../components/header/HeaderCLass";
import TodoForm from "../components/todoFrom/TodoFormCLass";
import Todos from "../components/todos/TodosCLass";

import Container from "../layout/Container";

class TodoList extends React.Component {
  // buat state
  state = {
    todos: [
      {
        text: "Ini dari classs brooooo",
        isCompleted: false
      },
      {
        text: "halvhvlvkalkvnlk",
        isCompleted: false
      },
      {
        text: "Belajar Javascript Framework",
        isCompleted: false
      }
    ],
    showAdd: false
  };

  addTodo = (value) => {
    const addedTodo = [
      ...this.state.todos,
      { text: value, isCompleted: false }
    ];

    if (this.state.todos > 10) {
      alert("Todo Sudah Penuh!!!!!");
    } else {
      this.setState = {
        todos: addedTodo
      };
    }
  };

  completeTodo = (index) => {
    const addedTodo = [...this.state.todos];

    addedTodo[index].isCompleted = !addedTodo[index].isCompleted;

    this.setState = {
      todos: addedTodo
    };
  };

  clearTodos = () => {
    if (this.state.showAdd) {
      return alert("Tidak Bisa Menghapus Ketika Sedang ADD todo");
    } else {
      this.setState = {
        todos: []
      };
    }
  };

  showAddTogle = function () {
    this.setState = {
      showAdd: !showAdd
    };
  };

  render() {
    const { todos, showAdd } = this.state;
    return (
      <Paper>
        <Container
          flexDirection="column"
          justifyContent="space-between"
          height="100%"
        >
          <Header
            showAddTogle={this.showAddTogle}
            showAdd={showAdd}
            clearTodos={this.clearTodos}
          />
          <TodoForm addTodo={this.addTodo} showAdd={showAdd} />
          <Todos todos={todos} completeTodo={this.completeTodo} />
        </Container>
      </Paper>
    );
  }
}

export default TodoList;
