/** @jsx jsx */
// import React from "react";
import { jsx } from "@emotion/core";
import PropTypes from "prop-types";

import Button from "../button/Button";
// import styles from "./header.module.css";
import * as styles from "./header.styles";

const Header = function ({ showAddTogle, showAdd, clearTodos }) {
  return (
    <section css={styles.header}>
      <Button
        text={showAdd ? "Finish" : "Add"}
        color="black"
        align="left"
        onClick={showAddTogle}
      />
      <h1 css={styles.headerTitle}>Todo List</h1>
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
