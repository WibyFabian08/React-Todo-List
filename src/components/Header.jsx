import React from "react";
import PropTypes from "prop-types";

import Button from "./Button";

const Header = function ({ showAddTogle, showAdd, clearTodos }) {
  return (
    <section className="header">
      <Button
        text={showAdd ? "Finish" : "Add"}
        color="black"
        align="left"
        onClick={showAddTogle}
      />
      <h1 className="header-title">Todo List</h1>
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
