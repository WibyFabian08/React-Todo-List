import { css } from "@emotion/core";

export const todos = function () {
  return css`
    display: flex;
    flex-direction: column;

    min-height: 500px;
  `;
};

export const todosKosong = function () {
  return css`
    font-family: "Homemade Apple", sans-serif;
    font-size: 3.2rem;
    text-align: center;
    padding: 16px;
    text-decoration: lowercase;
  `;
};

export const addKosong = function () {
  return css`
    font-family: "Bungee", sans-serif;
  `;
};
