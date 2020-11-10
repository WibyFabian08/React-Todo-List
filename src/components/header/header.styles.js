import { css } from "@emotion/core";

export const header = function () {
  return css`
    display: flex;
    align-items: flex-start;
  `;
};

export const headerTitle = function () {
  return css`
    width: 52%;
    text-align: center;
    font-family: "Homemade Apple", sans-serif;
    font-size: 3.6rem;
    text-transform: lowercase;
  `;
};
