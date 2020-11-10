import { css } from "@emotion/core";

export const button = function ({ color, align }) {
  let textColor;

  switch (color) {
    case "red":
      textColor = "#e06262";
      break;
    case "black":
      textColor = "#484848";
      break;
    default:
      textColor = "#484848";
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
  `;
};
