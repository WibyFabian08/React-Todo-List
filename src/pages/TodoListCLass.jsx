import React from "react";

import Paper from "../components/paper/PaperClass";
import Header from "../components/header/HeaderCLass";
import TodoForm from "../components/todoFrom/TodoFormCLass";
import Todos from "../components/todos/TodosCLass";

import Container from "../layout/Container";

class TodoList extends React.Component {
  state = {
    todos: [
      { text: "Belajar React", isCompleted: false },
      {
        text: "Belajar Javascript",
        isCompleted: false
      },
      {
        text: "Belajar Javascript Framework",
        isCompleted: true
      }
    ],
    showAdd: false
  };

  addTodo = (value) => {
    if (this.state.todos.length < 10) {
      const addedTodo = [
        ...this.state.todos,
        { text: value, isCompleted: false }
      ];

      this.setState = {
        todos: addedTodo
      };
    } else {
      alert("Todo Sudah Penuh!!!!!!");
    }
  };

  showAddTogle = () => {
    this.setState = {
      showAdd: true
    };
  };

  completeTodo = (index) => {
    const addedTodo = [...this.state.todos];
    addedTodo[index].isCompleted = !addedTodo[index].isCompleted;

    this.setState({
      todos: addedTodo
    });
  };

  clearTodos = () => {
    if (this.state.showAdd) {
      alert("Tidak Bisa menghapus ketika sedang ADD todo");
      return;
    } else {
      this.setState({
        todos: []
      });
    }
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
