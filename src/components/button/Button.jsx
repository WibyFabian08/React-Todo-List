/** @jsx jsx */
// import React from "react";
import { jsx } from "@emotion/core";
import PropTypes from "prop-types";
import { useTheme } from "emotion-theming";

// import styles from "./button.module.css";
import * as styles from "./button.styles";

const Button = ({ text, onClick, color, align }) => {
  const theme = useTheme();
  return (
    <button css={styles.button({ color, align, theme })} onClick={onClick}>
      {text}
    </button>
  );
};

Button.defaultProps = {
  text: "Button",
  color: "black",
  align: "left"
};

Button.proptypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  color: PropTypes.oneOf(["black", "red"]),
  align: PropTypes.oneOf(["left", "right"])
};

export default Button;
