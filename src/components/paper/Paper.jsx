/** @jsx jsx */
// import React from "react";
import { jsx } from "@emotion/core";
import PropTypes from "prop-types";

// import styles from "./paper.module.css";
import * as styles from "./paper.styles";

const Paper = function ({ children }) {
  return (
    <div css={styles.container}>
      <div css={styles.frame}>{children}</div>
    </div>
  );
};

Paper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

export default Paper;
