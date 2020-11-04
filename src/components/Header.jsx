import React from "react";
import PropTypes from "prop-types";

const Header = function () {
  return (
    <section className="header">
      <button className="header-button main-black-color">Add</button>
      <h1 className="header-title">Todo List</h1>
      <button className="header-button main-red-color"> Clear</button>
    </section>
  );
};

export default Header;
