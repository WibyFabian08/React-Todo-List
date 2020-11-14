/** @jsx jsx */
// import React from "react";
import { jsx } from "@emotion/core";
import PropTypes from "prop-types";

import Button from "../button/ButtonClass";
// import styles from "./header.module.css";
import * as styles from "./header.styles";

import Container from "../../layout/Container";
import Item from "../../layout/Item";

const Header = function ({ showAddTogle, showAdd, clearTodos }) {
  return (
    <section className="container-header">
      <Container alignItem="flex-start">
        <Item>
          <Button
            text={showAdd ? "Finish" : "Add"}
            color="black"
            align="left"
            onClick={showAddTogle}
          />
        </Item>
        <Item textAlign="left">
          <h1 css={styles.headerTitle}>Todo List</h1>
        </Item>
        <Item>
          <Button text="Clear" color="red" align="left" onClick={clearTodos} />
        </Item>
      </Container>
    </section>
  );
};

Header.propTypes = {
  showAddTogle: PropTypes.func.isRequired,
  showAdd: PropTypes.bool.isRequired,
  clearTodos: PropTypes.func.isRequired,
  align: PropTypes.string.isRequired
};

export default Header;
