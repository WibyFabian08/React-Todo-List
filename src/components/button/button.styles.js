import { css } from "@emotion/core";

export const button = function ({ color, align }) {
  switch (color) {
    case "black":
      color = "#2d2d2d";
      break;
    case "red":
      color = "#e06262";
      break;
    default:
      color = "#2d2d2d";
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
