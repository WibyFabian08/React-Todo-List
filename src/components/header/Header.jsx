import React from "react";
import PropTypes from "prop-types";

import Button from "../button/Button";
import styles from "./header.module.css";

const Header = function ({ showAddTogle, showAdd, clearTodos }) {
  return (
    <section className={styles.header}>
      <Button
        text={showAdd ? "Finish" : "Add"}
        color="black"
        align="left"
        onClick={showAddTogle}
      />
      <h1 className={styles.headerTitle}>Todo List</h1>
      <Button text="Clear" color="red" align="right" onClick={clearTodos} />
    </section>
  );
};

Header.propTypes = {
  showAddTogle: PropTypes.func.isRequired,
  showAdd: PropTypes.bool.isRequired,
  clearTodos: PropTypes.func.isRequired
};

export default Header;
