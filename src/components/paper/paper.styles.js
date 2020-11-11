import { css } from "@emotion/core";

export const container = function () {
  return css`
    width: 600px;
    height: 800px;
    background-color: #f2eecb;

    border-radius: 5px;
    padding: 16px;
  `;
};

export const frame = function () {
  return css`
    border: 1px solid #2d2d2d;
    height: 100%;

    /* display: flex; */
    /* flex-direction: column; */
    /* justify-content: space-between; */
  `;
};
