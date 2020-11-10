import { css } from "@emotion/core";

export const button = function ({ color, align, theme }) {
  let textColor;
  const {
    color: { primary }
  } = theme;

  switch (color) {
    case "red":
      textColor = primary.red;
      break;
    case "black":
      textColor = primary.black;
      break;
    default:
      textColor = primary.black;
  }

  return css`
    width: 24%;
    background: unset;
    border: unset;
    outline: unset;
    font-size: 1.8rem;
    font-family: "Bungee", sans-serif;
    padding: 24px;
    cursor: pointer;
    color: ${color};
    text-align: ${align};
    &:active {
      text-shadow: 1px 1px 2px ${color};
    }
  `;
};
