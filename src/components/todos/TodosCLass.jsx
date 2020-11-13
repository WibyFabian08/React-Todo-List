import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

import Todo from "../todo/TodoCLass";

const StyledTodos = styled.section`
  display: flex;
  flex-direction: column;

  min-height: 500px;
`;

const StyledTodosKosong = styled.div`
  font-family: "Homemade Apple", sans-serif;
  font-size: 3.2rem;
  text-align: center;
  padding: 16px;
  text-decoration: lowercase;
`;

const StyledAddKosong = styled.span`
  font-family: "Bungee", sans-serif;
`;

class Todos extends React.Component {
  render() {
    const { todos, completeTodo } = this.props;
    return (
      <StyledTodos>
        {todos.length > 0 &&
          todos.map((todo, index) => {
            return (
              <Todo
                key={index}
                text={todo.text}
                isCompleted={todo.isCompleted}
                completeTodo={completeTodo}
                index={index}
              />
            );
          })}
        {todos.length === 0 && (
          <StyledTodosKosong>
            {[
              "click ",
              <StyledAddKosong>ADD</StyledAddKosong>,
              " to Fill the Todo List"
            ]}
          </StyledTodosKosong>
        )}
      </StyledTodos>
    );
  }

  static propTypes = {
    todos: PropTypes.arrayOf(
      PropTypes.shape({
        text: PropTypes.string
      })
    ),
    completeTodo: PropTypes.func.isRequired
  };
}

export default Todos;
