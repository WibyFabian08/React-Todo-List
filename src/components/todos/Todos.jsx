/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import PropTypes from "prop-types";

import Todo from "../todo/TodoCLass";
// import styles from "./todos.module.css";
import * as styles from "./todos.styles";
import Item from "../../layout/Item";
import Container from "../../layout/Container";
import { Link } from "react-router-dom";

const Todos = function ({ todos, completeTodo }) {
  return (
    <section css={styles.todos}>
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
        <React.Fragment>
          <div css={styles.todosKosong}>
            Click <span css={styles.addKosong}>Add</span> to Fill the Todo List
          </div>
          <Container justifyContent="center">
            <Item>
              <Link css={styles.aboutPageKosong} to="/About">
                Or Visit About Page
              </Link>
            </Item>
          </Container>
        </React.Fragment>
      )}
    </section>
  );
};

Todos.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string
    })
  ),
  completeTodo: PropTypes.func.isRequired
};

export default Todos;
