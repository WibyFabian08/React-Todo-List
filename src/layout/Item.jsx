/** @jsx jsx */
// import React from "react";
import { jsx, css } from "@emotion/core";
import PropTypes from "prop-types";

const Item = function ({ children, flex, widht, padding }) {
  return (
    <div
      className="flex-item"
      css={css`
        flex: ${flex};
        width: ${widht};
        padding: ${padding};
      `}
    >
      {children}
    </div>
  );
};

Item.propsTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  flex: PropTypes.oneOf([PropTypes.number, PropTypes.string]),
  width: PropTypes.oneOf([PropTypes.number, PropTypes.string]),
  padding: PropTypes.oneOf([PropTypes.number, PropTypes.string])
};

export default Item;
