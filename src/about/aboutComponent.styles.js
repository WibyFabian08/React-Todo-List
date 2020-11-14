import { css } from "@emotion/core";

export const header = function () {
  return css`
    font-family: "Homemade Apple", sans-serif;
    font-size: 24px;
    flex-direction: "column";
    margin: auto;
    margin-top: 52%;
  `;
};

export const deskripsi = function () {
  return css`
    font-family: "Homemade Apple", sans-serif;
    font-size: 18px;
    text-indent: 50px;
    padding-left: 10px;
  `;
};

export const link = function () {
  return css`
    font-family: "Bungee", sans-serif;
    text-decoration: none;
    font-size: 18px;
  `;
};
