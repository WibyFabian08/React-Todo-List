import { css } from "@emotion/core";

export const todoForm = function () {
  return css`
    padding: 16px;
  `;
};

// export const inputForm = function () {
//   return css`
//     /* display: flex;
//     align-items: center; */
//   `;
// };

export const inputTodo = function () {
  return css`
    padding: 0 64px;
    background: unset;
    border: unset;
    outline: unset;
    border-bottom: 1px solid var(--main-red-color);
    font-family: "Homemade Apple", sans-serif;
    text-decoration: lowercase;
    font-size: 16px;
    width: 100%;
  `;
};
