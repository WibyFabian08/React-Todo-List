/** @jsx jsx */
// import React from "react";
import { jsx, css } from "@emotion/core";
import PropTypes from "prop-types";

const Item = function ({ children, flex }) {
  return (
    <div
      className="flex-item"
      css={css`
        flex: ${flex};
      `}
    >
      {children}
    </div>
  );
};

Item.propsTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array(PropTypes.node),
    PropTypes.node
  ]),
  flex: PropTypes.oneOf([PropTypes.number, PropTypes.string])
};

export default Item;
