import React from "react";
import Proptypes from "prop-types";

const useStateWithLocalStorage = function (localStorageKey) {
  const [todos, setTodos] = React.useState(
    JSON.parse(localStorage.getItem(localStorageKey))
  );

  if (!localStorageKey) {
    alert("Key must be filled!!!!");
  }

  React.useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(todos));
  }, [todos, localStorageKey]);

  return [todos, setTodos];
};

useStateWithLocalStorage.propTypes = {
  localStorageKey: Proptypes.string.isRequired
};

export default useStateWithLocalStorage;
