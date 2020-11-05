import React from "react";
import PropTypes from "prop-types";

const Header = function ({ showAddTogle }) {
  return (
    <section className="header">
      <button className="header-button main-black-color" onClick={showAddTogle}>
        Add
      </button>
      <h1 className="header-title">Todo List</h1>
      <button className="header-button main-red-color"> Clear</button>
    </section>
  );
};

Header.propTypes = {
  showAddTogle: PropTypes.func.isRequired
};

export default Header;
