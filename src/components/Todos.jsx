import React from "react";

import Todo from "./Todo";

const Todos = function () {
  const todos = [
    {
      text: "Belajar React"
    },
    {
      text: "Learning React"
    },
    {
      text: "Belajar Sepakbola"
    },
    {
      text: "Belajar Berenang"
    },
    {
      text: "Belajar Berlari"
    },
    {
      text: "Belajar Memanjat Pohon"
    },
    {
      text: "Belajar Bersembunyi"
    },
    {
      text: "Belajar Menari"
    },
    {
      text: "Belajar Berakting"
    },
    {
      text: "Belajar Melepaskan Dirinya"
    }
  ];

  return (
    <div className="todos">
      {todos.map((todo) => {
        return <Todo text={todo.text} />;
      })}
    </div>
  );
};

export default Todos;
