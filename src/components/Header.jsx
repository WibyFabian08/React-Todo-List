import React from "react";
import PropTypes from "prop-types";

const Header = function ({ showAddTogle, showAdd, clearTodos }) {
  return (
    <section className="header">
      <button className="header-button main-black-color" onClick={showAddTogle}>
        {showAdd ? "Finish" : "Add"}
      </button>
      <h1 className="header-title">Todo List</h1>
      <button className="header-button main-red-color" onClick={clearTodos}>
        Clear
      </button>
    </section>
  );
};

Header.propTypes = {
  showAddTogle: PropTypes.func.isRequired,
  showAdd: PropTypes.bool.isRequired,
  clearTodos: PropTypes.func.isRequired
};

export default Header;
