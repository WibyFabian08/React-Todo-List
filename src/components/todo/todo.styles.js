import { css } from "@emotion/core";

export const todo = function () {
  return css`
    position: relative;
    text-align: center;
    flex: 1 0 auto;
    max-height: 34px;
    margin: 12px 0 0;
    font-family: "Homemade Apple", sans-serif;
    font-size: 24px;
    border-bottom: 1px solid var(--main-red-color);
    cursor: pointer;
  `;
};

export const todoText = function () {
  return css`
    width: 100%;
    height: 50px;
    position: absolute;
    left: 50%;
    transform: translate(-50%);
  `;
};
